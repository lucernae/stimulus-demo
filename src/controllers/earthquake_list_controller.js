import { Controller } from "stimulus"

export default class extends Controller {

    connect() {
        console.log('connected')
        this.load_earthquake_list()
    }

    load_earthquake_list() {
        fetch(
            '/api/earthquake/?format=json',
            {
                mode: 'cors'
            })
            .then((response) => {
                console.log(response.json());
            })
    }
}