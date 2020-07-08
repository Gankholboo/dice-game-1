// Togloomiin buh gazart ashiglagdah global huvisagchdiig end zarlay.
// Togloom duussan esehiig hadgalah tuluviin huvisagch
var isNewGame;

// Ali toglogch shoo shideh ve gdgiig end zarlana.
var activePlayer;

// hoyor toglogchiin tsugluulsan onoonuud
var scores;

// idevhtei toglogchiin tsugluulj bgaa eeljiin onoo.
var roundScore;

// Shoonii zurgiig uzuuleh elementiig DOM-oos haij olood end hadgalay.
var diceDom = document.querySelector(".dice");

// Togloomiig ehluulne.
initGame();

// togloomiig shineer ehlehed beltgene.
function initGame() {
  // togloom ehellee gdg tuluvt oruulna.
  isNewGame = true;
  // Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглье.
  activePlayer = 0;

  // Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];

  // Toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huvisagch
  roundScore = 0;

  // program ehlehed beltgey
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // Toglogchdiin neriig butsaaj gargah
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}

// shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
    // 1-6 hurtel sanamsargui too gargaj avna.
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // shoonii zurgiig web deer gargaj irne.
    diceDom.style.display = "block";

    // buusan sanamsargui toond hargalzah shoonii zurgiig web deer gargaj irne.
    diceDom.src = "dice-" + diceNumber + ".png";

    // buusan too n 1-s yalgaatai bol idevhtei toglogchiin eejliin onoog nemegduulne.
    if (diceNumber !== 1) {
      // 1-s yalgaatai too buulaa. buusan toog toglogchid nemj ugnu.
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      // 1 buusan tul toglogchiin eeljiig ene hesegt solij ugnu.
      switchToNextPlayer();
    }
  } else {
    alert("NEW GAME tovchiig darj shineer ehelne uu");
  }
});

// HOLD tovchnii event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    // ug toglogchiin tsugluulsan eeljnii onoog deer global onoon deer nemj ugnu.
    scores[activePlayer] = scores[activePlayer] + roundScore;

    // ug toglogch hojson esehiig ( onoo n 100-s ih eseh ) shalgah

    // Delgets deer onoog n uurchilnu.
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      // togloomiig duussan tuluvt oruulna.
      isNewGame = false;
      // Yalagch gsn textiig nerniih n orond gargana.active
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      // toglogchiin eeljiig solino.
      switchToNextPlayer();
    }
  } else {
    alert("NEW GAME tovchiig darj shineer ehelne uu");
  }
});

function switchToNextPlayer() {
  // ene toglogchiin eeljindee tsugluulsan onoog 0 bolgono.
  roundScore = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Ulaan tsegiig shiljuuleh
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // shoog tur alga bolgono
  diceDom.style.display = "none";
}

// New game buyu Shine togloom ehluuleh tovchnii event listener
document.querySelector(".btn-new").addEventListener("click", initGame);
