// ==UserScript==
// @name         Brizy Editor Auto Save
// @namespace    https://github.com/HansChristianto/brizy-autosave/
// @version      1.0
// @description  Automatically saves in Brizy Editor every 1 minute.
// @updateURL    https://github.com/HansChristianto/brizy-autosave/raw/main/brz-autosave.user.js
// @downloadURL  https://github.com/HansChristianto/brizy-autosave/raw/main/brz-autosave.user.js
// @author       https://github.com/HansChristianto/
// @match        *://*.brizy.cloud/projects/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=brizy.cloud
// @grant        none
// @run-at document-end
// ==/UserScript==

(function () {
  "use strict";

  // Interval to repeat the update process every 1 minute (60000 milliseconds)
  setInterval(() => {
    // Select the update button
    const updateBtn = document.querySelector(
      ".brz-ed-fixed-bottom-panel__btn-loading"
    );
    // If the update button exists, click it and display the notification
    if (!updateBtn) return;

    updateBtn.click();

    // Create a div element for the notification
    const notification = document.createElement("div");
    notification.style.cssText = `
    position: fixed;
    right: 40px;
    bottom: 80px;
    background-color: #FFFFFF;
    padding: 10px 20px;
    color: #000000;
    border: 1px solid #000000;
    border-radius: 4px;
  `;
    notification.innerHTML = "Saved";

    // Add the notification to the page
    document.body.appendChild(notification);

    // Automatically hide the notification after 1s
    setTimeout(() => {
      notification.style.opacity = 0;
      setTimeout(() => {
        notification.remove();
      }, 1000);
    }, 1000);
  }, 60000);
})();
