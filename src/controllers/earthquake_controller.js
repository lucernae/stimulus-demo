import { Controller } from "stimulus"
import Turbolinks from "turbolinks"

export default class extends Controller {

    static targets = [
        "time",
        "shake_id",
        "magnitude",
        "location_descriptions",
        "depth",
        "source_type",
    ]

    detail(){
        let shake_id = this.data.get('shake_id')
        let source_type = this.data.get('source_type')
        Turbolinks.visit(`/app/pages/earthquake/detail/${shake_id}/${source_type}`)
    }
}