# useState

### useState의 특성은?

`class`의 `this.state`와 비슷합니다. 일반 변수는 함수가 끝날때 사라지지만 `state`변수는 사라지지 않습니다.

```js
import React, {useState} from 'react';

//useState의 사용
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
```

[useState 실제 작성 코드](https://github.com/Suhwan-Front/ReactHookStudy/tree/master/src/components/UseStateTest.tsx)

### useState의 인자로 무엇을 넘겨줘야 할까?

`useState()`로 넘겨줘야 하는 값은 `state`의 초기값입니다. 함수 컴포넌트의 `state`는 객체 형태를 가져야합니다. `useState()`는 객체일 필요가 없습니다. 숫자형 문자형등 타입을 가질 수 있습니다.

```js
import React, {useState} from 'react';

interface Person {
  name: string;
  age: number;
}

const ExampleComponent: React.FC = () => {
  const [person, setPerson] = useState < Person > {name: '', age: 0}; //객체를 내부에 숫자 문자 타입을 다르게 넣어줬다.

  const updateName = (newName: string) => {
    setPerson({...person, name: newName});
  };

  const updateAge = (newAge: number) => {
    setPerson({...person, age: newAge});
  };

  return (
    <div>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <input
        type="text"
        value={person.name}
        onChange={e => updateName(e.target.value)}
      />
      <input
        type="number"
        value={person.age}
        onChange={e => updateAge(parseInt(e.target.value))}
      />
    </div>
  );
};
```

> **왜 `createState`가 아니라 `useState`로 사용할까?**  
> 컴포넌트가 렌더링될때 한번만 state가 생성되기 때문에 create라는 말은 적합하지 않습니다. 기존에 존재하는 state를 반복해서 사용하기 때문에 use라는 말을 사용합니다.

### state의 형태가 가지는 의미는 뭘까?

`useState`를 사용하면 대괄호를 이용하여 선언합니다.

```js
const [value, setValue] = useState(0);
```

해당 구조는 **"배열 구조 분해"** 라는 방법을 사용했습니다. 다음은 코드는 같은 방식으로 작동합니다.

```js
var valueStateVariable = useState(0);
var value = valueStateVariable[0]; //첫번째 인자
var setValue = valueStateVariable[1]; // 두번째 인자
```

배열의 [0]이나 [1]에 접근하지 않고도 값을 분배할 수 있습니다.

> **의문점**  
> `this`를 React에 알리지 않았는데 어떻게 React가 특정 컴포넌트가 `useState`를 쓰는지 알 수 있는거지?
