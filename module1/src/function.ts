// normal function 

function add(num1:number,num2:number):number {

    return num1+num2;
}

const sum =add(2,3)

console.log(sum)

// array function

const addArrow=(num1:number,num2:number): number=>num1+num2



// object function method

const poorUser={
    name:"mohosin",
    balance:0,
    addBalance(balance:number):number{
        return this.balance+balance
    }
}