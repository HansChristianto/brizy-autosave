# Brizy Editor Auto Save

![](brz-autosave-preview.gif)

This code snippet is a powerful solution can be used to automatically saves in your Brizy Editor every 1 minute, giving you peace of mind that your work is always backed up. With no setup required, it's hassle-free way to ensure your work is always safe and secure. Plus, it's extremely lightweight and easy to deploy.

## Requirement

Userscript browser extension e.g. Tampermonkey

To download:

- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)
- [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

> Tested on Brizy Cloud using Firefox

## Customize

You can adjust the code as you need

```javascript
setInterval(function () {
  // Functions
}, 60000);
```

The default interval to repeat the update process is set to 1 minute = `60000`. The value is in millisecond, you can increase or decrease the value.

```javascript
setInterval(function () {
  // Functions

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

  // Another Functions
}, 60000);
```

You can adjust the popup notification style by change the code inside `notification.style.cssText =  /* Your Style */`.

## Installation

There are two ways to install the script:

1. Go find `brz-autosave.user.js` file, it should open the script. You can copy and paste it into the browser extension.
2. For automatic installation, you can click this [link](https://github.com/HansChristianto/brizy-autosave/raw/main/brz-autosave.user.js).

> ⚠️ This code is only run on your local machine. Use at your own risk.
