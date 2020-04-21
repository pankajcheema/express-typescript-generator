import { getConnection, Connection } from "typeorm";
import { Category } from '../entity/Cateogary';
import { Question } from '../entity/Question';

// getting dbs connection here 
class TestController {

    constructor() {
        console.log("constructer calledddd")

    }
    async testing(): Promise<void> {
        const coon = getConnection();
        console.log("controller working");
        const category1 = new Category();
        category1.name = "animals";

        const category2 = new Category();
        category2.name = "zoo";

        const question = new Question();
        question.text = "what is your name";
        question.title = "test questio";
        question.categories = [category1, category2];
        await coon.manager.save(question);

    }
}

export { TestController }