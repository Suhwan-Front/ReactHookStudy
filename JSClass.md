# JS Class 문법

객체 지향 프로그래밍을 위해서는 `Class`가 필수적입니다. 주로 아래와 같은 방법으로 JS에서 Class를 만들 수 있습니다.

```js
class ClassName {
  constructor() {
    //생성자 매서드
  }
  method1() {
    // 매서드 1
  }
  method2() {
    // 매서드 2
  }
}
```

Class에서 모르면 안될 몇 가지만 짚고 넘어가겠습니다.

#### Constructor?

`class`로부터 객체를 생성할 때 자동으로 호출되는 특별한 메서드입니다. `constructor` 메서드를 사용하여 객체의 초기화를 담당하며, 인스턴스를 생성하고 속성을 초기화할때 사용합니다.

- `constructor`은 클래스 내부에 한 번만 정의할 수 있습니다.
- `constructor`의 인수는 필요에 따라 정의할 수 있습니다. 객체를 생성할 때 정달되는 값들을 받을 수 있고 이 인수들은 객체 초기화 로직에 사용될 수 있습니다.
- `super` 키워드를 사용하여 부모 클래스의 생성자를 호출할 수 있습니다. 이를 통해 상속 관계에서 부모 클래스의 초기화 로직을 실행할 수 있습니다.

ex)

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person('Alice', 25);
console.log(person1.name); // Alice
console.log(person1.age); // 25
```

#### Class 내부에서 this의 의미

`this`는 현재 인스턴스를 가리키는 특별한 키워드입니다. `this`를 사용하여 현재 객체의 속성에 접근하거나 메서드를 호출할 수 있습니다.

설명으로는 조금 어려우니 코드로 바로 표현해보겠습니다.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`Hello my name is ${this.name} ans I'm ${this.age} years old`);
  }
}

const person1 = new Person('Alice', 25);
person1.sayHello(); // Hello my name is Alice and I'm 25 years old
```

위 예시에서 `sayHello` 메서드 내부에서 `this.name`과 `this.age`를 사용하여 현재 객체의 `name`과 `age` 속성에 접근합니다. `this`는 `person1` 객체를 가리키며, 해당 객체의 속성 값을 가져와서 문자열에 출력합니다.

#### JS에서 공개 필드(Public field)와 개인 필드(Private field)

**공개 필드(Public field)**  
공개 필드는 클래스 내에서 `this` 키워드와 함께 선언되며, 해당 클래스의 모든 인스턴스에서 직접 접근할 수 있는 속성입니다. 공개 필드는 클래스 외부에서도 접근할 수 있습니다.

```js
class ClassName {
  publicField = value;
}
```

위의 코드에서 `publicField`는 클래스 내에서 공개 필드로 선언되었습니다. 이 필드에는 `value`라는 초기값을 할당할 수 있습니다. 클래스의 인스턴스에서 직접 필드에 접근하여 값을 읽거나 수정할 수 있습니다.

**개인 필드(Private field)**  
개인 필드는 클래스 내에서 **#** 기호를 사용하여 선언합니다. 이를 통해 클래스 외부에서는 직접 접근할 수 없는 비공개 속성을 만들 수 있습니다.

```js
class ClassName {
  #privateField = value;
}
```

위 코드에서 `#privateField`는 클래스 내에서 개인 필드로 선언되었습니다. 이 필드는 클래스 외부에서 직접 접근할 수 없으며, 클래스 내부에서만 사용할 수 있습니다. 개인 필드는 클래스의 메서드에서 접근하거나 수정할 수 있습니다.

```js
class ClassName {
  #privateField = value;

  #privateMethod() {
    //개인 메서드의 로직
  }

  publicMethod() {
    // 개인 필드와 개인 메서드에 접근 가능
    this.#privateField = newValue;
    this.#privateMethod();
  }
}
```

## 위 두 **개인 필드와 개인 메서드는 클래스 외부에서 접근할 수 없습니다.**

### React에서의 Class

우리가 쓰고 있는 `React`역시 `Class`를 많이 사용합니다. 예시는 아래와 같습니다.

```js
import React from `react`;

class MyComponent extends React.Component {
    constructor(props) {
        super(props) {
            super(props);
            this.state = {
                //상태 초기화
            };
        }

        componentDidMount() {
            //컴포넌트가 마운트된 후 실행되는 매서드
        }

        componentDidUpdate() {
            //컴포넌트가 업데이트된 후 실행되는 매서드
        }

        componentWillUnmount() {
            //컴포넌트가 언마운트되기 전 실행되는 매서드
        }

        render() {
            //컴포넌트의 렌더링 결과 반환
        }
    }
}
```

리액트에서 클래스를 사용하는 이유는 아래와 같습니다.

1. **상태관리** : 클래스 컴포넌트는 `this.state`를 사용하여 컴포넌트의 상태를 관리할 수 있습니다. 상태가 변경되면 React는 자동으로 컴포넌트를 리렌더링합니다.

2. **생명주기 메서드** : 클래스 컴포넌트는 컴포넌트의 생명주기에 따라 실행되는 메서드를 정의할 수 있습니다. 예를 들어, 컴포넌트가 마운트되었을 때, 업데이트되었을 때, 언마운트되기 전에 실행되는 메서드를 정의할 수 있습니다.

3. **상속** : 클래스 컴포넌트는 `React.Component` 클래스를 상속받아 사용하므로, React의 기능을 상속받아 사용할 수 있습니다. 이는 코드 재사용과 구성 요소 간의 계측 구조를 구성하는데 도움이 됩니다.

---

### 함수형 컴포넌트와 클래스 컴포넌트 차이점

그렇다면 함수형 컴포넌트와 클래스 컴포넌트의 차이점은 무엇일까요?

1. **StateFul** : `useState`는 어디까지나 `custom Hook`입니다. 함수형 컴포넌트는 **StateLess**한 형태라는 것을 잊으면 안됩니다. 그에 반해 클래스 컴포넌트는 `this.state`를 통해 상태를 관리합니다.

2. **생명주기 메서드** : 클래스 컴포넌트는 생명주기 메서드(`componentDidMount`,`componentDidUpdate`,`componentWillUnmount`, 등)를 사용하여 컴포넌트의 행동을 제어할 수 있습니다. 함수형 컴포넌트는 대신 `useEffect` 훅을 사용하여 비슷한 기능을 수행할 수 있습니다. 그러나 어디까지나 본래 존재하지 않는 함수형 컴포넌트를 위해 만들어진 `custom Hook`입니다.

3. **성능** : 최근의 `React`버전(custom Hook이 생긴 16.4버전 이후)에서는 함수형 컴포넌트와 훅을 사용하는 것이 성능 면에서는 더 좋을 수 있습니다. 함수형 컴포넌트는 불필요한 렌더링을 방지하고 메모리제이션 등의 최적화 기능을 수행할 수 있습니다.
