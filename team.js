const Programmer = require("./programmer.js")



class Team {
    constructor(project){
        this.name = project;
        this.programmers =[];

    }


addProgrammer(name, position, age, language){
    this.programmers.push(newProgrammer(name, position, age, language));

}
programmerCount(){

    return.this.programmers.length;
};
}


module.exports = Team;