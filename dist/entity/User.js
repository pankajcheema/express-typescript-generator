import { __decorate, __metadata } from "tslib";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
let User = class User {
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], User.prototype, "age", void 0);
User = __decorate([
    Entity()
], User);
export { User };
