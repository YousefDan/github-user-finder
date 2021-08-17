import { Fragment, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaTimesCircle } from "react-icons/fa";
import Repos from "../repos/Repos";
import GithubContext from "../../store/githubContext";

const User = () => {
  const {user,repos,getRepos,getSingleUser } = useContext(GithubContext);
  const params = useParams();
  
  useEffect(() => {
    getSingleUser(params.login);
    getRepos(params.login);
  }, [getSingleUser, params.login,getRepos]);

  const {
    name,
    html_url,
    avatar_url,
    bio,
    followers,
    following,
    hireable,
    public_repos,
    public_gists,
    blog,
    location,
    company,
    login,
  } = user;

  return (
    <div className="container mt-4">
      <section>
        <Link to="/" className="btn btn-primary me-4">
          Back To Search
        </Link>
        <strong>Hireable: </strong>{" "}
        {hireable ? (
          <AiFillCheckCircle className="text-success" />
        ) : (
          <FaTimesCircle className="text-danger" />
        )}
      </section>
      <section className="mt-4  d-flex justify-content-around align-items-center">
        <div className="me-5">
          <img
            src={avatar_url}
            className="rounded-circle mb-3"
            alt="github-user"
            style={{ width: "170px" }}
          />
          <h2> {name} </h2>
          <p>Location: {location}</p>
        </div>
        <div>
          <h2>Bio</h2>
          {bio && <p>{bio}</p>}
          <a href={html_url} className="btn btn-dark my-3">
            Visit Github Profile
          </a>
          <ul className="p-0">
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </section>
      <section className="text-center mt-2 mb-5">
        <div className="badge bg-danger me-3">Followers: {followers}</div>
        <div className="badge bg-success me-3">Following: {following}</div>
        <div className="badge bg-warning me-3">
          Public Repos: {public_repos}
        </div>
        <div className="badge bg-primary me-3">
          Public Gists: {public_gists}
        </div>
      </section>
      <Repos repos={repos} />
    </div>
  );
};

export default User;
