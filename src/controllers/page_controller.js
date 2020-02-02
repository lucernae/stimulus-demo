import { Controller } from "stimulus"
import Turbolinks from "turbolinks"

export default class extends Controller {

    static targets = ["state"]

    connect() {
        if(this.data.get('state') == 'initial'){
            this.load_initial_page()
        }
    }

    load_initial_page() {
        // we load earthquake list at first
        Turbolinks.visit('/app/pages/earthquake')
    }
}