## Javascript Coding

i am now getting some trouble with net class, because it's ad and UI are really hateful, so, i did some job to change it by TamperMonkey. There are two problem i care most: How to delete specific item on webpage? and how to change it's UI?

#### 1. Changing UI on Specific Webpage

- FIrst, changing UI

  ```javascript
  (function () {
      'use strict';
      var mr,styl;
      mr = document.getElementsByClassName("mr")[0];
      styl = document.createElement('style');
      styl.type='text/css';
      styl.innerHTML='.study-body.mr{right:0px;}';
      mr.appendChild(styl);
  })();
  ```

- Second, to run it

  ```javascript
  function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  
  (async function bbb () {
      'use strict';
      var mr,styl;
      await sleep(12000);
      mr = document.getElementsByClassName("mr")[0];
      styl = document.createElement('style');
      styl.type='text/css';
      styl.innerHTML='.study-body.mr{right:0px;}';
      mr.appendChild(styl);
  })();
  ```

- Other Choice

  ```javascript
  window.setInterval(function(){
      var mr,styl;
      mr = document.getElementsByClassName("mr")[0];
      if(!mr){return;}
      styl = document.createElement('style');
      styl.type='text/css';
      styl.innerHTML='.study-body.mr{right:0px;}';
      mr.appendChild(styl);
  }, 500);
  ```

#### 2.How to Delete Specific Item on the Webpage?

```javascript
var adSidebar = document.getElementById('ads');
if (adSidebar) {
 adSidebar.parentNode.removeChild (adSidebar) ;
}
```

#### 3.Other useful tips

if you have any trouble in debug, i would suggest Chrome console, it could make any problem far more easy than you think

```javascript
/*change style in tag*/
var x=document.getElementsByTagName("html")[0];
x.style.overflow="scroll";

var y = document.getElementsByClassName("Modal-wrapper")[0];
y.style.display="none";

    
var y = document.getElementById("playerwrap");
var st = document.createAttribute("style");
st.value='min-width:800px;';
y.setAttributeNode(st);

document.getElementById("playerwrap").classList.add("stick");

var mr = document.getElementsByClassName("mr")[0];
var styl = document.createAttribute("style");
styl.value='right:0px;';
mr.setAttributeNode(styl);
```

