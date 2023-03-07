console.log("title is: " + document.title);

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.action === "toggle image") {
    [...document.querySelectorAll("img")].forEach(
      (image) =>
        (image.style.display =
          image.style.display === "none" ? "inherit" : "none")
    );
    sendResponse("over");
  } else {
    sendResponse("404");
  }
});
