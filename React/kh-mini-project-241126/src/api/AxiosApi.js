import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const AxiosApi = {
  //로그인
  login: async (email, pw) => {
    console.log("이메일 : ", email);
    console.log("비밀번호 : ", pw);
    const login = {
      email: email,
      pwd: pw,
    };
    return await axios.post(KH_DOMAIN + "/auth/login", login);
  },
  //회원가입 여부 확인
  regCheck: async (email) => {
    return await axios.get(KH_DOMAIN + `/auth/exists/${email}`);
  },
  //회원가입
  signup: async (email, pw, name) => {
    console.log("이메일 : ", email);
    console.log("비밀번호 : ", pw);
    console.log("이름 : ", name);
    const member = {
      email: email,
      pwd: pw,
      name: name,
      imgPath: "",
    };
    return await axios.post(KH_DOMAIN + `/auth/signup`, member);
  },

  //전체 회원 조회
  memberList: async () => {
    //바디 영역 만들 필요가 없어서 바로 return
    return await axios.get(KH_DOMAIN + "/member/list");
  },

  //개별 회원 조회
  memberInfo: async (email) => {
    return await axios.get(KH_DOMAIN + `/member/${email}`);
  },
};

export default AxiosApi;
