import {$} from './utility.js';
import data from '../json/words.json' assert { type: 'json' };

const arr = [];
while(arr.length < 3){
    let r = Math.floor(Math.random() * 30);
    if(arr.indexOf(r) === -1) arr.push(r);
}
const choice1 = data[0].Words[arr[0]].toUpperCase();
const choice2 = data[0].Words[arr[1]].toUpperCase();
const choice3 = data[0].Words[arr[2]].toUpperCase();

$("#choice1").innerText = choice1;
$("#choice2").innerText = choice2;
$("#choice3").innerText = choice3;

let word = "";
let numOfRight = 0;

$("#startButton").addEventListener("click",()=>{
    $("#startButton").style.display = "none";
    $("#choices").style.display = "block";
    $("#choices").addEventListener("click",(e)=>{
        word = e.target.innerText;
        console.log(word);
        for (let i =0; i<word.length; i++){
            $("#underlines").insertAdjacentHTML("beforeend",
            `<span class="underline"></span>`)
        }
        $("#startPage").style.display = "none";
        hangmanGame();
    })
    })
    

$("#playMusic").addEventListener("click",()=>{
    $("#music").play()
})
function hangmanGame(){
    //클릭하면 다시 클릭 못하게 하기 & 맞는지 확인해 주기
    document.querySelectorAll(".alphabet").forEach(item =>{
        item.addEventListener('click', (e)=>{
            e.target.closest('div').style.backgroundColor = "gray";
            e.target.closest('div').style.pointerEvents = "none";
            let check = checkAnswer(e.target.innerText);
            if (!check) e.target.closest('div').style.color = 'red';

            //이게 조건 6번이긴 한데 근데 솔직히 이런 기능이 없는 게 나은 것 같다.
            else e.target.closest('div').remove();
        })
    })

    //포함된 낱말을 누르면 화면에 뜨는 함수
    function showAlphabet(char){
        let index = word.indexOf(char);
        const wordUnderlines = document.querySelectorAll(".underline");
        wordUnderlines[index].innerText = char;
        index = word.indexOf(char,index+1);
        while (index>-1 && index<=word.length-1){
            wordUnderlines[index].innerText = char;
            numOfRight++;
            index = word.indexOf(char,index+1);
        }
    }
    
    const rightSound = new Audio('./src/audio/RightSound.mp3');
    const wrongSound = new Audio('./src/audio/WrongSound.mp3');
    const winSound = new Audio('./src/audio/WinSound.wav');
    const loseSound = new Audio('./src/audio/LoseSound.mp3');
    //맞는지 확인해주는 함수
    function checkAnswer(character){
        console.log(character);
        if (word.includes(character)){
            rightSound.play();
            showAlphabet(character);
            numOfRight++;
            console.log("Right");
            console.log(numOfRight);
            console.log(word.length);
            //다 맞추면 나타나는 함수
            console.log(numOfRight);
            if (word.length == numOfRight){
                setTimeout(() => {
                    $("#music").src = "";
                    winSound.play();
                    $("#endScreen").style.display = "flex";
                    $("#endComment").innerText = "WIN";
                    $("#endExplanation").innerText = `The Answer was ${word}`;
                    $("#tryAgainBtn").addEventListener("click",()=>{
                        location.reload();
                    })
                  }, 1000);
                return true;
            }
            return true;

        } else{
            wrongSound.play();
            let num = $('#numOfWrong').innerText;
            num = Number(num)+1;
            if (num < 8){
                $('#numOfWrong').innerText = num;
                $('#numOfChance').innerText -= 1;
            }            
            console.log("Wrong");
            switch(num){
                case 1:
                    $("#hanger").style.display = "block";
                    return;
                case 2:
                    $("#rope").style.display = "block";
                    return;
                case 3:
                    $("#face").style.display = "block";
                    return;
                case 4:
                    $("#body").style.display = "block";
                    $("#face").src = './src/img/intermediateFace.png'
                    $("#face").style.height = "6vw";
                    $("#face").style.top = "6vh";
                    return;
                case 5:
                    $("#larm").style.display = "block";
                    return;
                case 6: 
                    $("#rarm").style.display = "block";
                    return;
                case 7:
                    $("#lleg").style.display = "block";
                    $("#face").src = './src/img/EndFace.png'
                    $("#face").style.height = "6vw";
                    $("#face").style.top = "6vh";
                    return;
                case 8:
                    //8번 틀리면 나타나는 함수
                    $("#rleg").style.display = "block";
                    setTimeout(() => {
                        $("#music").src = "";
                        loseSound.play();
                        $("#endScreen").style.display = "flex";
                        $("#endComment").innerText = "LOSE";
                        $("#endExplanation").innerText = `The Answer was ${word}`;
                        $("#tryAgainBtn").addEventListener("click",()=>{
                            location.reload();
                        })

                      }, 1000);
                    return;
            }
            return false;
        }
    }

    
}

