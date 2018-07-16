
# NodeJS HTTP Request Examples

### Async XML Post request using node-fetch

`npm install node-fetch`

```javascript
      const node-fetch = require('node-fetch');

      const postData = ` <PostRequest>
                            <Authentication>
                                <UserName>cristian</UserName>
                                <Password>test</Password>
                            </Authentication>
                        </PostRequest>`;

      const response = await fetch('url-to-post', {
        method: 'POST',
        body: postData
      })
        .then(res => res.text())
        .then(text => text);

      console.log(response);
```