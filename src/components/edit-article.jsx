import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams, useNavigate } from "react-router-dom";
import ArticleService from "../service/article";
import { getArticleDetailFailure, getArticleDetailStart, getArticleDetailSuccess, postArticleFailure, postArticleStart, postArticleSuccess } from "../slice/article";
import ArticleForm from "./article-form";

const EditArticle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { slug } = useParams();

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [body, setBody] = useState("")

  const getArticleDetail = async () => {
    dispatch(getArticleDetailStart());
    try {
      const response = await ArticleService.getArticleDetail(slug);
      setTitle(response.article.title)
      setDescription(response.article.description)
      setBody(response.article.body)
      dispatch(getArticleDetailSuccess(response.article));
    } catch (error) {
      dispatch(getArticleDetailFailure());
      console.log(error);
    }
  };

  useEffect(() => {
    getArticleDetail()
  }, []);

  const formSubmit = async(e) => {
    e.preventDefault()
    dispatch(postArticleStart())
    const article = {title, description, body}
    try {
      await ArticleService.editArticle(slug, article)
      dispatch(postArticleSuccess())
      navigate("/")
    } catch (error) {
      dispatch(postArticleFailure())
      console.log(error)
    }
  }
  const formProps = {title, description, body, setBody, setTitle, setDescription, formSubmit}

  return (
    <div className="text-center">
      <h1 className="fs-2">Edit article</h1>
      <div className="w-75 mx-auto">
        <ArticleForm {...formProps} />
      </div>
    </div>
  )
}

export default EditArticle