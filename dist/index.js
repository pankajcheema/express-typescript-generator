"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("./LoadEnv");
const _server_1 = tslib_1.__importDefault(require("@server"));
const Logger_1 = tslib_1.__importDefault(require("@shared/Logger"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const fs = require('fs');
typeorm_1.createConnection().then((connection) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
})).catch(error => console.log(error));
const port = Number(process.env.PORT || 3000);
_server_1.default.listen(port, () => {
    Logger_1.default.info('Express server started on port: ' + port);
});
