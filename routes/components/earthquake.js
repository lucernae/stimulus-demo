const express = require("express")
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

router.get('/location/:shake_id/:source_type', (req, res) => {
    const base_url = `https://realtime.inasafe.org/realtime/api/v1/earthquake/${req.params.shake_id}/${req.params.source_type}/?format=json`
    fetch(base_url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            geojson = {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        geometry: json.location,
                        properties: {
                            'url': req.originalUrl
                        }
                    }
                ]
            }
            res.send(geojson)
        })
})

router.get('/mmi/:shake_id/:source_type', (req, res) => {
    const base_url = `https://realtime.inasafe.org/realtime/api/v1/earthquake-mmi-contours/${req.params.shake_id}/${req.params.source_type}/?format=json`
    fetch(base_url)
        .then((response) => {
            return response.json()
        })
        .then((geojson) => {
            res.send(geojson)
        })
})

module.exports = router