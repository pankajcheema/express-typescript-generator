"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const Cateogary_1 = require("../entity/Cateogary");
const Question_1 = require("../entity/Question");
class TestController {
    constructor() {
        console.log("constructer calledddd");
    }
    testingMayToMay() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const coon = typeorm_1.getConnection();
            console.log("controller working");
            const category1 = new Cateogary_1.Category();
            category1.name = "animals";
            const category2 = new Cateogary_1.Category();
            category2.name = "zoo";
            const question = new Question_1.Question();
            question.text = "what is your name";
            question.title = "test questio";
            question.categories = [category1, category2];
            yield coon.manager.save(question);
        });
    }
    readingMayToMay() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const coon = typeorm_1.getConnection();
            const categoriesWithQuestions = yield coon
                .getRepository(Cateogary_1.Category)
                .createQueryBuilder("category")
                .leftJoinAndSelect("category.questions", "question")
                .getMany();
            console.log(categoriesWithQuestions);
            console.log("records fetched");
        });
    }
}
exports.TestController = TestController;
//# sourceMappingURL=TestController.js.map