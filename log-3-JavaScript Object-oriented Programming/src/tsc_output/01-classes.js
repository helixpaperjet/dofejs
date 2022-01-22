var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var globalTime = 0;
function transformTime(p, days) {
    p.money -= p.dailyCostUSD * days;
    globalTime += days;
}
var Job = /** @class */ (function () {
    function Job(name, salary, npd) {
        this.name = name;
        this.salary = salary;
        this.nextPromotionSalary = this.salary * 1.5;
        this.nextPromotionDays = npd;
    }
    Job.prototype.promotion = function () {
        this.salary = this.nextPromotionSalary;
        this.nextPromotionSalary = this.salary * 1.5;
    };
    return Job;
}());
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.money = 100;
        this.dailyCostUSD = 20;
        this.name = name;
        this.age = age;
    }
    Person.prototype.dumpData = function () {
        console.log("Data from Person: \n\n            ".concat(this.name, "\n\n            ").concat(this.age, "\n"));
    };
    Person.prototype.greetGeneric = function () {
        console.log("Hello I am ".concat(this.name));
    };
    Person.prototype.greetPerson = function (p) {
        console.log("Hi " + p.name + ", I'm " + this.name + ". Nice to meet you.");
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, job) {
        var _this = _super.call(this, name, age) || this;
        _this.availableVacationDays = 10;
        _this.job = job;
        return _this;
    }
    Employee.prototype.transformTimeWork = function (days) {
        transformTime(this, days);
        if (globalTime > 10) {
            this.job.promotion();
        }
        else {
            localStorage.setItem;
        }
        var result = this.job.salary * days;
        this.money += result;
        console.log("".concat(this.name, " earned ").concat(result, "$ in his ").concat(days, " days of working as a ").concat(this.job.name));
        console.log("".concat(this.name, " now has ").concat(this.money, "$"));
    };
    return Employee;
}(Person));
function initializePersons() {
    var employee = new Employee("David Johnson", 32, new Job("IT Equipment Maintainer", 15, 10));
    return employee;
}
var player = initializePersons();
player.greetGeneric();
player.transformTimeWork(10);
console.log(globalTime.toString());
