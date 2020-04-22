"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let Credentials = class Credentials {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], Credentials.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Credentials.prototype, "access_token", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Credentials.prototype, "refresh_token", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Boolean)
], Credentials.prototype, "is_active", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Date)
], Credentials.prototype, "expires_at", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Credentials.prototype, "user_id", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", Number)
], Credentials.prototype, "company_id", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn(),
    tslib_1.__metadata("design:type", Date)
], Credentials.prototype, "created_at", void 0);
tslib_1.__decorate([
    typeorm_1.UpdateDateColumn(),
    tslib_1.__metadata("design:type", Date)
], Credentials.prototype, "updated_at", void 0);
tslib_1.__decorate([
    typeorm_1.VersionColumn(),
    tslib_1.__metadata("design:type", Number)
], Credentials.prototype, "version", void 0);
Credentials = tslib_1.__decorate([
    typeorm_1.Entity()
], Credentials);
exports.Credentials = Credentials;
//# sourceMappingURL=Credentials.js.map