// AxiosApi.js
import axios from "axios";

// Flask 백엔드의 base URL (필요에 따라 변경)
const API_BASE_URL = "http://localhost:5000";

// genderChart API 호출 함수 정의
const genderChart = async (region) => {
  try {
    // Flask의 엔드포인트: /api/gender/<region>
    const response = await axios.get(`${API_BASE_URL}/api/gender/${region}`);
    return response;
  } catch (error) {
    console.error("성별 데이터 가져오기 실패: ", error);
    throw error;
  }
};

const AxiosApi = {
  genderChart,
};

export default AxiosApi;
