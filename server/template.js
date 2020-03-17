export default ({app, seoConfig}) => {
  return (`<!doctype html>
  <html lang="${seoConfig.language}">
  <head>
    <meta charset="utf-8">
    <title>${seoConfig.title}</title>
    <meta name="description" content="${seoConfig.description}">
    <meta name="author" content="${seoConfig.autorName}">
    <meta name="robots" content="${seoConfig.robots}" />
    <link rel="stylesheet" href="./main.css">
  </head>  
  <body id="root">
      ${app}
    <script src="${process.env.BROWSER_REFRESH_URL}"></script>
  </body>
  <script type="text/javascript" src="./client.js></script>
  </html>`)
}
