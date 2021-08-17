import { useContext, useState } from "react";
import AlertContext from "../../store/alertContext";
import GithubContext from "../../store/githubContext";

const Search = (props) => {
  const [textSearch, setTextSearch] = useState("");

  const {searchUsers, clearUsers,users } = useContext(GithubContext);
  const {setAlert} = useContext(AlertContext);

  //Form Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();
    if(textSearch.trim() === ""){
      setAlert("Please Enter Something", "primary");
        return;
    }
    searchUsers(textSearch);
    setTextSearch("");
  };
  //Change Handler
  const inputChangeHandler = (e) => {
    setTextSearch(e.target.value);
  };
  return (
    <div className="my-2 container">
      <form onSubmit={submitHandler}>
        <input
          type="search"
          className="form-control mb-2"
          placeholder="Search Users..."
          value={textSearch}
          onChange={inputChangeHandler}
        />
        <input
          type="submit"
          className="form-control bg-dark text-white"
          value="Search"
        />
      </form>
      {users.length > 0 && (
        <button onClick={clearUsers} className="btn btn-info my-3 w-100">
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
