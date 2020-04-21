"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const Cateogary_1 = require("./Cateogary");
let Question = class Question {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], Question.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Question.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Question.prototype, "text", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(type => Cateogary_1.Category, category => category.questions, {
        cascade: true
    }),
    typeorm_1.JoinTable(),
    tslib_1.__metadata("design:type", Array)
], Question.prototype, "categories", void 0);
Question = tslib_1.__decorate([
    typeorm_1.Entity()
], Question);
exports.Question = Question;
//# sourceMappingURL=Question.js.map