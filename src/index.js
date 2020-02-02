// src/index.js
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/)
application.load(definitionsFromContext(context))
const Turbolinks = require("turbolinks")

Turbolinks.start()