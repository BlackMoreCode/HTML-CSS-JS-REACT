// GenderChart.js
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import AxiosApi from "./AxiosApi";
// 분리된 스타일 파일에서 styled-components 가져오기
import {
  Container,
  InputContainer,
  Input,
  Button,
} from "./Styles/GenderChartStyles";

// Chart.js에서 필요한 컴포넌트 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GenderChart = () => {
  // 차트 데이터 상태 정의
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  // 지역 상태 정의 (기본값: 신도림)
  const [region, setRegion] = useState("신도림");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // AxiosApi를 통해 지역별 성별 인구 데이터를 가져옴
        const rsp = await AxiosApi.genderChart(region);
        if (rsp.status === 200) {
          setChartData({
            // 라벨은 데이터 길이에 맞게 생성
            labels: Array.from(
              { length: rsp.data.female.length },
              (_, i) => i + 1
            ),
            datasets: [
              {
                label: "여성",
                data: rsp.data.female,
                backgroundColor: "rgba(255, 99, 132, 0.8)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
              },
              {
                label: "남성",
                data: rsp.data.male,
                backgroundColor: "rgba(54, 162, 235, 0.8)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
              },
            ],
          });
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  // 차트 옵션 설정
  const options = {
    responsive: true,
    scales: {
      x: {
        type: "category",
      },
      y: {
        type: "linear",
      },
    },
  };

  // 인풋 값 변경 핸들러 (지역명 업데이트)
  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  // 조회 버튼 클릭 핸들러: 입력된 지역의 데이터를 다시 불러옴
  const handleRegionClick = async () => {
    try {
      const rsp = await AxiosApi.genderChart(region);
      if (rsp.status === 200) {
        setChartData({
          labels: Array.from(
            { length: rsp.data.female.length },
            (_, i) => i + 1
          ),
          datasets: [
            {
              label: "여성",
              data: rsp.data.female,
              backgroundColor: "rgba(255, 99, 132, 0.6)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
            {
              label: "남성",
              data: rsp.data.male,
              backgroundColor: "rgba(54, 162, 235, 0.6)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container>
      <InputContainer>
        <Input
          type="text"
          value={region}
          onChange={handleRegionChange}
          placeholder="지역명 입력"
        />
        <Button onClick={handleRegionClick}>조회</Button>
      </InputContainer>
      <h2>{region} 지역의 남여 성별 인구 분포(2019년 기준)</h2>
      <Bar data={chartData} options={options} />
    </Container>
  );
};

export default GenderChart;
