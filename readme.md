# node-translator-ui

- vue
  - bootstrap-vue
  - vue-axios
- webpack 3.x
- node
  - [node-translator](https://github.com/attx/node-translator)
- express

![preview 1](https://raw.githubusercontent.com/attx/node-translator-ui/master/preview/preview-01.png)
![preview 2](https://raw.githubusercontent.com/attx/node-translator-ui/master/preview/preview-02.png)

## Get started
```
git clone https://github.com/attx/node-translator.git
cd node-translator
npm install # or yarn
```

Google Translator API Access required: [cloud.google.com/translate](https://cloud.google.com/translate)
```
// ./config.json
{
  "API_KEY": "<GOOGLE_API_KEY>"
}
```

## Watch
```
npm run watch
node server.js
// http://localhost:8080/dist
```

## Build
```
npm run build
// http://localhost:3000
```
