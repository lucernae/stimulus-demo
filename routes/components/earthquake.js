const express = require("express")
const app = express()
const router = express.Router()
const fetch = require('node-fetch')

router.get('/', (req, res) => {
    const base_url = `https://realtime.inasafe.org/realtime/api/v1/earthquake${req.url}`
    fetch(base_url)
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            let contexts = {
                earthquake: response['results']
            }
            res.render('components/earthquake/entry', contexts)
        })
})

module.exports = router