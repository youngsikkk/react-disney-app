import axios from "axios";

// 인스턴스화 하는 이유: 중복된 부분을 계속 입력하지 않아도 되기 때문

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: "f4dd045ae99f93abd7f82f7e40f37ade",
    language: "ko-KR"
  }
})

export default instance