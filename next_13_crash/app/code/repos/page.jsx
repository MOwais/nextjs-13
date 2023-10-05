import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/bradtraversy/repos"
  );
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const repos = await response.json();
  return repos;
}

const ReposPage = async () => {
  const repos = await fetchRepos();

  return (
    <div className="repos-container">
      {<h1>Repositories</h1>}
      <ul className="repo-list">
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <d className="repo-details">
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </d>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
