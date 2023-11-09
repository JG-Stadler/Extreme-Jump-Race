const startButton = document.getElementById("start-game");
const mainMenu = document.getElementById("main-menu");
const charactersContainer = document.getElementById("characters-container");
const selectCharacterMenu = document.getElementById("select-character");

startButton.addEventListener("click", () => {
  mainMenu.style.display = "none";
  fetchCharacters();
});

function fetchCharacters() {
  fetch("../characters.json")
    .then((res) => res.json())
    .then((data) => loadCharacters(data));
}

function loadCharacters(charactersList) {
  for (let i = 0; i < charactersList.length; i++) {
    const characterBox = document.createElement("div");
    characterBox.setAttribute("id", charactersList[i].id);
    characterBox.setAttribute("class", "character-box");
    let characterName = document.createElement("p");
    characterName.innerText = charactersList[i].name;
    const characterImage = document.createElement("img");
    characterImage.setAttribute("src", charactersList[i].frameRun1);

    characterBox.appendChild(characterImage);
    characterBox.appendChild(characterName);
    charactersContainer.appendChild(characterBox);

    characterBox.addEventListener("click", () => {
      newCharacter(characterBox.id);
      selectCharacterMenu.style.display = "none";
    });
  }
}
function newCharacter(id) {
  fetch("../characters.json")
    .then((res) => res.json())
    .then((data) => {
      let selectedCharacter = new Object();
      selectedCharacter = data[id];
      playerAnimation(selectedCharacter);
    });
}
