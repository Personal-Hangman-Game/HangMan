# HangMan

### HangMan Game For Hanghaeplus-Coyukdae     
항해 플러스: 제1회 코육대 - 행맨 게임 부문     
![image](https://github.com/quothraven1122/HangMan/assets/102286920/4931256f-8a85-4dd4-9bba-db056d00c7aa)    

<br>

### 룰 설명   
* 랜덤으로 띄워주기 위해 영어 단어는 30개 이상 등록되어 있어야 합니다.
* 등록된 영어 단어의 글자 수는 최대 10개입니다.
* 문제를 선택할 수 있도록 영어 단어를 랜덤으로 3개 띄워주세요.
* 선택한 문제의 단어를 글자 단위로 숨깁니다. (e.g., "apple" -> "_ _ _ _ _")
* 화면에 26개 알파벳을 띄워주세요.
* 선택한 알파벳과 정답을 비교합니다.
* 일치하는 알파벳이 있을 경우 기존 UI에서 사라지고 해당 위치에 표시됩니다.
* 틀릴 경우 기존 위치에서 알파벳이 빨간색으로 바뀌고, 오류 횟수를 증가시킵니다.
* 오류 날 때마다 ‘교수대-밧줄-머리-팔-손-몸통-다리-발’ 순서로 그려서 그림이 완성되면 ‘실패’ 를 띄웁니다.
* 사용자가 모든 글자를 맞추거나 오류 횟수가 8번 이상일 경우 게임이 종료됩니다.
* 게임이 종료되면 정답을 표시하고 결과 메시지를 출력하세요.
* 게임 방식:
  
예를 들어, 'HANGHAE'라는 단어를 알아맞혀야 한다면, 아래와 같이 된다.      
> '_ _ _ _ _ _ _'
  
모두 7글자이므로 밑줄이 7개 그려져있다. 저 상태에서 게임 참가자가 'H'를 골랐다면    
> 'H _ _ _ H _ _'

이렇게 원래 H가 있는 자리에 모두 H가 드러난다. 그 다음 'N'을 고르면    
> 'H _ N _ H _ _'

이렇게 N도 나온다. 하지만 원래 단어에 없는 'O'를 고르면
> 'H _ N _ H _ _'

O는 나오지 않고 행맨 그림이 1획 그려진다. 이렇게 계속 하다가 8획 중 7획이 그려진 상황에서
> 'H A N _ H A E'

이렇게 되었다면, 게임자가 'G'를 고르면 단어가 완성되어 성공하지만 다른 글자를 고르면 틀려서 1획이 그려지고 행맨 그림이 완성되어 실패이다.

<br>

### 게임 화면
**- 시작페이지1**
![image](https://github.com/quothraven1122/HangMan/assets/102286920/698560b3-9a28-4960-817c-458a1c30829a)
* 제목 HANGMAN이 CSS animation 적용을 받아,     
최초 로딩에는 오른쪽에서 왼쪽으로 날아 들어오고,     
그 이후로는 한 글자씩 웨이브가 일어난다.
* 페이지 로딩 시 바로 배경 음악이 안 틀어진다면 틀 수 있게 왼쪽 위에 플레이 버튼을 뒀다.
* 게임을 시작하는 START 버튼에 css 스타일링을 넣어줘 색을 화려하게 만들어줬다.
* 버튼에 hover하면 box shadow가 일어난다.

<br><br>

**- 시작페이지2**
![image](https://github.com/quothraven1122/HangMan/assets/102286920/b835884e-5918-4339-9e47-2d9e982089db)

* START 버튼을 누를 시 나타나는 페이지이다.
* 랜덤으로 생성된 세개의 단어 중 하나를 선택할 수 있게 한다.
* 선택을 하면 그 단어로 Hangman 게임을 본격적으로 시작한다.

<br><br>

**- 게임페이지**
![image](https://github.com/quothraven1122/HangMan/assets/102286920/8a35569d-cc25-4a12-925a-bc546eb5cd67)
* 틀릴 때마다 ‘교수대-밧줄-머리-팔-손-몸통-다리-발’ 순서로 그려진다.
* 8 번 틀리면 그림이 완성되고, 게임 실패가 뜬다.
* 틀린 알파벳을 누르면 버튼 안 알파벳이 빨갛게 변하고 "퍼벅" 효과음이 들린다.
* 맞는 알파벳을 누르면 해당 버튼이 사라지고 "띠딩" 효과음이 들린다.
* 틀릴수록 얼굴 디자인이 바뀐다.
<img src="https://github.com/quothraven1122/HangMan/assets/102286920/672e5adf-2a9d-4b72-953c-b23ddf78ae65" style="width:150px; height:auto; position:inline-block">
<img src="https://github.com/quothraven1122/HangMan/assets/102286920/e61330a7-f0e1-4cf4-9573-e773b58fb791" style="width:150px; height:auto; position:inline-block"> <img src="https://github.com/quothraven1122/HangMan/assets/102286920/443fd298-d081-4431-ae51-8b22703c89f0" style="width:150px; height:auto; position:inline-block">

* 얼굴, 팔, 다리에 애니메이션을 넣어줬다.    
<img src="https://github.com/quothraven1122/HangMan/assets/102286920/16055508-2f8d-4ad3-94fa-7515465cb9a9" style="width:150px; height:auto; position:inline-block">    

<br><br>

**- 엔딩페이지**     
* 8번 틀렸을때 LOSE 화면이 뜨고 "크레이지 아케이드 루즈" 효과음이 들린다.
![image](https://github.com/quothraven1122/HangMan/assets/102286920/3025be58-f2f5-4848-a614-9151b1b2ad2e)

* 단어를 다 맞추면 WIN 화면이 뜨고 "이겼다고 표현하는 효과음"이 들린다. 
![image](https://github.com/quothraven1122/HangMan/assets/102286920/1311e0b0-1b4e-4326-8389-0cf6242475c7)

* Try Again 버튼에 hover하면 box shadow가 일어난다.
* Try Again 버튼을 누르면 페이지를 refresh해서 게임을 다시 시작한다. 

<br><br>

---
### Audio File 출처    

**Game BGM: "엉뚱발랄 모험"**     
✅ 이 영상은 뮤팟이 제작한 배경음악을 사용했습니다🐱
🎵 엉뚱발랄 모험 - https://youtu.be/EUuPIZEX8yA
🎫 추천인 코드: mewc.at/ref/455u
위의 URL을 통해 구독하시면 2개월 추가 혜택!
저와 함께 뮤팟 혜택을 받아요~🎁

**Wrong Soundeffect: "MP_Jab"**     
Thanks to, Mike Koenig
From: http://soundbible.com/995-Jab.html
Distributor: 저작권 걱정없는 유튜브용 음원 & 무료 효과음 서비스 ‘뮤팟’
https://www.mewpot.com
🎫 추천인 코드: mewc.at/ref/455u
위의 URL을 통해 구독하시면 2개월 추가 혜택!
저와 함께 뮤팟 혜택을 받아요~🎁

**Right Soundeffect: "MP_맑은 벨 알림음 - 7"**     
CC0 1.0 Universal made by qubodup https://freesound.org/people/qubodup/packs/12143/
🎫 추천인 코드: mewc.at/ref/455u
위의 URL을 통해 구독하시면 2개월 추가 혜택!
저와 함께 뮤팟 혜택을 받아요~🎁

**Win Soundeffect: "Video Game Win"**     
https://elements.envato.com/video-game-win-JKL83NH?utm_source=mixkit&utm_medium=referral&utm_campaign=elements_mixkit_cs_sfx_tag&_ga=2.226315290.1842999025.1696535420-557148885.1696340131

**Lose Soundeffect: "크아 패배 루우우~"**     
https://blog.naver.com/dbsgksdjq0/221913741121

