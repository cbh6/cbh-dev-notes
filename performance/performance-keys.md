# Performance - Part 1

## Keys to improve performance of a website

- Improve what happers in the client side. The frontend needs time to render
- Improve the transfer files. Latency
- Improve the backend process (load data from db, caching ...)

## Transfer files

#### 1 - Minimize text with uglify.js. This will be done in the build process. Webpack will take care of this part.

#### 2 - Minimize images

Image formats:

- JPG: photos with a lot of colors. Complex images. Does not allow transparency
- PNG: color limit. Good for logos and simple images. Allow transparency
- GIF: Good for small animations. color limit
- SVG: vector graphics. Does not loose quality. Good for retina

Minimize:

- If you want transparency: use a PNG
- If you want animations: use a GIF
- If you want colourful images: use JPG
- If you want simple icons, logos and illustrations: use SVG
- Reduce PNG with TinyPNG
- Reduce JPG with JPEG-optimizer
- Try to choose simple illustrations over highly detailed photo
- Always lower JPEG image quality (30%-60%: reduce them with tools like image optum)
- Resize image based on size it will be displayed
- Display different sized images for different backgrounds (use media queries to load different images based on screen width and height)
- Use CDNs like imgix
- Remove image metadata with verexif.com

## Critical render path

- HTML file is received. Browser tries to download css and js files
- DOM is mounted
- CSS OM is mounted
- Load js and modify DOM and CSS OM with javascript instructions
- DOM and CSS OM are unified in the Render tree

---

1 - HTML file is received.
The borwser try to load css and js files.

Place:

- CSS Files in head tag
- JS scripts at the bottom

placing js in head tag before style sheets may block rendering because browser
will try to download and run JS code before rendering the DOM with the CSS Object Model

2 - CSS is render blocking because we're waiting for the css om to complete and combine it with
the dom to create the render tree.

keys:

load only what necessary: maybe you don't need to load all bootstrap files if you only need grid

- use media attributes to load css depending on the screen size
- above the fold

  Load first the css files that are important to render what user see when the web page loads

  With some JS you can load css files whenever browser has rendered (loaded) the web page.
  This way we can improve performance.

  for example, this script will load the stylesheet3.css file whenever browser has loaded the page

```js
  <script type="text/javascript">
    const loadStyleSheet = src => {
      if(document.createStylesheet) {
        document.createStylesheet(src);
      } else {
        const stylesheet = document.createElement('link');
        stylesheet.href = src;
        stylesheet.type = 'text/css';
        stylesheet.rel = 'stylesheet';
        document.getElementsByTagName('head')[0].appendChild(stylesheet);
      }
    }

    window.onload = function() {
      console.log('window done!');
      loadStyleSheet('./style3.css');
    }
  </script>
```

- less specificity

```css
/* bad */
.header .nav .item .link a.important {
  color: pink;
}

/* good */
a.important {
  color: pink;
}
```

- use internal css styles: allows us to not have to request CSS file
- inline css
