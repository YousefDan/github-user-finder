import { useContext } from "react";
import GithubContext from "../../store/githubContext";
import UserItem from "./UserItem";

const Users = () => {
  const { users, loading} = useContext(GithubContext);
  if (loading) {
    return <h3 className="text-center mt-3 ">Loading.....</h3>;
  }

  return (
    <div className="container d-flex flex-wrap justify-content-around align-items-center mt-5">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
