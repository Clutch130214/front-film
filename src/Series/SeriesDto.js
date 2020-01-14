import { getCategory } from "../utils/CategoryUtils"

export default class {
    constructor(object) {
        this.id = object.id
        this.nom = object.nom
        this.description = object.description
        this.url = object.url
        this.acteur_list = object.acteur_list
        this.categorie = getCategory(object.id_categorie)
        this.label = 'serie'
    }
}
