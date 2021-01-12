"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (index1, index2) {
        return (this.data[index1].toLocaleLowerCase() > this.data[index2].toLowerCase());
    };
    CharactersCollection.prototype.swap = function (index1, index2) {
        var characters = this.data.split('');
        var temp = characters[index1];
        characters[index1] = characters[index2];
        characters[index2] = temp;
        this.data = characters.join('');
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
