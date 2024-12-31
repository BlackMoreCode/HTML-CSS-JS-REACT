import axios from "axios";
import Commons from "../utils/Commons";

const AxiosInstance = axios.create({
  baseURL: Commons.KH_DOMAIN,
});

// 토큰을 매번 실어줘야하기때문에
// 공통된 루틴으로 집어넣는다 -->
AxiosInstance.interceptors.request.use(
  // 요청 인터셉터 추가 --> 인터셉터를 사용하면 then 또는 catch로 처리되기 전에 요청과 응답을 가로챌수 있다.
  // 언제 쓰는가: API 요청마다 해줘야 하는 반복적인 작업이 있을 때(예: 헤더에 토큰 싣기); 에러 관리를 한 곳에서 하고 싶을 때
  async (config) => {
    const accessToken = Commons.getAccessToken(); // accessToken이 있다면..
    config.headers.Authorization = `Bearer ${accessToken}`; // 요청 헤더에 이 방식대로 달아준다. 이게 표준 방식중 하나.
    return config; // 요청이 업데이트된 헤드와 함께 진행되도록 수정된 configuration을 반환
  },
  (error) => {
    return Promise.reject(error); // 만약 토큰이 없거나 코드상 버그 문제 등이 있을 시 Axios가 에러를 핸들링 할 수 있게 처리.
  }
);

AxiosInstance.interceptors.response.use(
  // 응답 인터셉터 추가
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      const newToken = await Commons.handleUnauthorized();
      if (newToken) {
        // 원래 하고자 했던 요청을 다시 시도
        error.config.headers.Authorization = `Bearer ${Commons.getAccessToken()}`;
        return AxiosInstance.request(error.config);
      }
    }
    return Promise.reject(error);
  }
);

export default AxiosInstance;
