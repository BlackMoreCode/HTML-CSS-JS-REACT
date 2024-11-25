import { useRef, useEffect, useState } from "react";

const MaintainInnerValue = () => {
  const myButtonRef = useRef(null); //특정한 DOM의 위치를 가르키기 위해 사용

  useEffect(() => {
    // useRef 훅을 받았기 때문에 current 필드/프로퍼티가 생기는 것이며
    // current는 값을 유지하기 위한 방법..? 없을시 리렌더링시 사라진다?
    if (myButtonRef.current) {
      myButtonRef.current.innerText = "클릭하세요";
    }
  }, []);

  // 컴포넌트 내부 변수 값 유지
  const count = useRef(0);
  // let을 써서 사용시..
  // let count = 0;
  // const [state, setState] = useState(false);

  const handleClick = () => {
    count.current += 1;
    alert(`클릭 횟수: ${count.current}`);
    //변수 값 다 초기화된다.
    // count += 1;
    // setState(!state);
    // alert(`클릭 횟수: ${count}`);
  };

  return (
    <>
      <button ref={myButtonRef} onClick={handleClick}>
        초기 상태
      </button>
    </>
  );
};
export default MaintainInnerValue;
