/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./src/content_script.js ***!
  \*******************************/
console.log("title is: " + document.title);
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.action === "toggle image") {
    [...document.querySelectorAll("img")].forEach(image => image.style.display = image.style.display === "none" ? "inherit" : "none");
    sendResponse("over");
  } else {
    sendResponse("404");
  }
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudF9zY3JpcHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLEtBQUssQ0FBQztBQUUxQ0MsTUFBTSxDQUFDQyxPQUFPLENBQUNDLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDLFVBQVVDLEdBQUcsRUFBRUMsTUFBTSxFQUFFQyxZQUFZLEVBQUU7RUFDeEUsSUFBSUYsR0FBRyxDQUFDRyxNQUFNLEtBQUssY0FBYyxFQUFFO0lBQ2pDLENBQUMsR0FBR1QsUUFBUSxDQUFDVSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQzFDQyxLQUFLLElBQ0hBLEtBQUssQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLEdBQ2xCRixLQUFLLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxLQUFLLE1BQU0sR0FBRyxTQUFTLEdBQUcsTUFBTyxDQUN6RDtJQUNETixZQUFZLENBQUMsTUFBTSxDQUFDO0VBQ3RCLENBQUMsTUFBTTtJQUNMQSxZQUFZLENBQUMsS0FBSyxDQUFDO0VBQ3JCO0FBQ0YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXl1LWV4dGVuc2lvbi1zdGFydGVyLy4vc3JjL2NvbnRlbnRfc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwidGl0bGUgaXM6IFwiICsgZG9jdW1lbnQudGl0bGUpO1xuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKG1zZywgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgaWYgKG1zZy5hY3Rpb24gPT09IFwidG9nZ2xlIGltYWdlXCIpIHtcbiAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKV0uZm9yRWFjaChcbiAgICAgIChpbWFnZSkgPT5cbiAgICAgICAgKGltYWdlLnN0eWxlLmRpc3BsYXkgPVxuICAgICAgICAgIGltYWdlLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiID8gXCJpbmhlcml0XCIgOiBcIm5vbmVcIilcbiAgICApO1xuICAgIHNlbmRSZXNwb25zZShcIm92ZXJcIik7XG4gIH0gZWxzZSB7XG4gICAgc2VuZFJlc3BvbnNlKFwiNDA0XCIpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJ0aXRsZSIsImNocm9tZSIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsIm1zZyIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImFjdGlvbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaW1hZ2UiLCJzdHlsZSIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9