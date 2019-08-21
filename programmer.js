// create programmer class and use constructor to define
class Programmer {
    constructor(name, position, age, language){
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language;
}


    printStats(){
        console.log(`
        Name:${this.name}
        Position: ${this.position}
        Age: ${this.age}
        Language: ${this.language}
        `);
    };
}



module.exports = Programmer;