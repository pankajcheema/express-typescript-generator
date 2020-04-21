import { getConnection, Connection } from "typeorm";
import { Category } from '../entity/Cateogary';
import { Question } from '../entity/Question';
import { User } from '../entity/User';
var fs = require('fs');

// getting dbs connection here 
class TestController {

    constructor() {
        console.log("constructer calledddd")

    }
    async testingMayToMay(): Promise<void> {
        const coon = getConnection();
        // console.log("controller working");
        // const category1 = new Category();
        // category1.name = "animals";

        // const category2 = new Category();
        // category2.name = "zoo";

        // const question = new Question();
        // question.text = "what is your name";
        // question.title = "test questio";
        // question.categories = [category1, category2];
        // await coon.manager.save(question);

        var i;

        const userarr: User[] = [];
        const tm = new Date().getTime();
        fs.writeFileSync('date.txt', tm);
        console.log("time befor loop start  " + tm);
        for (i = 0; i < 30000; i++) {
            console.log("Inserting a new user into the database...");
            console.log("loop for i " + i);
            const user = new User();
            user.firstName = "Timber";
            user.lastName = "Saw";
            user.age = 25;
            userarr.push(user);
        }
        console.log("waitong for promises")
        const promise = coon.manager.save(userarr);
        console.log("all done for promises")
        const tm2 = new Date().getTime()
        console.log("time after loop start " + tm2);
        const diff = tm2 - tm;
        console.log("diff is " + diff)

    }
    async readingMayToMay(): Promise<void> {
        const coon = getConnection();
        const categoriesWithQuestions = await coon
            .getRepository(Category)
            .createQueryBuilder("category")
            .leftJoinAndSelect("category.questions", "question")
            .getMany();
        console.log(categoriesWithQuestions);
        console.log("records fetched");


    }
    async Diljot(): Promise<void> {
        const coon = getConnection();
        var i

        const userarr: User[] = []

        for (i = 0; i < 30000; i++) {
            const user = new User()
            user.firstName = 'Timber'
            user.lastName = 'Saw'
            user.age = 25
            userarr.push(user)
        }
        const tm = new Date().getTime()
        console.log('time befor loop start  ' + tm)
        await coon.manager.save(userarr)
        console.log('all done for promises')
        const tm2 = new Date().getTime()
        console.log("start time " + tm);
        console.log("end time " + tm2);
        let diff = tm2 - tm;
        console.log("diffis " + diff);
        console.log('time ' + String(tm2 - tm))
    }
}

export { TestController }