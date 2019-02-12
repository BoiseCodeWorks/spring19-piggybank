//2
import BankService from "./bankservice.js";

//Private

//4
let bankService = new BankService()

function draw() {
    console.log(4)
    let b = bankService.Balance
    if (b < 0) {
        document.querySelector('h1').style.color = 'red';
    } else {
        document.querySelector('h1').style.color = 'black';
    }
    document.getElementById('bal').innerText = b.toFixed(2)
    console.log(6)
}


//Public
export default class BankController {
    constructor() {
        //8
        console.log('Building Controller')
        draw()
    }
    addQuarter() {
        console.log(1)
        bankService.addQuarter()
        console.log(3)
        draw()
    }
    withdrawQuarter() {
        bankService.withdrawQuarter()
        draw()
    }
}