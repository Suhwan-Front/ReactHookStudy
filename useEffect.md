# useEffect

### useEffect 기본형태

`useEffect`는 컴포넌트가 렌더링 혹은 업데이트된 후에 특정 작업을 수행할 수 있게 도와줍니다.

> `Effect`란?  
> **사이드 이펙트**를 지칭하는 말로 컴포넌트 외부에서 발생하는 작업을 말합니다. 주로 비동기 작업이나, 데이터 가져오기(API), 구독설정, 타이머 설정, 이벤트 처리 같은 것들이 대표적인 예시입니다.

```js
useEffect(() => {
  //setup code
  return () => {
    //cleanup code
  };
}, [a, b]);
```

[useEffect 실제 작성 코드](https://github.com/Suhwan-Front/ReactHookStudy/tree/master/src/components/UseEffectTest.tsx)

기본 형태를 보면 3가지를 확인할 수 있습니다. `setup code`와 `cleanup code` 그리고 배열에 존재하는 인자입니다.

`useEffect`를 사용할 때 최초로 컴포넌트가 `DOM`에 추가될 때 `React`는 `setup code`부분을 실행 시킬 것입니다.

> 컴포넌트가 재 렌더링이 된 후에는 `cleanup code`를 바뀌기 전 `a`의 값으로 실행해 오류를 확인한 후 새로운 `a`값으로 `setup code`를 실행해줍니다.

---

### useEffect의 실행 순서

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

해당 인자는 하나만 들어가는 것이 아닌 [a, b]와 같이 여러개가 들어갈 수 있습니다.

### useEffect의 사용할 타이밍?

**컴포넌트 상태 값이 바뀌었을 때 어떤 동작을 해야하거나 외부 Api를 fetch할 때** 라고 말할 수 있습니다.

`Effect`라는 것 자체가 내 컴포넌트가 외부 시스템과 연결하기 위해 사용하는 것입니다.(채팅을 위해 API를 쓴다던지?)

### useEffect 주의 사항

`useEffect`를 사용할 때 항상 매개변수가 필요한 것은 아닙니다.

```js
useEffect(() => {
  console.log('렌더링될 때 마다 실행된다.');
}); //매개변수 부분이 비어있다.
```

위 코드와 같이 매개변수가 비어있을 경우 **리렌더링을 기준으로 실행됩니다.**

> (해당 부분은 공식문서에서 제공하는 주의 사항입니다.)
>
> - 만약 외부 시스템과 연결을 시도하는 것이 아니라면 `useEffect`가 필요하지 않을것이다
> - 만약 `Strict`모드가 켜져있다면 `setup` -> `cleanup` -> `setup`과 같이 `useEffect`부분이 두번 실행될 것이다
> - `useEffect`는 오직 **클라이언트** 가 실행될때 작동한다. 만약 **서버** 가 렌더링되어도 실행되지 않을 것이다.
