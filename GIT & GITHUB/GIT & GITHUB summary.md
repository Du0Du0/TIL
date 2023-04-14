# GIT & GITHUB
[1장. 깃 환경 설정하기](#1장.-깃-환경-설정하기)  
[2장. 깃 저장소 만들기에서 커밋까지](#2장.-깃-저장소-만들기에서-커밋까지) 
<br>
<br>

## 1장. 깃 환경 설정하기

### CMD에 환경설정하기

- git config —global [user.name](http://user.name) “Do-Hyun,Kim” //이름
- git config —global [user.email](http://user.email) “dohyun911@hanmail.net” //이메일
- cat ~/.gitconfig  //이름, 이메일 입력 확인하기
<br>
<br>

## 2장. 깃 저장소 만들기에서 커밋까지

### 깃의 워크플로
![gitflow](gitworkflow.png)
<br>
<br>

### 새 디렉토리 만들기  
  
- `mkdir 새 디렉토리명 //이름을 만들면 vs작업폴더 내에 폴더 생성이 됨`
  - `직접 vs작업폴더 내에 새폴더를 만들고 init해도 됨`
<br>
<br>

### 디렉토리로 이동할 때  
  
- `cd 디렉토리명 //디렉토리로 이동할 때`
<br>
<br>

### 현재 디렉토리에서 깃을 사용할 수 있도록 초기화(디렉토리 만들고 초기화)
  
- `git init //초기화`
<br>
<br>

### 파일 staging하기
  
- `git add 파일명 또는 git add . //staging, ( .앞에 한 칸 띄어쓰기 주의), . = *(와일드카드)`
<br>
<br>

### 커밋하기  
  
- `git commit -m “메세지명” //커밋하기`
- git commit -am “메세지명” //staging+커밋하기, 한번이라도 커밋해야지 사용가능`
<br>
<br>

### 커밋한 파일이 어떻게 다른지 확인하기
  
- `git diff`
- `git difftool // J,K로 스크롤, :q로 종료`
- `git log --oneline --all ⇒ git difftool 커밋아이디 //커밋아이디 두 개까지 가능`
- `플러그인 git graph프로그램 설치하기`
<br>
<br>

### 상태 확인하기(영향가지 않으므로 아무때나 사용가능)  
  
- `git status`
- `git log`
- `git log --stat`
