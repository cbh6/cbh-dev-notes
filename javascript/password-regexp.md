# Password policy regexp

Extracted from [stackoverflow](https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a)

Minimum eight characters, at least one letter and one number:

```javascript
"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
```

Minimum eight characters, at least one letter, one number and one special character:

```javascript
"^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$"
```

```javascript
Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
```

```javascript
"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
```

Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:

```javascript
"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}"
```

Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:

```javascript
"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,10}"
```