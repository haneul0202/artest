/*
에스파와 함께 블랙맘바 물리치기
20210815 이규민, 20210821 이하늘, 20210826 정윤지
aespa 로고를 누르고 전체화면을 만든 다음, 1. 시작하기 버튼을 누르면 세계관 설명 오프닝이 나옵니다. 그 후 2. 광야로 걸어가 버튼을 누르면 POS 통해서 광야로 가게 됩니다. 광야로 들어가서 aespa 멤버들을 AR로 부릅니다. AR로 멤버들을 부르기 위해서는 3. Are you ready? 버튼을 눌러서 멤버들을 소환합니다. 그 후 블랙맘바와의 전투를 위해 4. go to blackmamba 버튼을 누릅니다.

메일 드린 것처럼 p5js에서는 버튼이 동작하는데, 서버에서는 버튼이 눌리지 않습니다.
그래서 일단 엔딩 동영상을 주석처리 했습니다.

*/

/*   ****** 포인트 부분 *******
1. 모든 팀원들이 빠지지 않고 코딩 작업과 동영상을 만드는 작업 등 모든 단계를 함께했습니다. 
2. 1번 버튼을 누르기 전까지는 실수로 다음 단계를 먼저 진행하지 않게 하기 위해서 나머지 버튼이 나오지 않게 만들었고, 해당 영상이 끝나고 다음 번호로 넘어갈 때 이전 단계로 넘어가지 않도록 재생이 끝난 단계는 버튼이 보이지 않게 만들었습니다. *꼭 순서대로 눌러주세요.*
3. 버튼을 누르기 전까지 동영상이 재생되지 않도록 했습니다.
4. AR 마크를 인식했을 때 나오는 이미지들은 AR의 장점을 살리기 위해 소환하는 느낌이 들 수 있도록 이미지의 배경을 없앴습니다.
5. 풀스크린은 터치로 작동할 수 있도록 했습니다.
6. 오프닝 세계관 영상은 직접 세계관 스토리를 적어서 영상으로 만들었습니다.       
 */







var playing = false;
var opening;
var button;
var button2;
var button3;
var kwangya;
var playing2 = false;
var playing3 = false;
var playing4 = false;
var aespa;
var cam;
var camstart;
var a;
var black;
var mamba;


function preload(){
  cam = createCapture(VIDEO);
  cam.hide();
}


/* 제목은 에스파와 함께 광야 체험하기 aespa 로고를 먼저 누르고 시작하기 버튼을 눌러주세요 */
function setup() {
  createCanvas(windowWidth, windowHeight);
  opening = createVideo("opening.mp4");
  opening.pause(); // 처음부터 동영상이 재생되지 않도록 함. play를 누르면 재생 시작
  opening.hide();
  noStroke();
  fill(0);
  button = createButton("1.시작하기");
  button.mousePressed(playVid);
  button.position(0, 0);
  button2 = createButton("2.광야로 걸어가");
  button2.mousePressed(kosmo);
  button2.position(0, 20);
  kwangya = createVideo("kosmo.mp4");
  kwangya.pause(); // 처음부터 동영상이 재생되지 않도록 함. play를 누르면 재생 시작
  kwangya.hide();
  button2.hide();
  aespa = loadImage("aespa.png")
  camstart = createButton("3.Are You Ready?");
  camstart.mousePressed(naevis);
  camstart.position(0,40);
  camstart.hide();
  // black = createVideo("black.mp4");
  // black.pause();
  // black.hide();
  // button3 = createButton("4.Go to Blackmamba");
  // button3.mousePressed(mamba);
  // button3.position(0,60);
  // button3.hide();
}




function draw() {

  createCanvas(windowWidth, windowHeight); //window 크기가 변할 때마다 변할 수 있게
  background(220);
  // textSize(80);
  fill(100);
  imageMode(CENTER);
  image(aespa,windowWidth/2,windowHeight/2);
  a=a+1;
  
  // text("에스파와 함께하는 광야 체험", windowWidth / 2, windowHeight / 2);
  // textAlign(CENTER);
  imageMode(CORNER);
  image(opening, 0, 0, windowWidth, windowHeight);
  // console.log(windowWidth,windowHeight)
  image(kwangya, 0, 0, windowWidth, windowHeight);
  if(playing3){
    image(cam,0,0,windowWidth,windowHeight);
  }
  // image(black, 0, 0, windowWidth, windowHeight);
}




function windowResized() {
  //윈도우 크기에 맞춰줌
  resizeCanvas(windowWidth, windowHeight);
}

function playVid() {
  if (playing) {
    // 멈췄다 다시 재생하는 기능을 살리고 싶으면 위에 playing = false로 하고 이거 살려야 함
    opening.pause();
    button.html("play");
    //   button.hide()
  } else {
    opening.play(); // 연속 재생 안 되게
    button.html("pause");
    // button.hide();
    button2.show();
    camstart.show();
    // button3.show();    
  }
  playing = !playing;
}

function touchStarted() {
  // 풀스크린
  var fs = fullscreen();
  if (!fs) {
    //느낌표 => 아닐 때
    fullscreen(true);
  }
}

document.ontouchmove = function (event) {
  event.preventDefault();
};

function kosmo() {
  if (playing2) {
    // 멈췄다 다시 재생하는 기능을 살리고 싶으면 위에 playing = false로 하고 이거 살려야 함
    kwangya.pause();
    button2.html("2.광야로 걸어가");
    button.hide()
  } else {
    kwangya.play(); // 연속 재생 안 되게
    button2.html("광야 잠깐 정지");
    button.hide();
    
  }
  playing2 = !playing2;
}

function naevis() {
  if (playing3) {
    // 멈췄다 다시 재생하는 기능을 살리고 싶으면 위에 playing = false로 하고 이거 살려야 함
    background(220);
    camstart.html("3.Are you ready?");
    button2.hide()
  } else {
    background(220);
    camstart.html("Here we go");
    button2.hide()
    
  }
  
  playing3 = !playing3;
  
  initialize();
  animate();
  
}

// function mamba(){
//   if (playing4) {
//     // 멈췄다 다시 재생하는 기능을 살리고 싶으면 위에 playing = false로 하고 이거 살려야 함
//     black.pause();
//     button3.html("4.Go to Blackmamba");
//     camstart.hide()
//   } else {
//     black.play();
//     button3.html("Finish");
//     camstart.hide();
    
//   }
  
//   playing4 = !playing4;
// }
