import { useReducer, useCallback } from "react";
import GithubContext from "./githubContext";
import axios from "axios";

//Reducer Function
const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "GET_SINGLE_USER":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_REPOS":
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

const GithubProvider = (props) => {
  //Initial State
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  //Set Loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  //Get Users
  const searchUsers = async (searchText) => {
    setLoading();
    const { data } =
      await axios.get(`https://api.github.com/search/users?q=${searchText}
        &client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}
        `);
    dispatch({
      type: "GET_USERS",
      payload: data.items,
    });
  };
  //Get Single User
  const getSingleUser = useCallback(async (username) => {
    setLoading();
    const { data } = await axios.get(`https://api.github.com/users/${username}
        ?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
        client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}
        `);
    dispatch({
      type: "GET_SINGLE_USER",
      payload: data,
    });
  }, []);

  //Get  Repos
  const getRepos = useCallback(async (username) => {
    const { data } =
      await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc
    &client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}
    `);
    dispatch({
      type: "GET_REPOS",
      payload: data,
    });
  }, []);

  //Clear Users
  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
      payload: [],
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        getSingleUser,
        getRepos,
        clearUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
