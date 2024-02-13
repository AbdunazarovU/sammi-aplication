import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import ArticleService from "../service/article"
import { getArticleDetailFailure, getArticleDetailStart, getArticleDetailSuccess } from "../slice/article"

const ArticleDetail = () => {
  const { slug } = useParams()
  const dispatch = useDispatch(state => state.article);

  const getArticleDetail = async() => {
    dispatch(getArticleDetailStart())
    try {
      const response = await ArticleService.getArticleDetail(slug)
      dispatch(getArticleDetailSuccess(response.article))
    } catch (error) {
      dispatch(getArticleDetailFailure())
      console.log(error)
    }
  }

  useEffect(() => {
    getArticleDetail()
  }, [slug])


  return (
    <div>ArticleDetail: {slug}</div>
  )
}

export default ArticleDetail