import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import ArticleService from "../service/article";

const ArticleCard = ({item, getArticles}) => {
  const navigate = useNavigate();

  const { loggedIn, user } = useSelector((state) => state.auth);

  const deleteArticle = async slug => {
    try {
      await ArticleService.deleteArticle(slug)
      getArticles()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="col">
            <div className="card shadow-sm h-100">
              <svg
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
              </svg>
              <div className="card-body">
                <p className="card-text fw-bold">{item.title}</p>
                <p className="card-text">{item.description}</p>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button
                    onClick={() => navigate(`/article/${item.slug}`)}
                    type="button"
                    className="btn btn-sm btn-outline-success"
                  >
                    View
                  </button>
                  {loggedIn && user.username === item.author.username && (
                    <>
                      <button
                        onClick={() => navigate(`/edit-article/${item.slug}`)}
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteArticle(item.slug)}
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
                <small className="text-body-secondary text-capitalize">
                  {item?.author?.username}
                </small>
              </div>
            </div>
          </div>
  )
}

export default ArticleCard