let globalTime: number = 0;
function transformTime(p: Person, days: number) {
    p.money -= p.dailyCostUSD * days;
    globalTime += days;
}
class Job {
    name: string;
    salary: number;
    nextPromotionSalary: number;
    nextPromotionDays: number
    constructor (name: string, salary: number, npd: number) {
        this.name = name;
        this.salary = salary;
        this.nextPromotionSalary = this.salary * 1.5;
        this.nextPromotionDays = npd;
    }
    promotion() {
        this.salary = this.nextPromotionSalary;
        this.nextPromotionSalary = this.salary * 1.5;
    }
}
class Person {
    public name: string;
    public age: number;
    public money: number = 100;
    public dailyCostUSD: number = 20;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    dumpData() {
        console.log(
            `Data from Person: \n
            ${this.name}\n
            ${this.age}\n`
            )
    }
    public greetGeneric() {
        console.log(`Hello I am ${this.name}`)
    }
    public greetPerson(p: Person) {
        console.log("Hi "+p.name+", I'm "+this.name+". Nice to meet you.");
    }
}
class Employee extends Person {
    job: Job;
    availableVacationDays: number = 10;
    constructor(name: string, age: number, job: Job) {
        super(name, age);
        this.job = job;
    }
    public transformTimeWork(days: number) {
        transformTime(this, days);
        if (globalTime > 10) {
            this.job.promotion();
        }
        else {
            localStorage.setItem
        }
        let result = this.job.salary * days;
        this.money += result;
        console.log(`${this.name} earned ${result}$ in his ${days} days of working as a ${this.job.name}`);
        console.log(`${this.name} now has ${this.money}$`);
    }
}
function initializePersons() {
    const employee = new Employee("David Johnson", 32, new Job("IT Equipment Maintainer", 15, 10))
    return employee;
}
let player = initializePersons();

player.greetGeneric();
player.transformTimeWork(10);
console.log(globalTime.toString());