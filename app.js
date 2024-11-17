//Javascript -> tootsoolol hiih
//variable -> ugugdol hadgalna
//if else -> nuhtsul shalgah
//for -> neg uildeliig olon davtah ued
//function -> olon kodni tsugluulga
//massive -> olon utga zerg hadgallah
//html, css ->text zurag gargaj irdg
//object -> huvirgagch
//api -> tusgai beldsen datag holboh
//innerText -> tag dotroh ugiig oorcloh
//document html deerh bvh code
// addEventListener -> websited hiigdeh uildel
document.addEventListener('DOMContentLoaded',()=>{;
  const bird = document.querySelector('.bird');
  const ground = document.querySelector('.ground');
  const game = document.querySelector('.game');

  let birdleft = 220;
  let birdbottom = 300;
  let gravity = 2;
  let isGameOver= false;

  function startgame(){
    birdbottom = birdbottom - gravity;
    bird.style.left = birdleft+'px';
    bird.style.bottom = birdbottom+'px';
  }
  let timer = setInterval(startgame,13);
  function jump(){
    if(birdbottom < 500){
    birdbottom = birdbottom + 50;
  }
  bird.style.bottom = birdbottom+'px'
}
  document.addEventListener('keyup',jump)
  function randomBlock(){
    let blockleft = 509;
    let blockBottom= Math.random()*60;
    let block = document.createElement('div');
    if(isGameOver==false){
    block.classList.add('block');
    }
    game.appendChild(block);
    block.style.bottom = blockBottom + 'px';
    block.style.left=blockleft + 'px';

    function moveBlock(){
      blockleft = blockleft - 2;
      block.style.left=blockleft + 'px';
      if(blockleft == -600){
      clearInterval(sblock);
      game.removeChild(block);
    }
    if(birdbottom==0 || blockleft>200 && blockleft<280 && birdleft==220 && birdbottom < blockBottom + 160){
          gameover();
        clearInterval(timeblock)
        }
    }
    let sblock = setInterval(moveBlock,13);
  }
  if(isGameOver==false){setInterval(randomBlock,2000)}
  function gameover(){
    isGameOver = true;
    clearInterval(timer);
    document.removeEventListener('keyup',jump);
  }
})