// hoload.js

function extractIdFromFilename(path) {
  return path.split("/").pop().split(".")[0];
}

function loadScene(id) {
  const data = SCENES[id];
  if (!data) return;

  const sceneEl = document.getElementById("scene");
  const titleEl = document.getElementById("scene-title");
  const hintEl = document.getElementById("hint");

  sceneEl.style.backgroundImage = `url(${data.image})`;
  titleEl.textContent = data.title;
  hintEl.textContent = data.hint;

  sceneEl.innerHTML = "";

  data.objects.forEach(obj => {
    obj.id = extractIdFromFilename(obj.img);

    // If already collected, DO NOT SHOW IT AGAIN
    if (inventory.find(d => d.id === obj.id)) return;

    const img = document.createElement("img");
    img.src = obj.img;
    img.className = "object";
    img.style.left = obj.x + "%";
    img.style.top = obj.y + "%";
    img.title = obj.id;

    img.onclick = () => {
      collectDocument(obj);

      // Remove object permanently
      img.remove();

      hintEl.textContent = "Find the next step in one of the apps and continue working.";
    };

    sceneEl.appendChild(img);
  });
}

loadScene("door");

// build map from SCENES
function buildMap() {
  const mapBox = document.getElementById("map-rooms");
  mapBox.innerHTML = "";

  Object.keys(SCENES).forEach(sceneId => {
    const btn = document.createElement("button");
    btn.textContent = SCENES[sceneId].title;

    btn.onclick = () => {
      if (!sceneUnlocked[sceneId]) {
        sendTeams("You must read the clue in your app before going there.");
        return;
      }
      loadScene(sceneId);
      toggleMap();
    };

    mapBox.appendChild(btn);
  });
}

buildMap();
