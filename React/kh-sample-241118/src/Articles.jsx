import Article from "./Article";

const data = [
  {
    title: "정치",
    description:
      "국가보훈부는 보훈심사위원회 위원장에 '연평도 포격전의 영웅' 고(故) 서정우 하사의 어머니인 김오복 여사를 임명했다고 17일 밝혔다. 김 여사는 광주 대성여고 교장을 지냈으며, 지난 4·10 총선 당시 비례대표 1번 물망에 오르기도 했다. 김 신임 위원장은 보훈가족이 보훈심사위원장에 임명된 첫 사례다. 임기는 3년이다.",
    date: "2024-11-18",
  },
  {
    title: "경제",
    description:
      "하나증권은 18일 CJ에 대해 상장 자회사들의 주가 하락에 따른 지분가치 감소가 불가피하다며 목표주가를 기존 16만원에서 14만원으로 하향 조정했다. 다만 최근 주가 하락은 매수 기회로 판단한다며 투자의견은 ‘매수’를 유지했다.",
    date: "2024-11-17",
  },
  {
    title: "사회",
    description:
      "서울중앙지법은 오늘 오전 10시부터 1조 6천억 원대 정산 대금을 가로채고 회삿돈 8백억 원가량을 횡령한 혐의 등으로 구 대표와 류광진 대표 류화현 대표를 차례로 불러 구속영장 실질심사를 진행하고 있습니다.",
    date: "2024-11-18",
  },
];

const Articles = () => {
  return (
    <>
      <h1>오늘의 뉴스</h1>
      {data && data.map((e) => <Article data={e} />)}
    </>
  );
};

export default Articles;
