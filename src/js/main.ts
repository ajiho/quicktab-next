import Quicktab from "./Quicktab";

const app = new Quicktab();

document.querySelector("#addtab")!.addEventListener("click", function () {
  app.addIframe("https://getbootstrap.com/");
});
