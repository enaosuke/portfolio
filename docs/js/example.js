/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ts/example.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ts/example.ts":
/*!***********************!*\
  !*** ./ts/example.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * TypeScriptの環境を説明するためのサンプルファイルです
 * 実際の構築時には削除してください
 *
 *      INDEX
 *          (1) jQueryについて
 *          (2) 型定義について
 *          (3) ES6について
 *          (4) 外部モジュールについて
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * (1) jQueryについて
 *      ts上でエラーを出さないように型定義（node_modules/@types/jquery）は読み込んでいます。
 *      実行時にエラーが出ないように、jQueryを別途読み込む必要があります。
 */
/**
 * (2) 型定義について
 *      型定義のない外部ライブラリを使いたい場合などはts上でエラーが出なくなるように型を定義する必要があります。
 *      @types/typing.d.tsに独自で定義すればエラーは出なくなります。
 *      以下の例はtyping.d.tsで無理やりエラーを回避していますが、ランタイムでエラーが出ます。
 */
console.log(exampleConstVariable);
console.log(exampleLetVariable);
exampleFunction();
exampleFunction(1);
exampleFunction('test');
exampleFunction(1, 2, 3, 4, 5);
var exampleInstance = new ExampleClass();
exampleInstance.test();
$(function () {
    $('.test').exampleJQueryFunction('test');
});
/**
 * (3) ES6について
 *      ES6も書けます（let, const, class, アロー関数など）
 *      コンパイル後はES5向けに変換されます。
 *      async, awaitなどはES5向けに書かれたとしても動かない場合があるので、
 *      新しい機能を使う場合には、ブラウザの対応状態を確かめましょう。
 */
var Member = /** @class */ (function () {
    // コンストラクタ
    function Member(name) {
        if (name === void 0) { name = 'GEST'; }
        this.id = (Member.sequenceId++).toString();
        this.name = name;
    }
    // メソッド
    Member.prototype.getMyData = function () {
        console.log("\u79C1\u306E\u540D\u524D\u306F [" + this.name + "] \u3067\u3059\u3002");
        console.log("\u79C1\u306EID\u306F [" + this.id + "] \u3067\u3059\u3002");
    };
    // クラス変数
    Member.sequenceId = 1;
    Member.digitId = 5;
    return Member;
}());
// インスタンス生成
var taro = new Member('taro');
taro.getMyData();
var hanako = new Member('hanako');
hanako.getMyData();
var gest = new Member();
gest.getMyData();
/**
 * (4) 外部モジュールについて
 *      モジュールも使えます。
 *      今後のことも考えてJavaScript標準になりそうな"ES6モジュール"を使います（import, export)
 */
// 読み込む
var _util_1 = __webpack_require__(/*! ./modules/_util */ "./ts/modules/_util.ts"); // 本当はページの最上部でまとめてimportした方がいいと思う
// 使う
console.log(_util_1.default.zeroPadding(123, 5)); //-> "00123"
console.log(_util_1.default.zeroPadding('１２３', 10, '０')); //-> "０００００００１２３"
console.log(_util_1.default.createRandom(1, 10)); //-> 1〜10のランダムの数値


/***/ }),

/***/ "./ts/modules/_util.ts":
/*!*****************************!*\
  !*** ./ts/modules/_util.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Util関数
 */
exports.default = {
    /**
     * ゼロ詰め
     * @param {number|string} target 対象
     * @param {number} digit ゼロ詰めする桁数
     * @param {string} strZero 埋める文字、デフォルトは'0（半角数字のゼロ）'
     * @return {string} ゼロ詰めした文字列
     */
    zeroPadding: function (target, digit, strZero) {
        if (strZero === void 0) { strZero = '0'; }
        var zero = (function () {
            var tmp = '';
            for (var i = 0; i < digit; i++) {
                tmp += strZero;
            }
            return tmp;
        })();
        return (zero + target.toString()).slice(-digit);
    },
    /**
     * ランダムの値を生成
     * @param {number} min 最小値
     * @param {number} max 最大値
     * @return {number} 最小値から最大値まで間のランダムの数値
     */
    createRandom: function (min, max) {
        return Math.floor(Math.random() * (max + 1 - min)) + min;
    }
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvZXhhbXBsZS50cyIsIndlYnBhY2s6Ly8vLi90cy9tb2R1bGVzL191dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7Ozs7R0FTRzs7QUFFSDs7OztHQUlHO0FBR0g7Ozs7O0dBS0c7QUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRWhDLGVBQWUsRUFBRSxDQUFDO0FBQ2xCLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQixlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDeEIsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMs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b3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3RzL2V4YW1wbGUudHNcIik7XG4iLCIvKipcbiAqIFR5cGVTY3JpcHTjga7nkrDlooPjgpLoqqzmmI7jgZnjgovjgZ/jgoHjga7jgrXjg7Pjg5fjg6vjg5XjgqHjgqTjg6vjgafjgZlcbiAqIOWun+mam+OBruani+evieaZguOBq+OBr+WJiumZpOOBl+OBpuOBj+OBoOOBleOBhFxuICogXG4gKiAgICAgIElOREVYXG4gKiAgICAgICAgICAoMSkgalF1ZXJ544Gr44Gk44GE44GmXG4gKiAgICAgICAgICAoMikg5Z6L5a6a576p44Gr44Gk44GE44GmXG4gKiAgICAgICAgICAoMykgRVM244Gr44Gk44GE44GmXG4gKiAgICAgICAgICAoNCkg5aSW6YOo44Oi44K444Ol44O844Or44Gr44Gk44GE44GmXG4gKi9cblxuLyoqXG4gKiAoMSkgalF1ZXJ544Gr44Gk44GE44GmXG4gKiAgICAgIHRz5LiK44Gn44Ko44Op44O844KS5Ye644GV44Gq44GE44KI44GG44Gr5Z6L5a6a576p77yIbm9kZV9tb2R1bGVzL0B0eXBlcy9qcXVlcnnvvInjga/oqq3jgb/ovrzjgpPjgafjgYTjgb7jgZnjgIJcbiAqICAgICAg5a6f6KGM5pmC44Gr44Ko44Op44O844GM5Ye644Gq44GE44KI44GG44Gr44CBalF1ZXJ544KS5Yil6YCU6Kqt44G/6L6844KA5b+F6KaB44GM44GC44KK44G+44GZ44CCXG4gKi9cblxuXG4vKipcbiAqICgyKSDlnovlrprnvqnjgavjgaTjgYTjgaZcbiAqICAgICAg5Z6L5a6a576p44Gu44Gq44GE5aSW6YOo44Op44Kk44OW44Op44Oq44KS5L2/44GE44Gf44GE5aC05ZCI44Gq44Gp44GvdHPkuIrjgafjgqjjg6njg7zjgYzlh7rjgarjgY/jgarjgovjgojjgYbjgavlnovjgpLlrprnvqnjgZnjgovlv4XopoHjgYzjgYLjgorjgb7jgZnjgIJcbiAqICAgICAgQHR5cGVzL3R5cGluZy5kLnRz44Gr54us6Ieq44Gn5a6a576p44GZ44KM44Gw44Ko44Op44O844Gv5Ye644Gq44GP44Gq44KK44G+44GZ44CCXG4gKiAgICAgIOS7peS4i+OBruS+i+OBr3R5cGluZy5kLnRz44Gn54Sh55CG44KE44KK44Ko44Op44O844KS5Zue6YG/44GX44Gm44GE44G+44GZ44GM44CB44Op44Oz44K/44Kk44Og44Gn44Ko44Op44O844GM5Ye644G+44GZ44CCXG4gKi9cbmNvbnNvbGUubG9nKGV4YW1wbGVDb25zdFZhcmlhYmxlKTtcbmNvbnNvbGUubG9nKGV4YW1wbGVMZXRWYXJpYWJsZSk7XG5cbmV4YW1wbGVGdW5jdGlvbigpO1xuZXhhbXBsZUZ1bmN0aW9uKDEpO1xuZXhhbXBsZUZ1bmN0aW9uKCd0ZXN0Jyk7XG5leGFtcGxlRnVuY3Rpb24oMSwgMiwgMywgNCwgNSk7XG5cbmNvbnN0IGV4YW1wbGVJbnN0YW5jZSA9IG5ldyBFeGFtcGxlQ2xhc3MoKTtcbmV4YW1wbGVJbnN0YW5jZS50ZXN0KCk7XG5cbiQoZnVuY3Rpb24oKSB7XG4gICAgJCgnLnRlc3QnKS5leGFtcGxlSlF1ZXJ5RnVuY3Rpb24oJ3Rlc3QnKTtcbn0pO1xuXG5cbi8qKlxuICogKDMpIEVTNuOBq+OBpOOBhOOBplxuICogICAgICBFUzbjgoLmm7jjgZHjgb7jgZnvvIhsZXQsIGNvbnN0LCBjbGFzcywg44Ki44Ot44O86Zai5pWw44Gq44Gp77yJXG4gKiAgICAgIOOCs+ODs+ODkeOCpOODq+W+jOOBr0VTNeWQkeOBkeOBq+WkieaPm+OBleOCjOOBvuOBmeOAglxuICogICAgICBhc3luYywgYXdhaXTjgarjganjga9FUzXlkJHjgZHjgavmm7jjgYvjgozjgZ/jgajjgZfjgabjgoLli5XjgYvjgarjgYTloLTlkIjjgYzjgYLjgovjga7jgafjgIFcbiAqICAgICAg5paw44GX44GE5qmf6IO944KS5L2/44GG5aC05ZCI44Gr44Gv44CB44OW44Op44Km44K244Gu5a++5b+c54q25oWL44KS56K644GL44KB44G+44GX44KH44GG44CCXG4gKi9cbmNsYXNzIE1lbWJlciB7XG4gICAgLy8g44Kv44Op44K55aSJ5pWwXG4gICAgc3RhdGljIHNlcXVlbmNlSWQ6IG51bWJlciA9IDE7XG4gICAgc3RhdGljIGRpZ2l0SWQ6IG51bWJlciA9IDU7XG5cbiAgICAvLyDjg6Hjg7Pjg5DlpInmlbBcbiAgICBwcml2YXRlIGlkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBuYW1lOiBzdHJpbmc7XG5cbiAgICAvLyDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICBjb25zdHJ1Y3RvciAobmFtZTogc3RyaW5nPSdHRVNUJykge1xuICAgICAgICB0aGlzLmlkID0gKE1lbWJlci5zZXF1ZW5jZUlkKyspLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgLy8g44Oh44K944OD44OJXG4gICAgZ2V0TXlEYXRhICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coYOengeOBruWQjeWJjeOBryBbJHt0aGlzLm5hbWV9XSDjgafjgZnjgIJgKTtcbiAgICAgICAgY29uc29sZS5sb2coYOengeOBrklE44GvIFske3RoaXMuaWR9XSDjgafjgZnjgIJgKTtcbiAgICB9XG59XG5cbi8vIOOCpOODs+OCueOCv+ODs+OCueeUn+aIkFxuY29uc3QgdGFybzogTWVtYmVyID0gbmV3IE1lbWJlcigndGFybycpO1xudGFyby5nZXRNeURhdGEoKTtcblxuY29uc3QgaGFuYWtvOiBNZW1iZXIgPSBuZXcgTWVtYmVyKCdoYW5ha28nKTtcbmhhbmFrby5nZXRNeURhdGEoKTtcblxuY29uc3QgZ2VzdDogTWVtYmVyID0gbmV3IE1lbWJlcigpO1xuZ2VzdC5nZXRNeURhdGEoKTtcblxuXG4vKipcbiAqICg0KSDlpJbpg6jjg6Ljgrjjg6Xjg7zjg6vjgavjgaTjgYTjgaZcbiAqICAgICAg44Oi44K444Ol44O844Or44KC5L2/44GI44G+44GZ44CCXG4gKiAgICAgIOS7iuW+jOOBruOBk+OBqOOCguiAg+OBiOOBpkphdmFTY3JpcHTmqJnmupbjgavjgarjgorjgZ3jgYbjgapcIkVTNuODouOCuOODpeODvOODq1wi44KS5L2/44GE44G+44GZ77yIaW1wb3J0LCBleHBvcnQpXG4gKi9cbi8vIOiqreOBv+i+vOOCgFxuaW1wb3J0IHV0aWwgZnJvbSAnLi9tb2R1bGVzL191dGlsJzsgLy8g5pys5b2T44Gv44Oa44O844K444Gu5pyA5LiK6YOo44Gn44G+44Go44KB44GmaW1wb3J044GX44Gf5pa544GM44GE44GE44Go5oCd44GGXG5cbi8vIOS9v+OBhlxuY29uc29sZS5sb2codXRpbC56ZXJvUGFkZGluZygxMjMsIDUpKTsgLy8tPiBcIjAwMTIzXCJcbmNvbnNvbGUubG9nKHV0aWwuemVyb1BhZGRpbmcoJ++8ke+8ku+8kycsIDEwLCAn77yQJykpOyAvLy0+IFwi77yQ77yQ77yQ77yQ77yQ77yQ77yQ77yR77yS77yTXCJcbmNvbnNvbGUubG9nKHV0aWwuY3JlYXRlUmFuZG9tKDEsIDEwKSk7IC8vLT4gMeOAnDEw44Gu44Op44Oz44OA44Og44Gu5pWw5YCkXG4iLCIvKipcbiAqIFV0aWzplqLmlbBcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIC8qKlxuICAgICAqIOOCvOODreipsOOCgVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gdGFyZ2V0IOWvvuixoVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkaWdpdCDjgrzjg63oqbDjgoHjgZnjgovmoYHmlbBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyWmVybyDln4vjgoHjgovmloflrZfjgIHjg4fjg5Xjgqnjg6vjg4jjga8nMO+8iOWNiuinkuaVsOWtl+OBruOCvOODre+8iSdcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IOOCvOODreipsOOCgeOBl+OBn+aWh+Wtl+WIl1xuICAgICAqL1xuICAgIHplcm9QYWRkaW5nOiAodGFyZ2V0OiBudW1iZXJ8c3RyaW5nLCBkaWdpdDogbnVtYmVyLCBzdHJaZXJvOiBzdHJpbmcgPSAnMCcpOiBzdHJpbmcgPT4ge1xuICAgICAgICBjb25zdCB6ZXJvOiBzdHJpbmcgPSAoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHRtcDogc3RyaW5nID0gJyc7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZ2l0OyBpKyspIHtcbiAgICAgICAgICAgICAgICB0bXAgKz0gc3RyWmVybztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0bXA7XG4gICAgICAgIH0pKCk7XG4gICAgICAgIHJldHVybiAoemVybyArIHRhcmdldC50b1N0cmluZygpKS5zbGljZSgtZGlnaXQpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDjg6njg7Pjg4Djg6Djga7lgKTjgpLnlJ/miJBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluIOacgOWwj+WApFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXgg5pyA5aSn5YCkXG4gICAgICogQHJldHVybiB7bnVtYmVyfSDmnIDlsI/lgKTjgYvjgonmnIDlpKflgKTjgb7jgafplpPjga7jg6njg7Pjg4Djg6Djga7mlbDlgKRcbiAgICAgKi9cbiAgICBjcmVhdGVSYW5kb206IChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCArIDEgLSBtaW4pKSArIG1pbjtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==