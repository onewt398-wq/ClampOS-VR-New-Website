function linkIO() {
  window.location.href="https://nullgrip.itch.io/clampos-vr"
}

function linkMeta() {
  window.location.href="https://www.meta.com/en-gb/experiences/clampos-vr/25768767952750842/"
}

function linkPrivacy() {
  alert("Not Implemented")
}

function learnDec5Update() {
  if (confirm("More will be revealed as we get closer to december 5th but pressing ok will sopil you do you want to be spoiled?")) {
    alert("--- TU 10 NOV 26 Spoiler ---\n\n 1. Reworked A Very Common Script In The Game...");
  }
}

function attemptLogIn(email, password) {
  if (email == "ole_398@outlook.com") {
    if (password == "iClamp1234") {
      alert("Sucsessfully Logged in as: 'Oliver Newton'");
      localStorage.setItem("loggedInAsUser" "olivernewtonowner")
      window.location.href="profile.html"
    } 
  }
}
