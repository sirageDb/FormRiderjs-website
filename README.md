
# FormRider.js Website

### created by : Sirage AL DBIYAT 
---
[www Go here to see the websitie](https://formriderjs.ilovesemicolons.io)

---


**how it works ?**

```shell
git clone the project
npm install
```

**inorder to build / production build ?**

- track ```.next``` file by deleting it from .gitignore

- then :

```shell
npx next build
```

- then :

```shell
git add .
git commit -m 'production build'
git push
```

- untrack ```.next``` file in .gitignore

```shell
git rm -r --cached .next
git add .
git commit -m 'post production build'
git push
```
