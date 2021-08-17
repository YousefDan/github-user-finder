import { Link } from "react-router-dom";

const UserItem = ({ user: { avatar_url, login } }) => {
  return (
    <div
      style={{ width: "20%" }}
      className="text-center border rounded p-3 m-3"
    >
      <img
        style={{ width: "100px" }}
        src={avatar_url}
        alt="github-user"
        className="rounded-circle mb-2"
      />
      <h3> {login} </h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark mt-2">
          More
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
