//criando uma classe

class People{
    constructor(height, weight, skin_color){
        this.height=height //this.height é atributo, height é paramêtro
        this.weight=weight
        this.skin_color=skin_color
    }


    peopledetails(){
        return `people: ${this.height} ${this.weight} ${this.skin_color}`
    }
}

//creating the object
const Eduardo = new Eduardo("184cm", "65kg", "Black")

console.log(Eduardo.peopledetails)