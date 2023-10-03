import {$} from './utility.js';
import data from '../json/words.json' assert { type: 'json' };

let word = data[0].Words[Math.floor(Math.random()*30)];
let numOfRight = 0;
word = word.toUpperCase();
console.log(word);

$("#startButton").addEventListener("click",()=>{
    for (let i =0; i<word.length; i++){
        $("#underlines").insertAdjacentHTML("beforeend",
        `<span class="underline"></span>`)
    }
    $("#startPage").style.display = "none";
    $("#startButton").style.display = "none";
    hangmanGame();
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
            checkAnswer(e.target.innerText)
        })
    })

    //포함된 낱말을 누르면 화면에 뜨는 함수
    function showAlphabet(char){
        let index = word.indexOf(char);
        const wordUnderlines = document.querySelectorAll(".underline");
        wordUnderlines[index].innerText = char;
        index = word.indexOf(char,index+1);
        while (index>-1 && index<word.length-1){
            wordUnderlines[index].innerText = char;
            index = word.indexOf(char,index+1);
        }
    }
    
    const rightSound = new Audio('../../src/audio/RightSound.mp3');
    const wrongSound = new Audio('../../src/audio/WrongSound.mp3');
    const winSound = new Audio('../../src/audio/WinSound.wav');
    const loseSound = new Audio('../../src/audio/LoseSound.mp3');
    //맞는지 확인해주는 함수
    function checkAnswer(character){
        console.log(character);
        if (word.includes(character)){
            rightSound.play();
            showAlphabet(character);
            numOfRight++;
            console.log("Right");
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
                return;
            }

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
                    $("#face").src = '../../src/img/intermediateFace.png'
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
                    $("#face").src = '../../src/img/EndFace.png'
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
        }
    }

    
}

