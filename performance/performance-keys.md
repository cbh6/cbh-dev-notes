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
