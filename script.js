const modal = document.getElementById("modal");
const modalShow = document.getElementById("show-modal");
const modalClose = document.getElementById("close-modal");
const bookmarkForm = document.getElementById("bookmark-form");
const websiteNameEl = document.getElementById("website-name");
const websiteUrlEl = document.getElementById("website-url");
const bookmarksConatiner = document.getElementById("bookmarks-container");

// Show Modal , Focus on input
function showModal() {
  modal.classList.add("show-modal");
  websiteNameEl.focus();
}

// Modal Event Listeners
modalShow.addEventListener("click", showModal);
modalClose.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});
window.addEventListener("click", (e) => {
  e.target === modal ? modal.classList.remove("show-modal") : false;
});

// Handle Data from Form
function storeBookmark(e) {
  e.preventDefault();
  console.log(e);
  const nameValue = websiteNameEl.value;
  let urlValue = websiteUrlEl.value;
  if (!urlValue.includes("http://") && !urlValue.includes("https://")) {
    urlValue = `https://${urlValue}`;
  }
  console.log(urlValue);
}

// Event Listeners
bookmarkForm.addEventListener("submit", storeBookmark);
