

const convertLink = function(category) {
    switch(category) {
        case "Индустриальные масла":
          return "industrial-oils"
        case "Масло для сельскохозяйственной техники":
          return "agr-tech-oils"
        case "Моторное масло 2-х и 4-х тактовых двигателей мотоциклов, лодок, скутеров":
          return "moto-tech-oils"
        case "Моторное масло для грузовых автомобилей":
          return "trucks-oils"
        case "Моторное масло для легковых автомобилей":
          return "cars-oils"
        case "Трансмиссионные масла":
          return "transmission-oils"
          
        case "industrial-oils":
            return "Индустриальные масла"
        case "agr-tech-oils":
            return "Масло для сельскохозяйственной техники"
        case "moto-tech-oils":
            return "Моторное масло 2-х и 4-х тактовых двигателей мотоциклов, лодок, скутеров"
        case "trucks-oils":
            return "Моторное масло для грузовых автомобилей"
        case "cars-oils":
            return "Моторное масло для легковых автомобилей"
        case "transmission-oils":
            return "Трансмиссионные масла"

        default:
         return false
    }
}

export {convertLink}