$(function () {
    var Member = (function () {
        function Member(name) {
            if (name === void 0) { name = 'gest'; }
            this.id = (Member.sequenceId++).toString();
            this.name = name;
        }
        Member.prototype.getMyData = function () {
            console.log("\u79C1\u306E\u540D\u524D\u306F [" + this.name + "] \u3067\u3059\u3002");
            console.log("\u79C1\u306EID\u306F [" + this.id + "] \u3067\u3059\u3002");
        };
        Member.sequenceId = 1;
        Member.digitId = 5;
        return Member;
    }());
    var taro = new Member('test taro');
    var hanako = new Member('test hanako');
    var gest = new Member();
});

//# sourceMappingURL=main.js.map
