import Controller from "./Controller.js";
import Store from "./Store.js";
import storage from "./storage.js";

const tag = "[main]";

document.addEventListener("DOMContentLoaded", main);

function main() {
  console.log(tag);
  const store = new Store(storage);

  const views = {};

  new Controller(store, views);
}

// lite-server 시작 명령어: npx lite-server --baseDir vanilla
