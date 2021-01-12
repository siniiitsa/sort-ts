"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head)
                return 0;
            var length = 1;
            var tail = this.head;
            while (tail.next) {
                length++;
                tail = tail.next;
            }
            return length;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    };
    LinkedList.prototype.at = function (index) {
        if (!this.head)
            throw new Error('Index is out of bounds!');
        var count = 0;
        var node = this.head;
        while (node) {
            if (count === index)
                return node;
            count++;
            node = node.next;
        }
        throw new Error('Index is out of bounds!');
    };
    LinkedList.prototype.compare = function (index1, index2) {
        if (!this.head)
            throw new Error('List is empty!');
        return this.at(index1).data > this.at(index2).data;
    };
    LinkedList.prototype.swap = function (index1, index2) {
        var temp = this.at(index1).data;
        this.at(index1).data = this.at(index2).data;
        this.at(index2).data = temp;
    };
    LinkedList.prototype.print = function () {
        if (!this.head)
            return;
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
