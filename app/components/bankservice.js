import Bank from "../models/bank.js";

//3
//Private
let _bank = new Bank('Mark')

//Services maintain data and manipulation of data
//public
export default class BankService {
    constructor() {
        //5
    }

    get Balance() {
        console.log(5)
        console.log('someone got the balance')
        return _bank.balance
    }

    addQuarter() {
        console.log(2)
        _bank.balance += .25
    }
    withdrawQuarter() {
        _bank.balance -= .25
        if (_bank.balance < 0) {
            _bank.balance -= 25
        }
    }

}