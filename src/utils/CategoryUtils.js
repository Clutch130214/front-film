const getCategory = idCategory => {
    switch(idCategory){
        case "1" : return "action"
        case "2" : return "fiction"
        case "3" : return "romance"
        case "4" : return "policier"
        case "5" : return "comedie"
        case "6" : return "film d\'animation"
        default : return ""
    }
}

export { getCategory }