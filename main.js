let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;

// 헬스냥
const catSvg1 = `<svg width="145" height="166" viewBox="0 0 145 166" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37.5 30L32 19.5L19 31.5L2 49.5C4.4 63.1 11.6667 74.8333 15 79C22.3333 80.8333 37.2 84.7 38 85.5C38.8 86.3 38.3333 89.8333 38 91.5L44 101L46 109C39.6 115.4 43.3333 125.667 46 130L71 142L70 158.5L86.5 163L98 142L94 131.5L96 126L109.5 88L114 84.5L126 80.5L137.5 65.5L140.5 40L122 22.5L114.5 20.5L107.5 29L114.5 35L119.5 49L109.5 51L41 53L25 51L31 41L32 34.5L37.5 30Z" fill="white"/>
<path d="M90.5954 68.4295C113.949 52.5962 104.629 31.2139 96.8409 22.2099C96.681 22.0249 96.5954 21.7953 96.5954 21.5508V10.9295C96.5954 5.05936 92.7667 6.6871 90.728 8.32107C90.6391 8.39236 90.5657 8.47958 90.5076 8.57763L83.3776 20.6095C83.0093 21.2311 82.0375 21.319 81.3712 21.0395C78.0339 19.6399 70.0783 20.7682 65.4188 21.7499C64.9409 21.8506 64.4607 21.5993 64.2726 21.1486C62.6137 17.1734 59.2117 9.54075 56.5954 5.42947C53.8594 1.13005 51.2189 3.48243 50.1666 5.30268C50.1181 5.38661 50.0852 5.47764 50.0651 5.57248L46.6446 21.6975C46.6122 21.85 46.5431 21.9942 46.447 22.117C37.1194 34.0287 42.539 51.389 46.5115 58.7746C46.5682 58.88 46.638 58.9665 46.7288 59.0445C55.4752 66.5552 76.2688 78.7765 90.5954 68.4295Z" fill="white" stroke="#191919" stroke-width="5"/>
<path d="M77.5954 40.4295C80.0954 37.2628 85.0954 33.4295 85.0954 43.4295" stroke="#191919" stroke-width="3" stroke-linecap="round"/>
<path d="M101.095 60.4295C103.313 55.8458 109.388 48.2976 117.433 50.5626C118.398 50.834 119.508 49.7379 119.096 48.825C117.471 45.2268 115.796 40.6972 115.865 37.9689C115.886 37.1052 115.245 35.698 114.41 35.4767C110.015 34.312 104.851 31.3761 108.595 25.9295C114.095 17.9295 118.095 17.9295 123.595 24.4295C129.095 30.9295 146.595 36.4295 140.095 53.9295C133.656 71.2676 137.031 76.3359 111.323 85.1807C110.902 85.3255 110.612 85.7348 110.605 86.1799C110.475 94.2212 103.55 116.151 93.0954 128.929" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
<path d="M81.5954 47.4295C80.5954 51.9295 76.3954 58.4295 67.5954 48.4295" stroke="#191919" stroke-width="3" stroke-linecap="round"/>
<path d="M44.5954 55.9295C40.762 52.5961 30.0954 47.6295 18.0954 54.4295C24.022 52.0268 34.2591 45.0981 29.7208 36.0404C29.4309 35.4617 29.6849 34.7325 30.2892 34.5006C33.8717 33.1257 38.8845 30.4342 37.0954 27.9295C34.5954 24.4295 36.0954 14.9295 26.0954 22.9295C19.5249 28.1859 17.9011 32.0032 17.9 33.9383C17.8996 34.4985 17.6831 35.124 17.1845 35.3793C10.3927 38.8578 -0.493185 47.1347 4.09539 55.9295C6.56118 59.8747 3.19009 84.7354 38.1189 84.4558C38.8185 84.4502 39.3562 85.1371 39.1937 85.8176C38.1689 90.1089 38.1637 97.6417 44.5954 101.929C48.1954 103.929 46.0954 108.763 44.5954 110.929" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
<path d="M73.5954 89.9295C68.7621 93.0961 57.9954 98.9295 53.5954 96.9295" stroke="#191919" stroke-width="3" stroke-linecap="round"/>
<path d="M83.0954 91.9295C82.7621 97.7628 84.2954 108.929 93.0954 106.929" stroke="#191919" stroke-width="3" stroke-linecap="round"/>
<path d="M76.0954 100.429C73.762 105.763 69.7954 117.129 72.5954 119.929" stroke="#191919" stroke-width="2" stroke-linecap="round"/>
<path d="M68.0954 105.429C71.0954 105.429 77.6954 106.229 80.0954 109.429" stroke="#191919" stroke-width="3" stroke-linecap="round"/>
<path d="M67.0954 114.429C69.0954 113.929 73.8954 113.429 77.0954 115.429" stroke="#191919" stroke-width="3" stroke-linecap="round"/>
<path d="M71.0954 42.4295C71.2621 37.9295 70.3954 30.6295 65.5954 37.4295L63.5954 40.9295" stroke="#191919" stroke-width="3" stroke-linecap="round"/>
<path d="M43.5954 112.429C40.6356 119.994 42.2508 136.286 71.8748 141.715C72.4958 141.828 72.885 142.48 72.6752 143.075C70.5985 148.969 68.2727 159.098 72.9497 160.393C73.0438 160.419 73.1359 160.453 73.2211 160.501C77.9433 163.149 88.0274 166.048 91.5954 156.929C96.0954 145.429 101.095 142.429 94.0954 131.429C88.4954 122.629 80.0954 121.429 76.5954 121.929" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
<path d="M37.0955 151.429C32.1236 146.84 41.8394 137.467 48.2373 132.574C48.6992 132.221 49.3616 132.348 49.7658 132.766C52.9205 136.029 62.2402 139.43 68.3176 141.269C69.165 141.526 69.3034 142.683 68.538 143.128C51.8999 152.801 43.3429 157.196 37.0955 151.429Z" fill="white" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
</svg>`;
const catSvg2 = `<svg width="145" height="169" viewBox="0 0 145 169" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37 28.5L32.5 19L27 22.5L13.4999 38.5C-0.10007 41.7 2.49994 52.5 5.49995 57.5C4.69995 72.7 14.5 79.8333 19.5 81.5L37 84L42 99L46 107L35 125L40 136L25 150.5C19 158.1 23.8333 161 27 161.5C49 164.7 59.5 148.167 62 139.5L71.5 136L85 147H90.5C80.9 157.4 86.5 164 90.5 166C118.5 155.6 119.833 134.333 117 125C111.8 112.2 101.5 121.667 97 128L110.5 86.5L127.5 78C141.5 68.8 141 47.8333 139 38.5L121.5 21H113L106.5 33L115 34.5L117 49L104.5 55L25 51.5L30.5 45L32.5 34.5L37 28.5Z" fill="white"/>
<path d="M90.5954 68.4295C113.949 52.5962 104.629 31.2139 96.8409 22.2099C96.681 22.0249 96.5954 21.7953 96.5954 21.5508V10.9295C96.5954 5.05936 92.7667 6.6871 90.728 8.32107C90.6391 8.39236 90.5657 8.47958 90.5076 8.57763L83.3776 20.6095C83.0093 21.2311 82.0375 21.319 81.3712 21.0395C78.0339 19.6399 70.0783 20.7682 65.4188 21.7499C64.9409 21.8506 64.4607 21.5993 64.2726 21.1486C62.6137 17.1734 59.2117 9.54075 56.5954 5.42947C53.8594 1.13005 51.2189 3.48243 50.1666 5.30268C50.1181 5.38661 50.0852 5.47764 50.0651 5.57248L46.6446 21.6975C46.6122 21.85 46.5431 21.9942 46.447 22.117C37.1194 34.0287 42.539 51.389 46.5115 58.7746C46.5682 58.88 46.638 58.9665 46.7288 59.0445C55.4752 66.5552 76.2688 78.7765 90.5954 68.4295Z" fill="white" stroke="#191919" stroke-width="5"/>
<path d="M77.5954 40.4295C80.0954 37.2628 85.0954 33.4295 85.0954 43.4295" stroke="#191919" stroke-width="3" stroke-linecap="round"/>
<path d="M101.095 60.4295C103.313 55.8458 109.388 48.2976 117.433 50.5626C118.398 50.834 119.508 49.7379 119.096 48.825C117.471 45.2268 115.796 40.6972 115.865 37.9689C115.886 37.1052 115.245 35.698 114.41 35.4767C110.015 34.312 104.851 31.3761 108.595 25.9295C114.095 17.9295 118.095 17.9295 123.595 24.4295C129.095 30.9295 146.595 36.4295 140.095 53.9295C133.656 71.2676 137.031 76.3359 111.323 85.1807C110.902 85.3255 110.612 85.7348 110.605 86.1799C110.475 94.2212 103.55 116.151 93.0954 128.929" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
<path d="M81.5954 47.4295C80.5954 51.9295 76.3954 58.4295 67.5954 48.4295" stroke="#191919" stroke-width="3" stroke-linecap="round"/>
<path d="M44.5954 55.9295C40.762 52.5961 30.0954 47.6295 18.0954 54.4295C24.022 52.0268 34.2591 45.0981 29.7208 36.0404C29.4309 35.4617 29.6849 34.7325 30.2892 34.5006C33.8717 33.1257 38.8845 30.4342 37.0954 27.9295C34.5954 24.4295 36.0954 14.9295 26.0954 22.9295C19.5249 28.1859 17.9011 32.0032 17.9 33.9383C17.8996 34.4985 17.6831 35.124 17.1845 35.3793C10.3927 38.8578 -0.493185 47.1347 4.09539 55.9295C6.56118 59.8747 3.19009 84.7354 38.1189 84.4558C38.8185 84.4502 39.3562 85.1371 39.1937 85.8176C38.1689 90.1089 38.1637 97.6417 44.5954 101.929C48.1954 103.929 46.0954 108.763 44.5954 110.929" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
<path d="M73.5954 89.9295C68.7621 93.0961 57.9954 98.9295 53.5954 96.9295" stroke="#191919" stroke-width="3" stroke-linecap="round"/>
<path d="M83.0954 91.9295C82.7621 97.7628 84.2954 108.929 93.0954 106.929" stroke="#191919" stroke-width="3" stroke-linecap="round"/>
<path d="M76.0954 100.429C73.762 105.763 69.7954 117.129 72.5954 119.929" stroke="#191919" stroke-width="2" stroke-linecap="round"/>
<path d="M68.0954 105.429C71.0954 105.429 77.6954 106.229 80.0954 109.429" stroke="#191919" stroke-width="3" stroke-linecap="round"/>
<path d="M67.0954 114.429C69.0954 113.929 73.8954 113.429 77.0954 115.429" stroke="#191919" stroke-width="3" stroke-linecap="round"/>
<path d="M71.0954 42.4295C71.2621 37.9295 70.3954 30.6295 65.5954 37.4295L63.5954 40.9295" stroke="#191919" stroke-width="3" stroke-linecap="round"/>
<path d="M42.5954 112.429C38.9287 116.429 32.6954 125.729 37.0954 130.929C41.3261 135.929 39.116 138.248 37.3099 138.864C37.1697 138.911 37.0404 138.977 36.9282 139.073C30.3125 144.766 18.9812 155.829 22.2935 158.108C22.7027 158.389 23.0531 158.805 23.1701 159.287C23.7509 161.683 27.6264 164.348 40.0954 160.429C53.912 156.087 61.0731 144.57 63.0206 139.142C63.072 138.999 63.15 138.873 63.2617 138.77C65.2264 136.954 70.2678 134.656 76.0954 138.929C77.9328 140.014 81.8803 144.585 84.0608 147.266C84.3712 147.648 84.9408 147.733 85.3701 147.493C102.453 137.932 80.6963 155.052 87.5954 163.429C93.1954 170.229 102.929 160.596 107.095 154.929C112.262 148.429 121.395 132.929 116.595 122.929C111.795 112.929 98.9287 124.096 93.0954 130.929" stroke="#191919" stroke-width="5" stroke-linecap="round"/>
</svg>
`;
// catSvg1과 catSvg2를 이미지 객체로 변환
const catImages = [new Image(), new Image()];
catImages[0].src = "data:image/svg+xml," + encodeURIComponent(catSvg1);
catImages[1].src = "data:image/svg+xml," + encodeURIComponent(catSvg2);

let currentCat = 0;

let muscleCat = {
  x: 20,
  y: 120,
  width: 50,
  height: 60,
  draw() {
    ctx.drawImage(
      catImages[currentCat],
      this.x,
      this.y,
      this.width,
      this.height
    );
  },
  jump() {
    if (this.y > 40) {
      this.y -= 10;
    }
  },
  fall() {
    if (this.y < 120) {
      this.y += 10;
    }
  },
};

// 장애물
let boxImage = new Image();
boxImage.src = "./image/box.svg";
class Box {
  constructor() {
    this.width = 32;
    this.height = 24;
    this.x = canvas.width - this.width;
    this.y = 156;
  }
  draw() {
    ctx.drawImage(boxImage, this.x, this.y, this.width, this.height);
  }
}

// score
let score = 0;
let scoreInterval;

function updateScore() {
  score += 1;
  document.querySelector(".score span").textContent = score;
}

let timer = 0;
let jumpTimer = 0;
let manyBoxes = [];
let animation;

// 프레임마다 실행하기
function frameRun() {
  animation = requestAnimationFrame(frameRun);
  timer++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 이미지 교체 & score 처리
  if (timer % 10 === 0) {
    currentCat = (currentCat + 1) % 2;
    updateScore();
  }
  // 무작위로 장애물 소환
  if (Math.random() < 0.01) {
    let box = new Box();
    manyBoxes.push(box);
  }
  // x좌표가 0미만이면 제거
  manyBoxes.forEach((a, i, o) => {
    if (a.x < 0) {
      o.splice(i, 1);
    }
    a.x -= 2;
    // 충돌 체크
    crash(muscleCat, a);
    a.draw();
  });

  // 점프!
  if (jumpSwitch == true) {
    muscleCat.jump();
    jumpTimer++;
  }
  if (jumpSwitch == false) {
    if (muscleCat.y < 120) {
      muscleCat.y++;
    }
  }
  if (jumpTimer > 10) {
    jumpSwitch = false;
    jumpTimer = 0;
  }
  muscleCat.draw();
}

// 충돌확인
function crash(muscleCat, box) {
  let xCalculate = box.x - (muscleCat.x + muscleCat.width);
  let yCalculate = box.y - (muscleCat.y + muscleCat.height);
  if (xCalculate < 0 && yCalculate < 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(animation);
    clearInterval(scoreInterval);
    const totalScore = document.querySelector(".total-score");
    totalScore.textContent = `${score}`;
    const sun = document.querySelector(".sun");
    const gameOver = document.querySelector(".game-over");
    sun.style.animationPlayState = "paused";
    gameOver.style.display = "block";
  }
}

// score 업데이트
scoreInterval = setInterval(updateScore, 2000);

// 리셋 버튼
const replayBtn = document.querySelector(".replay");

replayBtn.addEventListener("click", () => {
  resetGame();
});

// 헬스냥 spaceBar
var jumpSwitch = false;
let lastSpacePressTime = 0;

document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    const currentTime = Date.now();
    const timeSinceLastPress = currentTime - lastSpacePressTime;

    if (timeSinceLastPress > 500) {
      jumpSwitch = true;
      lastSpacePressTime = currentTime;
    }
  }
});

// 게임리셋
function resetGame() {
  cancelAnimationFrame(animation);
  clearInterval(scoreInterval);
  score = 0;
  document.querySelector(".score span").textContent = score;
  manyBoxes = [];
  currentCat = 0;
  jumpSwitch = false;
  lastSpacePressTime = 0;

  frameRun();

  const sun = document.querySelector(".sun");
  const gameOver = document.querySelector(".game-over");
  sun.style.animationPlayState = "running";
  gameOver.style.display = "none";

  // 스코어 인터벌 제거
  if (scoreInterval) {
    clearInterval(scoreInterval);
  }
  // 스코어 인터벌 다시시작
  scoreInterval = setInterval(updateScore, 2000);
}

frameRun();
