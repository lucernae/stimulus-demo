import { Controller } from "stimulus"

export default class extends Controller {

    static targets = ["location_geojson", "map_geojson"]

    connect(){
        this.load_map()
    }

    load_map(){
        this.map_object = L.map(this.element)
        // add tile layer
        let base_layer = L.tileLayer(
            'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
            {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
                maxZoom: 18
            }
        )
        this.map_object.addLayer(base_layer)
        this.map_object.fitWorld()

        fetch(this.data.get('location_geojson'))
            .then((response) => {
                return response.json()
            })
            .then((geojson) => {
                this.location_layer = L.geoJSON(geojson)
                this.map_object.addLayer(this.location_layer)
            })

        fetch(this.data.get('mmi_geojson'))
            .then((response) => {
                return response.json()
            })
            .then((geojson) => {

                console.log(geojson)
                this.mmi_layer = L.geoJSON(
                    geojson,
                    {
                        style: (feature) => {
                            return {
                                color: feature.properties.RGB
                            }
                        }
                    })
                this.map_object.addLayer(this.mmi_layer)
                this.map_object.fitBounds(this.mmi_layer.getBounds())
            })

        this.initialized = true
    }

    disconnect() {
        this.map_object.remove()
    }
}