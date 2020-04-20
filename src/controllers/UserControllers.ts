export class UserController {
    constructor() {
        console.log("constructer called")
    }
    async test(): Promise<void> {
        console.log("pankaj");
    }
}

module.exports = UserController;