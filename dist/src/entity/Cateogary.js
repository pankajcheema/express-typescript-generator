"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const Question_1 = require("./Question");
let Category = class Category {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], Category.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Category.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToMany(type => Question_1.Question, question => question.categories),
    tslib_1.__metadata("design:type", Array)
], Category.prototype, "questions", void 0);
Category = tslib_1.__decorate([
    typeorm_1.Entity()
], Category);
exports.Category = Category;
//# sourceMappingURL=Cateogary.js.map