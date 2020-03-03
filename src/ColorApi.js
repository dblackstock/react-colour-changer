// function ColorApi(){
    const getColorName = async(colorString) => {
        let result = await fetch(`https://cors-anywhere.herokuapp.com/http://thecolorapi.com/id?rgb=${colorString}`)
        return result;
    }
// }

export default getColorName;