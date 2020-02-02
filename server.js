const path = require("path")
const express = require("express")
const webpack = require("webpack")
const webpackMiddleware = require("webpack-dev-middleware")
const webpackConfig = require("./webpack.config")

const indexRouter = require('./routes/index');

const app = express()
const publicPath = path.join(__dirname, "public/html")
const port = process.env.PORT || 9000

app.use(express.static(publicPath))
app.use(webpackMiddleware(webpack(webpackConfig)))
app.use(express.json());

app.use('/api', indexRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
