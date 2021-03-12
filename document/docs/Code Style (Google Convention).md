# Code Style (Google Convention)

[TOC]

## 🤙 Java

- Naming

  - 이름만으로 기능이나 특성 유추할 수 있게 명명하기
  - Class의 첫글자는 대문자 + camel case
  - Method나 Variable의 첫글자는 소문자 + camel case
  - 임시변수들의 이름은 integer일 경우에는 i,j,k,m,n을 사용하고 character일 경우 c,d,e를 사용한다.
  - 상수들은 모두 대문자로 쓰고 각각의 단어는 언더바("_")로 분리한다.
  - 여러개를 의미하는 경우 복수형태가 아닌 "객체이름List" ex) userList

- Comment

  - 기본적으로 한글로 작성
  - 블록주석 /**/은 가장 위에 작성
  - 간단한 설명은 옆에 // 주석 작성

- Statement

  - 각각의 줄에는 최대한 하나의 문(statement)만 사용하도록 한다.

  - 공백

    : 괄호와 함께 나타나는 키워드(while, for 등)는 공백으로 나눈다.

    : 메서드 이름과 메서드의 여는 괄호 사이에 공백을 사용하지 않는다.

    ```jsx
    // 키워드
    while (true) {
    
    }
    // 메서드
    void method(){
    
    }
    ```

    : for문에서 사용하는 세개의 식들은 공백으로 구분해서 나누어야한다.

    ```jsx
    for (expr1; expr2; expr3)
    ```

  - 복합문

    : 한줄 일 때, Block 처리하기

    ex) if / else if / else 문은 항상 중괄호 사용 (Block 처리)

    ```jsx
    if (condition) {
       statements; 
    } else if (condition) {
       statements; 
    } else { 
       statements; 
    }
    ```

## 🤙 Javascript

- Naming

  - 소스파일 이름 : 알파벳 소문자, 하이픈(-), 밑줄(_)
  - 소스파일 확장자 :  .js
  - 이름을 통해 쓰임새를 알 수 있도록 함
  - 변수 이름의 맨 앞이나 맨 뒤쪽에 밑줄(_)을 사용하지 않음
  - 약어는 모두 대문자로 표기
  - export  되는 파일 내의 모든 상수는 모두 대문자로 표기
  - 이름에 복수형 표기하지 않음
  - 줄임말을 사용하지 않음
  - 변수 이름 : lowerCamelCase, 알파벳으로 시작

- 형식

  - 중괄호 : 모든 제어문에 사용 필수.

    : 여는 중괄호 전에는 줄 바꾸지 않고, 닫는 중괄호 전에 줄을 바꿈.

    : 빈 블록에서는 한줄 띄우기.

  - 점(.) : 메소드 체인 작성시 점 앞에서 줄 변경.

  - 구문 : 모든 구문 끝에는 세미콜론을 붙임.

  - 한 줄이 80자를 넘기지 않도록 함.

  - 줄 : 줄 공백이 2줄 이상 연속 사용 하지 않음.

- 공백

  - 띄우는 경우

    : if, for, catch와 같은 키워드와 소괄호 사이

    : else, catch와 같은 키워드와 닫는 중괄호 사이

    : 여는 중괄호 ( { ) 전

    : 이항 연산자와 삼항 연산자의 양 쪽

    : 반점( , ), 세미콜론( ; ) 다음

    : 오브젝트 리터럴 내에서 콜론( : ) 다음

    : // 양 쪽, /* 다음, */ 전

    : 중괄호 사이

  - 붙이는 경우

    : 소괄호 사이, 대괄호 사이

- 변수

  - 한 줄에 하나의 변수 선언
  - 지역 변수는 사용되는 지점과 가장 가까운 곳에서 선언
  - 변수 설명 주석은 변수 선언 이전이나 변수 이름 이전에 작성
  - 변수 선언 시 const 사용
  - 변수들의 선언 순서 : const → let

- 배열

  - 각 원소를 직접 선언할 때는 각 원소 끝에 반점(,)을 포함
  - 한 배열로부터 복수개의 값 할당 받을 때는 구조 분해 할당 사용

- 객체

  - 키는 큰 따옴표(") 씌우기

  ```jsx
  var my_object = {
    "key": "value",
    "key2": "value2",
  };
  ```

  - 메소드 단축 구문 사용

  ```jsx
  const atom = {
    value: 1,
  
    addValue(value) {
      return atom.value + value;
    },
  };
  ```

- 함수

  - 함수식 보다 함수 선언 사용

    ```jsx
    function foo() { // 함수 전체가 hoist됨
    }
    ```

  - 파라미터 기본값은 가장 뒤쪽에 둠

    ```jsx
    function handleThings(name, opts = {}) {
      // ...
    }
    ```

  - 함수시 화살표 함수 사용

    ```jsx
    [1, 2, 3].map((x) => {
      const y = x + 1;
      return x * y;
    });
    ```

## 🤙 React

- React Hook 사용
- React component는 .js 확장자를 사용
- Naming
  - 이거 밑에 한줄 더 어떻게 띄나여
  - component : 파일명은 소문자, _ 조합
  - component funtion : 마디마다 맨앞 대문자 ex) SignUp
  - url path : 소문자, 두 마디 이상일시 뒤에는 대문자 ex) /signUp
  - state : url path와 동일
- CSS
  - project에서 공통으로 쓰이는 css문법은 common.css에 정의하고 갖다쓰기
  - Module CSS 사용
- component 선정 방식 : 기존에 정해진 룰없이 개발자 마음대로
- axios : project내에 service 폴더 안에 정의하기 (component 내부 x)

## 🤙 Git

- **Commit Message Convention** : [type] subject (#JIRA issue number)

  ```
  **< type 종류 >**
  feat : 새로운 기능 추가
  fix : 버그 수정
  docs : 문서 수정
  style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
  refactor : 코드 리팩토링
  test : 테스트 코드, 리팩토링 테스트 코드 추가
  chore : 빌드 업무 수정, 패키지 매니저 수정
  upload : 초기 프로젝트 및 이전 프로젝트 파일 업로드
  merge : origin에 있는 파일 가져온거
  ```

  ```
  **< subject >**
  영어로 작성
  현재 커밋을 한 이유에 대해 설명
  ```

  ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f9611637-174c-4588-830b-bffa7781d208/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f9611637-174c-4588-830b-bffa7781d208/Untitled.png)

- **Branch**

  : master

  : develop

  : feature/fe_componentName

  : feature/be_기능이름

## 🤙 JIRA

- Issue Name : [Frontend] / [Backend] 로 구분 후 작성