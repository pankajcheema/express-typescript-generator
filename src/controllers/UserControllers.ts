import app from '@server';
class UserController {
    constructor() {
        console.log("constructer called")

    }
    async test(): Promise<void> {
        console.log("pankaj");

    }
}

export { UserController }