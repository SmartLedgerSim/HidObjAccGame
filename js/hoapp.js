// hoapp.js

let badgeCounts = {
  email: 0,
  teams: 0,
  phone: 0
};

function updateBadges() {
  for (let app in badgeCounts) {
    const badge = document.getElementById("badge-" + app);
    if (badgeCounts[app] > 0) {
      badge.textContent = badgeCounts[app];
      badge.style.display = "inline-block";
    } else {
      badge.style.display = "none";
    }
  }
}

function openApp(app) {
  document.querySelectorAll(".app-window").forEach(w => (w.style.display = "none"));
  document.getElementById("app-" + app).style.display = "block";

  // Clear badge
  if (badgeCounts[app] !== undefined) {
    badgeCounts[app] = 0;
    updateBadges();
  }

  // UNLOCK scenes whose clues were delivered via this app
  for (let scene in cluesGiven) {
    if (!sceneUnlocked[scene]) {
      // Determine which app delivered the clue
      if (
        (app === "email" && cluesGiven[scene] === "email") ||
        (app === "teams" && cluesGiven[scene] === "teams") ||
        (app === "phone" && cluesGiven[scene] === "phone")
      ) {
        sceneUnlocked[scene] = true;
      }
    }
  }
}

function toggleMap() {
  const map = document.getElementById("map-window");
  const isVisible = map.style.display === "block";
  document.querySelectorAll(".app-window").forEach(w => (w.style.display = "none"));
  map.style.display = isVisible ? "none" : "block";
}

function sendEmail(text) {
  document.getElementById("email-content").innerHTML += `<p>${text}</p>`;
  badgeCounts.email++;
  updateBadges();
}

function sendTeams(text) {
  document.getElementById("teams-content").innerHTML += `<p>${text}</p>`;
  badgeCounts.teams++;
  updateBadges();
}

function sendPhone(text) {
  document.getElementById("phone-content").innerHTML += `<p><strong>CALL:</strong> ${text}</p>`;
  badgeCounts.phone++;
  updateBadges();
}

function submitToERP() {
  const result = document.getElementById("erp-result");
  const caseData = CASES[currentCaseIndex];

  if (!caseData) {
    result.textContent = "No active case.";
    return;
  }

  const ids = inventory.map(d => d.id);

  const missing = caseData.requiredDocs.filter(r => !ids.includes(r));
  const extra = ids.filter(id => !caseData.requiredDocs.includes(id));

  if (missing.length === 0 && extra.length === 0) {
    // SUCCESS → END GAME
    showEndgameScreen(caseData.successText);
    return;
  }

  // FAILURE
  result.textContent =
    "Your theory is incomplete.\nMissing: " +
    (missing.length ? missing.join(", ") : "none") +
    "\nIrrelevant: " +
    (extra.length ? extra.join(", ") : "none");
}

function updateERPInventory() {
  const box = document.getElementById("erp-docs");
  box.innerHTML = "";
  inventory.forEach(doc => {
    const img = document.createElement("img");
    img.src = doc.img;
    img.className = "inventory-item";
    img.title = doc.id;
    box.appendChild(img);
  });
}
function showEndgameScreen(successText) {
  // Hide all apps
  document.querySelectorAll(".app-window").forEach(w => w.style.display = "none");

  const end = document.getElementById("endgame-window");
  const box = document.getElementById("endgame-summary");

  box.innerHTML = `
    <p>${successText}</p>
    <hr>
    <p><strong>Investigation Summary:</strong></p>
    <p>You followed the mysterious visitor trail across 15 departments, uncovering every document they tried to hide, forge, or destroy.</p>
    <p>Your persistence exposed the attempted cover‑up and restored the integrity of the financial records.</p>
    <p>The company owes you — big time.</p>
  `;

  end.style.display = "block";
}
function restartGame() {
  location.reload();
}
