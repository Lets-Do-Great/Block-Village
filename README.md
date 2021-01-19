# 팀명 ( B205 )

### 팀장 : 황호연

### 팀원 : 구진범, 김다윤, 박승범, 성진옥

## 역할

**PM** : 성진옥

- 서비스의 목적 및 방향을 설계
- 화면 정의서 또는 와이어 프레임

**Tech Leader** : 김다윤

- 팀 내 기술적인 방향을 정하는 역할
- Git master ( MR 관리 / 코드리뷰 )

**QA** : 박승범 

- 기획 산출물을 기반으로 테스트 케이스를 작성 및 수행
- JIRA 관리 ( Spring 운명 및 관리 / Task 관리 )
- 테스트 케이스 및 수행 결과

**Developer** : 구진범, 김다윤, 박승범, 성진옥, 황호연

# 주제

## 프로젝트명 : 모여봐요

- 서비스 설명 : 우리는 무언가를 개선하기위해 -을 제공한다.
- 서비스 설명 : 또한 ~ 가 가능한 웹 플랫폼이다.

⇒ **호연 팀장님이 적는걸로**

## 기능

그냥 적어두는,, 홈피 관련

[https://github.com/2ujin/miniroom-php](https://github.com/2ujin/miniroom-php)

[https://osej.tistory.com/1034](https://osej.tistory.com/1034) (캐릭터 꾸미기 참고....)

- 미니홈피 ( 마이페이지 )

⇒ 미니룸 : 챌린지나 미션으로 주어진 아이템으로 꾸미기

⇒ 일촌, 방문자수, 랜덤방문, 방명록(일촌평)

⇒ 내가 구입한 블록 목록, 내가 가진 아이템 목록, 보유한 마일리지

⇒ 내가 작성한 미션, 답, 작품 목록 및 조회, 수정, 삭제

⇒ 일별 검색 / 제목 검색

⇒ 내 정보 조회, 수정, 탈퇴

- 아이템

⇒ 상의, 하의, 신발, 헤어

⇒ 가구, 벽지, 바닥, 창문, 동물, 식물

- 블록(미션, 작품)

⇒ 보상 : 기본 아이템(랜덤박스) + 마일리지 부여

⇒ 구입한 블록으로만 미션을 풀거나 작품 제작이 가능

⇒ 미션을 만들 떄는 블록 갯수 및 종류 무제한

⇒ 검색필터

⇒ 같은 조건의 블록을 사용한 작품 목록 출력

⇒ 유저 이름으로 해당 유저의 미션이나 작품 검색

⇒ 작성순, 댓글순, 좋아요순, 조회수(작품), 참여순(미션)

⇒ 댓글 작성, 수정, 삭제(내 댓글만 삭제)

- 상점(블록)

⇒ 마일리지로 블록 구매

⇒ 해당 블록을 구입한 횟수만큼만 사용 가능하게

- 튜토리얼(미션)

⇒ blockly/games 그대로 튜토리얼로 가져오기

⇒ 단계별 보상 : 기본 아이템(랜덤박스) + 마일리지 부여

- 게시물 내용(BLockly)

⇒ 캐릭터는 우리가 주어준 거 안에서만 조종? 가능

⇒ 블록은 구입한 것 범위에서 사용 가능

- 챌린지(기간)(유저가 만든것중에 좋은거 챌린지로 올려도 되겠다.)

⇒ 특정기간에는 하나의 챌린지만 진행됨

⇒ 보상으로 챌린지 만의 희귀 아이템 제공

⇒ 유저가 만드는게 아니라 개발자들이 만들어서 진행 

⇒ 구입한 블록으로만 참여 가능

⇒ 성적 기준 : 미션을 성공했는데 블록을 적게 쓴 순서

⇒ 기준 안쪽은 최상 아이템

⇒ 기준 + 1개는 상 아이템

⇒ 기준 + 2개는 중 아이템

⇒ 여태 진행되었던 챌린지들의 목록(제목, 기간)

⇒ 클릭하면 이미 지난 챌린지라 볼 수 없다 alert 띄우기

- 공지사항 / 서비스 소개

## 기술 스택

### Backend

- Spring Data JPA, Spring Boot, MySQL

### Frontend

- React.js
- Redux, Redux-middleware

# Gantt Chart - Sub PJT 2 (01/18 - 01/29)

[주제 선정](https://www.notion.so/382dea1f958740208094d24066e26122)

[기능 목록 및 상세 도출](https://www.notion.so/94355161fb9d492a9b024a9bcec9e969)

[개발 환경 구성](https://www.notion.so/ac51a6c64fe9489a85a54854f19df04e)

[화면 기획](https://www.notion.so/81c66d06ebf444b48071478e6812988f)

[팀 명 및 서비스 명 정하기](https://www.notion.so/8bd2f97e55ac4172a50b2bbd37b0031c)

[[로그인 / 회원가입] 페이지 레이아웃 구성 및 제작](https://www.notion.so/0473cb4d8a654ab9b922c4d416236d3d)

[[API] redux-middleware 요청 기능 구현](https://www.notion.so/API-redux-middleware-48c6efe688d349a9b271bda49bcfccbb)

[[마이페이지] 레이아웃 구성 및 제작](https://www.notion.so/4e520c53dde84ad69cac93e1e8e93ac7)

[[Blockly] save 부분 구현](https://www.notion.so/Blockly-save-da3dcb1fe5de42608aaebd34a0d2f674)

[[Blockly] load 부분 구현](https://www.notion.so/Blockly-load-dfe3464ccb194398af97e624edd8b9ac)

[[Blockly] custom blockly 구현](https://www.notion.so/Blockly-custom-blockly-4bc3857e1e9d4096a2c14fb80178c9c5)

[DB 및 ERD](https://www.notion.so/DB-ERD-105e3dc520f4428aba6e857d4baa2a85)

[RESTful 한 URI 및 Response 데이터](https://www.notion.so/RESTful-URI-Response-58c82180d5b341febf7ed8c8d3d6e3c9)

[백 기능 명세서](https://www.notion.so/93c21815091d4e12a39e6510e8639c8e)

[회원관리 기본 CRUD](https://www.notion.so/CRUD-2b0d7c28eb00449bbf12cf37833b0c63)

[이메일 인증 회원가입](https://www.notion.so/6196e323ce014d92b57f2a6635a85242)

[비밀번호 암호화](https://www.notion.so/99c4bbd194b54d5a82031dc36afc9f9a)

[소셜로그인](https://www.notion.so/6033d9990b2c41ae902399d273d8ec7c)

[JPA 양방향 매핑](https://www.notion.so/JPA-5a0f9011209b4e0db929a221e1031d62)

[Blockly 컨텐츠 명세](https://www.notion.so/Blockly-99230e4a41894ca5941a78cce7e980ef)

[미니홈피 아이템 및 기능 명세](https://www.notion.so/33812edde04a4176b496196c72fc2be6)

## Code Style ( Google Convention )

### Java

- 다윤 작성

### Javascript

- 진옥이 작성

### React

- 진옥이 작성

### Git

- **Commit Message Convention** : [type] subject

    ```
    **< type 종류 >**
    feat : 새로운 기능 추가
    fix : 버그 수정
    docs : 문서 수정
    style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
    refactor : 코드 리팩토링
    test : 테스트 코드, 리팩토링 테스트 코드 추가
    chore : 빌드 업무 수정, 패키지 매니저 수정
    ```

    ```
    **< subject >**
    영어로 작성
    현재 커밋을 한 이유에 대해 설명
    ```

- **Branch**

    : master

    : develop

    : feature/fe/componentName

    : feature/be/**??? ——————  이거 어케할까** 

### JIRA

- Issue Name : [Frontend] / [Backend] 로 구분 후 작성

## 디자인 컨셉

### : 동물의 숲