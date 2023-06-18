import React, {useState} from 'react';

//useState의 사용법
const UseStateTest: React.FC = () => {
  //count라는 새 상태 변수를 선언한다.
  const [count, setCount] = useState(0);
  return (
    <>
      <p>You clicked this button {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click this</button>
    </>
  );
};

export default UseStateTest;
