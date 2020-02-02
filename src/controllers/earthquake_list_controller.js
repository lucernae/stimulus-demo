import { Controller } from "stimulus"

export default class extends Controller {

    static targets = ["state"]

    connect() {
        this.load_earthquake_list()
    }

    load_earthquake_list() {
        console.log(this.data.get('state'))
        fetch(
            '/app/components/earthquake/?format=json&ordering=-time',
            {
                mode: 'cors'
            })
            .then((response) => {
                return response.text()
            })
            .then((html) => {
                let tbody = this.element.getElementsByTagName('tbody')
                if(this.data.get('state') == 'initial'){                    
                    tbody[0].innerHTML = html   
                }
            })
    }
}