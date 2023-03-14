import axios from "axios";

type Data = {
  id: number;
  stargazers_count: number;
}

export default class Repo {
  path: string;
  data: Data | null = null;

  constructor(path: string) {
    this.path = path;
  }

  async init(): Promise<boolean> {
    if (this.data) return true;

    const { data } = await axios.get(`https://api.github.com/repos/${this.path}`);
    // const data = await response.json() as Data;
    this.data = data;
    return true;
  }

  async getStargazersCount(): Promise<number> {
    await this.init();

    return this.data!.stargazers_count;
  }
}
