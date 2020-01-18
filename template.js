export default ({app, seoConfig}) => {
  return (`<!doctype html>
  <html lang="${seoConfig.language}">
  <head>
    <meta charset="utf-8">
    <title>${seoConfig.title}</title>
    <meta name="description" content="${seoConfig.Description}">
    <meta name="author" content="${seoConfig.content}">
    <link rel="stylesheet" href="./main.css">
  </head>  
  <body>
    <div id="root">
      ${app}
    </div>
    <script src="${process.env.BROWSER_REFRESH_URL}"></script>
  </body>
  </html>`)
}
