const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds')
let score = document.querySelector("#score");
const gameOver = document.querySelector('.gameOver')

// declarando uma variavel para o score

let interval = null;
let playerScore = 0;


// funçao para o score
let scoreCounter = () => {
  playerScore++;
  score.innerHTML = `score <b>${playerScore}</b>`
}



interval = setInterval(scoreCounter, 20)
window.addEventListener("keydown" , (start)=>{
  console.log(start)
    if(start.code == "Space")
      {
            gameOver.style.display = "none";
            pipe.classList.add("piperun")
            clouds.classList.add("cloudsanimation")
            

            let playerScore = 0;
            interval = setInterval(scoreCounter, 20)
      }
})

window.addEventListener("keydown" , (e)=>{

  if(e.key == "ArrowUp")
      if(mario.classList != "jump")
          {
            mario.classList.add("jump")
            setTimeout(()=>{

                // remove class after 0.6 seconds
                mario.classList.remove("jump")

              },600)
          }

})



let result = setInterval(()=>{
    let marioposition = parseInt(getComputedStyle(mario).getPropertyValue("bottom"));
    // console.log("mariobottom" + mariobottom)


    let pipePosition = parseInt(getComputedStyle(pipe).getPropertyValue("left"));
    // console.log("pipeLeft" + pipeLeft)


    if(pipePosition <= 120 && pipePosition > 0 && marioposition < 150){
        // console.log("Game Over")

        mario.src = "img/game-over.png"
        mario.style.width = '75px'
        mario.style.marginLeft = '40px'
        mario.style.bottom = `${marioposition}px`

        pipe.style.left = `${pipePosition}px`


        mario.style.animation = 'none'
        gameOver.style.display = "block";
        pipe.classList.remove("piperun")
        clouds.classList.remove("cloudsanimation")

        clearInterval(interval);
        let playerScore = 0;
    }
},10)


