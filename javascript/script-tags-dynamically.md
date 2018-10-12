## To add script tags dinamically from Javascript 

You can't simply append script tags by using javascript document innerHTML
https://stackoverflow.com/questions/1197575/can-scripts-be-inserted-with-innerhtml

This way is one of the good approaches

```javascript
function addScript(src, integrity, crossorigin) {
  var scriptTag = document.createElement('script');
  scriptTag.setAttribute('src', src);
  if (integrity) {
    scriptTag.setAttribute('integrity', integrity);
  }
  if (crossorigin) {
    scriptTag.setAttribute('crossorigin', crossorigin);
  }
  document.getElementById("endScripts").appendChild(scriptTag);
}

// and then
addScript('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js', 'sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy', 'anonymous')
```