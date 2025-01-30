import axios from "axios";

export default async function githubApi() {
  try {
    const RES = await axios.get("https://api.github.com/users/yKaayo/repos"); 
    console.log(RES.data);
    return RES.data;
  } catch (err) {
    console.error(`Ocorreu um problema ao achar os projetos: ${err}`);
  }
};