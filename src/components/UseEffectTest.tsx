import React, {useEffect, useState} from 'react';

const UseEffectTest: React.FC = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // 컴포넌트가 렌더링될 때와 업데이트될 때마다 실행
    console.log('사이트 이펙트 발생');
    //count 값이 변경될 때 마다 실행
    console.log(`count 값이 변경됨: ${count}`);
    // 컴포넌트가 언 마운트 될때 마다 실행
    return () => {
      console.log('컴포넌트가 삭제되었습니다.');
    };
  }, [count]);

  const handleButtonClickEvent = () => {
    setCount(prevCount => prevCount + 1);
  };
  return (
    <>
      <p>Count : {count}</p>
      <button onClick={handleButtonClickEvent}>증가버튼</button>
    </>
  );
};

export default UseEffectTest;
