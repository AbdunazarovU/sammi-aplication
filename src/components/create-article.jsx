import { useState } from "react"
import { useDispatch } from "react-redux"
import ArticleForm from "./article-form"
import { useNavigate } from "react-router-dom"
import ArticleService from "../service/article"
import { postArticleFailure, postArticleStart, postArticleSuccess } from "../slice/article"

const CreateArticle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [body, setBody] = useState("")

  const formSubmit = async(e) => {
    e.preventDefault()
    dispatch(postArticleStart())
    const article = {title, description, body}
    try {
      await ArticleService.postArticle(article)
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
      <h1 className="fs-2">Create article</h1>
      <div className="w-75 mx-auto">
        <ArticleForm {...formProps} />
      </div>
    </div>
  )
}

export default CreateArticle