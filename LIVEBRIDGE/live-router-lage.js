import { views } from "./live-core-lage.js";

document.querySelectorAll("#bios-menu li").forEach(li => {
  li.addEventListener("click", () => {
    const view = li.getAttribute("data-view");
    document.getElementById("view").innerText = views[view];
  });
});
