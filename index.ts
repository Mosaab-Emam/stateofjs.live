import repos from "./lib/repos";
import Repo from "./lib/Repo";

(async () => {
  const repo = new Repo(repos.React);

  console.log("hello world", repos);
  console.log("stargazers", await repo.getStargazersCount())
})();

