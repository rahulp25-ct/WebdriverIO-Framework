"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.page = exports.config = void 0;
var wdio_conf_1 = require("./wdio.conf");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return wdio_conf_1.config; } });
var page_1 = require("./test/pageobjects/page");
Object.defineProperty(exports, "page", { enumerable: true, get: function () { return page_1.default; } });
