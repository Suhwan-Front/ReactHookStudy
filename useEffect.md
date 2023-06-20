# useEffect

#### useEffect 기본형태

```js
useEffect(() => {
  //setup code
  return () => {
    //cleanup code
  };
}, [a, b]);
```

기본 형태를 보면 3가지를 확인할 수 있다. `setup code`와 `cleanup code` 그리고 배열에 존재하는 인자이다.

`useEffect`를 사용할 때 최초로 컴포넌트가 `DOM`에 추가될 때 `React`는 `setup code`부분을 실행 시킬 것이다.

> 컴포넌트가 재 렌더링이 된 후에는 `cleanup code`를 바뀌기 전 `a`의 값으로 실행해 오류를 확인한 후 새로운 `a`값으로 `setup code`를 실행해준다.

```js
}, [a, b]); //a = 2 에서 a = 3으로 바뀌었을때
```

```js
  return() = > {
    //cleanup code 부분을 이전 값인 a = 2로 한번 실행시킨다.
  };
```

```js
useEffect(() => {
  //setup code 부분을 새롭게 갱신된 a = 3으로 실행시킨다.
```

해당 인자는 하나만 들어가는 것이 아닌 [a, b]와 같이 여러개가 들어갈 수 있다.

> **주의 사항** (해당 부분은 공식문서에서 제공하는 주의 사항이다)
>
> - 만약 외부 시스템과 연결을 시도하는 것이 아니라면 `useEffect`가 필요하지 않을것이다
> - 만약 `Strict`모드가 켜져있다면 `setup` -> `cleanup` -> `setup`과 같이 `useEffect`부분이 두번 실행될 것이다
> - `useEffect`는 오직 **클라이언트** 가 실행될때 작동한다. 만약 **서버** 가 렌더링되어도 실행되지 않을 것이다.
