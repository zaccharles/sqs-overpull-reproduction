Code to reproduce the issue described here: https://medium.com/@zaccharles/eb23d90122e0

Further blog post about the issue, specifically reproduction here: https://medium.com/@zaccharles/f4c09d384a18

```bash
> npm install
> serverless deploy
> serverless info --verbose
```

Copy Queue URL from output to line 14 of `test.js`.

```bash
> node test.js
```
