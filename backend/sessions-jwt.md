## JWT

- JWT has user info in the token
- Token based authentication is stateless, the server does not need to keep a record of which users  are logged in.
- Just decode JWT and verify and make sure that its a valid token (verify)
- Log out, token destroyed on client side and not interaction with server (Backend)
- The backend doesn't have to store the tokens
- Tokens are self-contained and contains all the data required to check its validity. User info
- Server only have to sign the tokens and verify on every request
- In JWT you can have any user data inside the token
- Good with multiple API. You can share JWT token. Requests can be processed
- JWT are a lot bigger than cookies due to the info they can contain
- Storing user data in a token can be dangerous. Dont store sensitive data on it

> Cookie based authentication and token based authentication is a complex topic with a lot of opinions. It's always good to learn both sides and understand the pros and cons. I will leave these resources for you to explore, but keep in mind that it is better to come back to these after you have completed this section so you have a better understanding of how everything works. 
> 1. https://dzone.com/articles/cookies-vs-tokens-the-definitive-guide
> 2. https://stackoverflow.com/questions/17000835/token-authentication-vs-cookies
> 3. https://scotch.io/bar-talk/why-jwts-suck-as-session-tokens


- `npm install jsonwebtoken`
- jwt.io