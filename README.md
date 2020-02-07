We going to do a simple react ssr app with only one view --> The home page

### 1.  Create the project
If you don't have npx installed yet, I recommend you to install it globally 
```
npm install -g npx 
```

We are going to create the React project with the follwing:

```   
npx create-react-app ssr
```
### 2. Navigate to application folder (/ssr) 
We are going to create some components, I have placed it inside ( .../components ) folder. I have created a folder structure as I am get used to, but you can create 
it as you want.


### 3. Import your components to App.js
In that particular example I import the header, footer and home components.
To call a component:

```javascript
    import Home from './views/home/home.jsx';
```
and to you it simply call it
```javascript
    <Home />
```


### 4. In index.js change ReactDOM.render to ReactDOM.hydrate
With that step we tell React that the page will be build in server. In other words, React won't rewritte the component but will attacht event handlers.

### 5. Install express server and create server code
It's obvious, but a: **Server Side Rendering** application needs a server, I use [express](https://expressjs.com/) server. 
To install it, navigate to your application main folder and run:
```
npm install express
```
Once express is installed we a going to create the server code, I like to place it in file call index.js inside a ./server folder.

Here is the code:
```javascript
import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App.js';
import template from '../template.js';
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('./assets'));

app.get('/*', (req, res) => {
try{
    const app = ReactDOMServer.renderToString(<App />);
    return res.send(template({app}));
}catch(e){
    console.error('Something went wrong:', err);
    return res.status(500).send('Oops server error, better luck next time!');
}
});

app.listen(PORT, () => {
console.log(`😎 Server is listening on port ${PORT}`);
});
```

The main poits in the code are:
* app.use(express.static('./assets'));

    The path from application will be served. We will talk about that folder later.

* const app = ReactDOMServer.renderToString(<App />);

    In const app the renderToString function form ReacDomServer API will print all the react page in plain text, that means that you will get here the full html
    created by React code.

* return res.send(template({app}));

    The template function (explained below) places the html generate by ReactDOMServer.renderToString into one html page, and ther express server returns it.


### 6.  HTML Template
We are going to create a simple javascript function which returns a string inside a basic HTML template.


```javascript
export default ({app}) => {
  return (`<!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>React SSR App</title>
    <meta name="description" content="React SSR App">
    <meta name="author" content="SitePoint">
    <link rel="stylesheet" href="./main.css">
  </head>  
  <body>
    <div id="root">
      ${app}
    </div>
  </body>
  </html>`)
}
```

### 7. Add Webpack and Babel
To compile the application we need some additional tools, one is **babel** to compile the latest Javacript code feature to old and best supporeted once and the second is
**Webpack** a static module bunlder.
We can install them together:

```
npm install webpack webpack-cli babel-core babel-loader babel-preset-env babel-preset-react-app nodemon webpack-node-externals npm-run-all 
```

To give babel a configuration we create in the main folder a .babelrc file with the following content:
```
{
    "presets": ["@babel/preset-env", "react-app"]
}
```
In the above line we tell babel to use a presset. A presset is a couple of functionalites bringed togheter.

To config Webpack more job has to be done. As babel we start creating in the main folder a file, in that case: webpack.config.js. Below is the code, I will explain the
most relevant points, but I invite you to read carefully the webpack documentation to learn how amazing things you can do.
To sum up webpack will process al file you tell and will group them in one (... or more)

```javascript
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  plugins:  [new MiniCssExtractPlugin()],
  watchOptions:{
    aggregateTimeout:1000,
    ignored: /node_modules/
  },
  output: {
    path: path.resolve('assets'),
    filename: 'index.js'
  },
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
        },
        {
            test: /\.(js|jsx)$/,
            exclude:/node_modules/,
            use: 'babel-loader'
        }
    ]
  }
};
```
*  entry: './server/index.js',
   Our application entry point. In that case our server code.

* target: 'node'
    We are in node environtment ( -> express is a node server )

* In output we choose the folder where webpack will expose the compiled code.

* Rules
  We use babel to build js, and 'css-loader' to process css files. 
  In addition to css-loader we use MiniCssExtractPlugin to extract css in another file. That point in ver important, as we are creating a SSR aplication and we need to call the css file from our HTML page (template.js).

Finally to make above config work you have to install css-loader and mini-css-extract-pluguin:

```
    npm install css-loader
```
```
    npm install mini-css-extract-plugin
```

### 8.Prepare npm scripts to be run in development
To make our life easer while developing we need to prepare some scripts in the package.json file.

First point is tell webpack to rebuild the project when detect a change in our code. That can be done with 
> --watch=true
To avoid a rebuild at every single change you can choose the time in webpack configuration. (using watchOptions)
Also we must tell to webpack that we are in development mode
> --mode=development
```json
"build-dev": "SET NODE_ENV=development&& webpack --mode=development --watch=true",
```

The second point is restart our node server to use the lastest code compiled by webpack. And the third point is reload browser to see the lastest changes.
The last to points can be achived with browser-refresh package, with a short set up.
Firts you need to install the package
```
npm install browser-refresh
```
After that a modification must be done in app.listen method of our server file. We need to add the following two lines:

```javascript
  if (process.send) {
    process.send({ event:'online', url:'http://localhost:3000' });
  }
```
Also to allow the browser refresh we need to add an script in our template file. Just before the body close tag:
```
...

  <script src="${process.env.BROWSER_REFRESH_URL}"></script>
</body>
```

After that we can configure an npm script to run the node server. We well use browser-refresh server, and we will indicate our compiled js file as entry
```
 "start-dev": "browser-refresh ./assets/index.js"
```

To finish we can run the to npm scripts created together using the run-p instructionf rom **npm-run-all** package ( install it with: npm intal npm-run-all):
```
"go-dev": "run-p build-dev start-dev"
```

### 10. SEO
As a bonus I have included a json configuration file with relevant SEO information. To include that in page I have modified the page template.

### 11. Dev-Dependencies

### 12. Deploy




