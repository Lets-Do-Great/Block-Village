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

```mermaid
gantt
    dateFormat  MM-DD
    title       리코타 보드 진행상황
    %% excludes    weekends
    %% (`excludes` accepts specific dates in YYYY-MM-DD format, days of the week ("sunday") or "weekends", but not the word "weekdays".)

    section 프로젝트 준비
    주제 선정				  :done, 01-18, 1d
    기능 목록 및 상세 도출			:done, 01-18, 1d
    개발 환경 구성             			:done, 01-18, 1d
    화면 기획				  :active, 01-18, 2d
    팀 명 및 서비스 명 정하기			  :active, 01-18, 5d
	
	section Frontend
    [로그인 / 회원가입] 페이지 레이아웃 구성 및 제작	:done, 01-18, 1d
    [API] redux-middleware 요청 기능 구현	      	 :crit, 01-18, 3d
    [마이페이지] 레이아웃 구성 및 제작 	 	 :active, 01-18, 5d
    [미션/작품] 레이아웃 구성 및 제작		 	 :todo, 01-23, 3d
    [공지사항] 레이아웃 구성 및 제작   	  		:todo, 01-25, 2d
    [챌린지] 레이아웃 구성 및 제작   	  		:todo, 01-26, 3d
    [디자인] 일러스트 제작	   	  		:todo, 01-28, 3d
    
    section Blockly
    [Blockly]save				  :todo,  01-18, 2d
    [Blockly]load 부분 구현			:todo, 01-20 , 3d
    [Blockly]custom blockly 구현				  :todo, 01-22, 3d
    [Blockly Store]필요 block 구현             :todo, 01-25, 1d
	[Blockly Stire]전체 구현             :crit, 01-26, 4d

    section BackEnd
    [DB]DB 및 ERD				  :crit,  01-18, 12d
    BackEnd 기능 명세서			:crit, 01-18 , 12d
    [회원관리]CRUD				  :todo, 01-18, 4d
    [회원관리]이메일 인증             :todo, 01-19, 2d
	[회원관리]비밀번호 암호화            :todo, 01-19, 2d
    [회원관리]소셜 로그인           :todo, 01-19, 2d
    [DB]JPA 양방향 매핑           :crit, 01-19, 3d
    [REST]REST URI 및 Response 데이터           :todo, 01-22, 8d
    Blockly 기능 명세           :crit, 01-25, 3d
    미니홈피 기능 명세           :crit, 01-26, 4d
    
```

## Code Style ( Google Convention )

https://www.notion.so/Code-Style-Google-Convention-55fd2ffa3da04e29bd18fc9852fa8d25

## 디자인 컨셉

### : 동물의 숲