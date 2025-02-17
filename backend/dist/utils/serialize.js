"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serialize = (obj) => {
    const query = new URLSearchParams(obj);
    return query.toString();
};
exports.default = serialize;
//# sourceMappingURL=serialize.js.map