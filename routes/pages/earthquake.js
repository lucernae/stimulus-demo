const express = require("express")
const router = express.Router()
const fetch = require('node-fetch')

router.get('/', (req, res) => {
    res.render('pages/earthquake/list')
})

router.get('/detail/:shake_id/:source_type', (req, res) => {
    const base_url = `https://realtime.inasafe.org/realtime/api/v1/earthquake/${req.params.shake_id}/${req.params.source_type}/?format=json`
    fetch(base_url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            json['location_geojson'] = `/app/components/earthquake/location/${json.shake_id}/${json.source_type}`
            json['mmi_geojson'] = `/app/components/earthquake/mmi/${json.shake_id}/${json.source_type}`
            res.render('pages/earthquake/detail', json)
        })
})

module.exports = router