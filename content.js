// content.js
const targetWebsite = "https://github.com/";

function hideWebsiteContent() {
  const body = document.body;
  body.style.display = "none";
}

function showPopup() {
  const message = "Please Close this site, this is the worst site you can visit";
  return window.confirm(message);
}

if (window.location.href === targetWebsite) {
  hideWebsiteContent();
  if (!showPopup()) {
    window.location.href = "https://www.google.com";
  }
}
