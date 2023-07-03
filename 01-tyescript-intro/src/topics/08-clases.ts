export class Person{
    public name: string;
    public address: string;

    constructor(name: string, address: string){
        this.name = name;
        this.address = address;
    }
}

export class Hero extends Person {

}




const ironman = new Person('ironman', 'new york');
const ironman2 = new Hero('ironman', 'new york');

console.log(ironman);