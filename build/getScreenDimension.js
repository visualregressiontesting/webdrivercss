"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getScreenDimension = getScreenDimension;
function getScreenDimension() {
    return {
        screenWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        screenHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    };
}
