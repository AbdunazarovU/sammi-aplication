import { Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { ArticleDetail, CreateArticle, EditArticle, Login, Main, Navbar, Register } from "./components"
import { useEffect } from "react"
import AuthService from "./service/auth"
import { signUserSuccess } from "./slice/auth"
import { getItem } from "./helpers/persistance-storage"
import ArticleService from "./service/article"
import { getArticlesStart, getArticlesSuccess } from "./slice/article"

const App = () => {
  const dispatch = useDispatch();

  const { loggedIn } = useSelector(state => state.auth)

  const getUser = async () => {
    try {
      const response = await AuthService.getUser()
      dispatch(signUserSuccess(response.user))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const token = getItem("token")
    if (token) {
      getUser()
    }
  }, [loggedIn]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/article/:slug" element={<ArticleDetail />} />
          <Route path="/create-article" element={<CreateArticle />} />
          <Route path="/edit-article/:slug" element={<EditArticle />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
