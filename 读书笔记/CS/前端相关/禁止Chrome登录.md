## 禁止Chrome登录

```javascript
// ==UserScript==
// @name         Disable Credential Management API
// @include      *
// @run-at       document-start
// @grant        none
// ==/UserScript==

delete Object.getPrototypeOf(navigator).credentials;
```

