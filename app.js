// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглье.
var activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huvisagch
var roundScore = 0;

// Shoonii ali talaar buusniig hadgalah huvisagch heregtei, 1-6 gesen utgiig ene huvisagchid sanamsarguigeer ugnu.

var diceNumber = Math.floor(Math.random() * 6) + 1;

// <div class="player-score" id="score-0">43</div>
// window.document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").innerHTML = "<em>Yes!<em>";

// program ehlehed beltgey
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
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
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 buusan tul toglogchiin eeljiig ene hesegt solij ugnu.

    // ene toglogchiin eeljindee tsugluulsan onoog 0 bolgono.
    document.getElementById("current-" + activePlayer).textContent = 0;
    // herev idevhtei toglogch n 0 baival idevhtei toglogchiig 1 bolgo.
    // Ugui bol idevhtei toglogchiig 0 bolgo.
    switchToNextPlayer();
  }
});

// Hold tovchnii event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  // ug toglogchiin tsugluulsan eeljnii onoog deer global onoon deer nemj ugnu.

  // if (activePlayer === 0) {
  //   scores[0] = score[0] + roundScore;
  // } else {
  //   score[1] = score[1] + roundScore;
  // }

  scores[activePlayer] = scores[activePlayer] + roundScore;

  // ug toglogch hojson esehiig ( onoo n 100-s ih eseh ) shalgah

  // Delgets deer onoog n uurchilnu.
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 10) {
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
