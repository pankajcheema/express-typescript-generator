"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const TestController_1 = require("../controllers/TestController");
const test = new TestController_1.TestController();
const router = express_1.Router();
router.get('/testing-many-to-many', (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    test.Native();
    return res.status(http_status_codes_1.OK).json({ "res": "done" });
}));
router.get('/read-many-to-many', (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    test.readingMayToMay();
}));
router.post('/post-data', (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    test.getPosteddat(req.body);
    return res.status(http_status_codes_1.OK).json({ "res": "done" });
}));
exports.default = router;
//# sourceMappingURL=Mytest.js.map