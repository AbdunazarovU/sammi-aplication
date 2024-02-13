import { Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Login, Main, Navbar, Register } from "./components"
import { useEffect } from "react"
import AuthService from "./service/auth"
import { signUserSuccess } from "./slice/auth"
import { getItem } from "./helpers/persistance-storage"
import ArticleService from "./service/article"
import { getArticlesStart, getArticlesSuccess } from "./slice/article"

const App = () => {
  const dispatch = useDispatch();

  const { loggedIn } = useSelector(state => state.auth)

  const getUser = async() => {
    try {
      const response = await AuthService.getUser()
      dispatch(signUserSuccess(response.user))
    } catch (error) {
      console.log(error)
    }
  }

  const getArticles = async() => {
    dispatch(getArticlesStart())
    try {
      const response = await ArticleService.getArticles()
      dispatch(getArticlesSuccess(response.articles))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const token = getItem("token")
    if (token) {
      getUser()
    }
    getArticles()
  }, [loggedIn]);

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  )
}

export default App
