const path = require("path")
const express = require("express")
const webpack = require("webpack")
const mustacheExpress = require("mustache-express")
const webpackMiddleware = require("webpack-dev-middleware")
const webpackConfig = require("./webpack.config")

const indexRouter = require('./routes/index');

const app = express()
const publicPath = path.join(__dirname, "public/html")
const port = process.env.PORT || 9000

app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(publicPath))
app.use(webpackMiddleware(webpack(webpackConfig)))
app.use(express.json());

app.use('/app', indexRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
