"use strict";
// copied from https://github.com/auth0/jwt-decode
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtDecode = void 0;
function b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {
        var code = p.charCodeAt(0).toString(16).toUpperCase();
        if (code.length < 2) {
            code = '0' + code;
        }
        return '%' + code;
    }));
}
function b64UrlDecode(str) {
    var output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
        case 0:
            break;
        case 2:
            output += '==';
            break;
        case 3:
            output += '=';
            break;
        default:
            throw new Error('base64 string is not of the correct length');
    }
    try {
        return b64DecodeUnicode(output);
    }
    catch (err) {
        return atob(output);
    }
}
function jwtDecode(token, options) {
    if (options === void 0) { options = {}; }
    if (typeof token !== 'string') {
        throw new Error('Invalid token specified: must be a string');
    }
    var pos = options.header === true ? 0 : 1;
    var part = token.split('.')[pos];
    if (typeof part !== 'string') {
        throw new Error('Invalid token specified: missing part #' + (pos + 1));
    }
    var decoded;
    try {
        decoded = b64UrlDecode(part);
    }
    catch (e) {
        throw new Error('Invalid token specified: invalid base64 for part #' +
            (pos + 1) +
            ' (' +
            e.message +
            ')');
    }
    try {
        return JSON.parse(decoded);
    }
    catch (e) {
        throw new Error('Invalid token specified: invalid json for part #' +
            (pos + 1) +
            ' (' +
            e.message +
            ')');
    }
}
exports.jwtDecode = jwtDecode;