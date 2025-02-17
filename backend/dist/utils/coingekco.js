"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueryUrl = getQueryUrl;
function getQueryUrl(queryString) {
    if (!queryString)
        return '';
    return `${process.env.COINGECKO_API_URL}${queryString}${queryString.includes('?') ? '&' : '?'}${process.env.COINGECKO_API_KEY}=${process.env.COINGECKO_API_KEY_VALUE}`;
}
//# sourceMappingURL=coingekco.js.map