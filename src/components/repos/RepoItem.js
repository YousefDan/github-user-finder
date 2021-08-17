const RepoItem = ({ repo }) => {
  return (
    <h3 className="border my-2 p-2 rounded text-danger">
      <a href={repo.html_url}> {repo.name} </a>
    </h3>
  );
};

export default RepoItem;
