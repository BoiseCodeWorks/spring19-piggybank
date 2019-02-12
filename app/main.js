//1
import BankController from "./components/bankcontroller.js";



//6
class App {
    constructor() {
        //7
        this.controllers = {
            bankController: new BankController()
        }
    }
}




//provides access to the application from the dom
window.app = new App()