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
 *      実行時にはjQueryを別途読み込まないとランタイムエラーになります。
 */
/**
 * (2) 型定義について
 *      型定義のない外部ライブラリを使いたい場合などはts上でエラーが出なくなるように型を定義する必要があります。
 *      @types/_index.tsに独自で定義すればエラーは出なくなります。
 *
 *      あくまでts上のエラー回避でしかないので、ランタイムエラーには注意です。
 *      以下の例は全てランタイムでエラーが出ます。
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
    // 自己紹介メソッド
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvZXhhbXBsZS50cyIsIndlYnBhY2s6Ly8vLi90cy9tb2R1bGVzL191dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7Ozs7R0FTRzs7QUFFSDs7OztHQUlHO0FBR0g7Ozs7Ozs7R0FPRztBQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFFaEMsZUFBZSxFQUFFLENBQUM7QUFDbEIsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25CLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN4QixlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRS9CLElBQU0sZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7QUFDM0MsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO0FBRXZCLENBQUMsQ0FBQztJQUNFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUMsQ0FBQztBQUdIOzs7Ozs7R0FNRztBQUNIO0lBU0ksVUFBVTtJQUNWLGdCQUFhLElBQW1CO1FBQW5CLG9DQUFtQjtRQUM1QixJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELFdBQVc7SUFDWCwwQkFBUyxHQUFUO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBVSxJQUFJLENBQUMsSUFBSSx5QkFBTyxDQUFDLENBQUM7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBVSxJQUFJLENBQUMsRUFBRSx5QkFBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQWxCRCxRQUFRO0lBQ0QsaUJBQVUsR0FBVyxDQUFDLENBQUM7SUFDdkIsY0FBTyxHQUFXLENBQUMsQ0FBQztJQWlCL0IsYUFBQztDQUFBO0FBRUQsV0FBVztBQUNYLElBQU0sSUFBSSxHQUFXLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUVqQixJQUFNLE1BQU0sR0FBVyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM1QyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7QUFFbkIsSUFBTSxJQUFJLEdBQVcsSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUNsQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7QUFHakI7Ozs7R0FJRztBQUNILE9BQU87QUFDUCxrRkFBbUMsQ0FBQyxpQ0FBaUM7QUFFckUsS0FBSztBQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVk7QUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQjtBQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7OztBQzdGeEQ7O0dBRUc7QUFDSCxrQkFBZTtJQUNYOzs7Ozs7T0FNRztJQUNILFdBQVcsRUFBRSxVQUFDLE1BQXFCLEVBQUUsS0FBYSxFQUFFLE9BQXFCO1FBQXJCLHVDQUFxQjtRQUNyRSxJQUFNLElBQUksR0FBVyxDQUFDO1lBQ2xCLElBQUksR0FBRyxHQUFXLEVBQUUsQ0FBQztZQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM1QixHQUFHLElBQUksT0FBTyxDQUFDO2FBQ2xCO1lBQ0QsT0FBTyxHQUFHLENBQUM7UUFDZixDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ0wsT0FBTyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxZQUFZLEVBQUUsVUFBQyxHQUFXLEVBQUUsR0FBVztRQUNuQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUM3RCxDQUFDO0NBQ0oiLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdHMvZXhhbXBsZS50c1wiKTtcbiIsIi8qKlxuICogVHlwZVNjcmlwdOOBrueSsOWig+OCkuiqrOaYjuOBmeOCi+OBn+OCgeOBruOCteODs+ODl+ODq+ODleOCoeOCpOODq+OBp+OBmVxuICog5a6f6Zqb44Gu5qeL56+J5pmC44Gr44Gv5YmK6Zmk44GX44Gm44GP44Gg44GV44GEXG4gKiBcbiAqICAgICAgSU5ERVhcbiAqICAgICAgICAgICgxKSBqUXVlcnnjgavjgaTjgYTjgaZcbiAqICAgICAgICAgICgyKSDlnovlrprnvqnjgavjgaTjgYTjgaZcbiAqICAgICAgICAgICgzKSBFUzbjgavjgaTjgYTjgaZcbiAqICAgICAgICAgICg0KSDlpJbpg6jjg6Ljgrjjg6Xjg7zjg6vjgavjgaTjgYTjgaZcbiAqL1xuXG4vKipcbiAqICgxKSBqUXVlcnnjgavjgaTjgYTjgaZcbiAqICAgICAgdHPkuIrjgafjgqjjg6njg7zjgpLlh7rjgZXjgarjgYTjgojjgYbjgavlnovlrprnvqnvvIhub2RlX21vZHVsZXMvQHR5cGVzL2pxdWVyee+8ieOBr+iqreOBv+i+vOOCk+OBp+OBhOOBvuOBmeOAglxuICogICAgICDlrp/ooYzmmYLjgavjga9qUXVlcnnjgpLliKXpgJToqq3jgb/ovrzjgb7jgarjgYTjgajjg6njg7Pjgr/jgqTjg6Djgqjjg6njg7zjgavjgarjgorjgb7jgZnjgIJcbiAqL1xuXG5cbi8qKlxuICogKDIpIOWei+Wumue+qeOBq+OBpOOBhOOBplxuICogICAgICDlnovlrprnvqnjga7jgarjgYTlpJbpg6jjg6njgqTjg5bjg6njg6rjgpLkvb/jgYTjgZ/jgYTloLTlkIjjgarjganjga90c+S4iuOBp+OCqOODqeODvOOBjOWHuuOBquOBj+OBquOCi+OCiOOBhuOBq+Wei+OCkuWumue+qeOBmeOCi+W/heimgeOBjOOBguOCiuOBvuOBmeOAglxuICogICAgICBAdHlwZXMvX2luZGV4LnRz44Gr54us6Ieq44Gn5a6a576p44GZ44KM44Gw44Ko44Op44O844Gv5Ye644Gq44GP44Gq44KK44G+44GZ44CCXG4gKiAgICAgIFxuICogICAgICDjgYLjgY/jgb7jgad0c+S4iuOBruOCqOODqeODvOWbnumBv+OBp+OBl+OBi+OBquOBhOOBruOBp+OAgeODqeODs+OCv+OCpOODoOOCqOODqeODvOOBq+OBr+azqOaEj+OBp+OBmeOAglxuICogICAgICDku6XkuIvjga7kvovjga/lhajjgabjg6njg7Pjgr/jgqTjg6Djgafjgqjjg6njg7zjgYzlh7rjgb7jgZnjgIJcbiAqL1xuY29uc29sZS5sb2coZXhhbXBsZUNvbnN0VmFyaWFibGUpO1xuY29uc29sZS5sb2coZXhhbXBsZUxldFZhcmlhYmxlKTtcblxuZXhhbXBsZUZ1bmN0aW9uKCk7XG5leGFtcGxlRnVuY3Rpb24oMSk7XG5leGFtcGxlRnVuY3Rpb24oJ3Rlc3QnKTtcbmV4YW1wbGVGdW5jdGlvbigxLCAyLCAzLCA0LCA1KTtcblxuY29uc3QgZXhhbXBsZUluc3RhbmNlID0gbmV3IEV4YW1wbGVDbGFzcygpO1xuZXhhbXBsZUluc3RhbmNlLnRlc3QoKTtcblxuJChmdW5jdGlvbigpIHtcbiAgICAkKCcudGVzdCcpLmV4YW1wbGVKUXVlcnlGdW5jdGlvbigndGVzdCcpO1xufSk7XG5cblxuLyoqXG4gKiAoMykgRVM244Gr44Gk44GE44GmXG4gKiAgICAgIEVTNuOCguabuOOBkeOBvuOBme+8iGxldCwgY29uc3QsIGNsYXNzLCDjgqLjg63jg7zplqLmlbDjgarjganvvIlcbiAqICAgICAg44Kz44Oz44OR44Kk44Or5b6M44GvRVM15ZCR44GR44Gr5aSJ5o+b44GV44KM44G+44GZ44CCXG4gKiAgICAgIGFzeW5jLCBhd2FpdOOBquOBqeOBr0VTNeWQkeOBkeOBq+abuOOBi+OCjOOBn+OBqOOBl+OBpuOCguWLleOBi+OBquOBhOWgtOWQiOOBjOOBguOCi+OBruOBp+OAgVxuICogICAgICDmlrDjgZfjgYTmqZ/og73jgpLkvb/jgYbloLTlkIjjgavjga/jgIHjg5bjg6njgqbjgrbjga7lr77lv5znirbmhYvjgpLnorrjgYvjgoHjgb7jgZfjgofjgYbjgIJcbiAqL1xuY2xhc3MgTWVtYmVyIHtcbiAgICAvLyDjgq/jg6njgrnlpInmlbBcbiAgICBzdGF0aWMgc2VxdWVuY2VJZDogbnVtYmVyID0gMTtcbiAgICBzdGF0aWMgZGlnaXRJZDogbnVtYmVyID0gNTtcblxuICAgIC8vIOODoeODs+ODkOWkieaVsFxuICAgIHByaXZhdGUgaWQ6IHN0cmluZztcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZztcblxuICAgIC8vIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgIGNvbnN0cnVjdG9yIChuYW1lOiBzdHJpbmc9J0dFU1QnKSB7XG4gICAgICAgIHRoaXMuaWQgPSAoTWVtYmVyLnNlcXVlbmNlSWQrKykudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICAvLyDoh6rlt7HntLnku4vjg6Hjgr3jg4Pjg4lcbiAgICBnZXRNeURhdGEgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhg56eB44Gu5ZCN5YmN44GvIFske3RoaXMubmFtZX1dIOOBp+OBmeOAgmApO1xuICAgICAgICBjb25zb2xlLmxvZyhg56eB44GuSUTjga8gWyR7dGhpcy5pZH1dIOOBp+OBmeOAgmApO1xuICAgIH1cbn1cblxuLy8g44Kk44Oz44K544K/44Oz44K555Sf5oiQXG5jb25zdCB0YXJvOiBNZW1iZXIgPSBuZXcgTWVtYmVyKCd0YXJvJyk7XG50YXJvLmdldE15RGF0YSgpO1xuXG5jb25zdCBoYW5ha286IE1lbWJlciA9IG5ldyBNZW1iZXIoJ2hhbmFrbycpO1xuaGFuYWtvLmdldE15RGF0YSgpO1xuXG5jb25zdCBnZXN0OiBNZW1iZXIgPSBuZXcgTWVtYmVyKCk7XG5nZXN0LmdldE15RGF0YSgpO1xuXG5cbi8qKlxuICogKDQpIOWklumDqOODouOCuOODpeODvOODq+OBq+OBpOOBhOOBplxuICogICAgICDjg6Ljgrjjg6Xjg7zjg6vjgoLkvb/jgYjjgb7jgZnjgIJcbiAqICAgICAg5LuK5b6M44Gu44GT44Go44KC6ICD44GI44GmSmF2YVNjcmlwdOaomea6luOBq+OBquOCiuOBneOBhuOBqlwiRVM244Oi44K444Ol44O844OrXCLjgpLkvb/jgYTjgb7jgZnvvIhpbXBvcnQsIGV4cG9ydClcbiAqL1xuLy8g6Kqt44G/6L6844KAXG5pbXBvcnQgdXRpbCBmcm9tICcuL21vZHVsZXMvX3V0aWwnOyAvLyDmnKzlvZPjga/jg5rjg7zjgrjjga7mnIDkuIrpg6jjgafjgb7jgajjgoHjgaZpbXBvcnTjgZfjgZ/mlrnjgYzjgYTjgYTjgajmgJ3jgYZcblxuLy8g5L2/44GGXG5jb25zb2xlLmxvZyh1dGlsLnplcm9QYWRkaW5nKDEyMywgNSkpOyAvLy0+IFwiMDAxMjNcIlxuY29uc29sZS5sb2codXRpbC56ZXJvUGFkZGluZygn77yR77yS77yTJywgMTAsICfvvJAnKSk7IC8vLT4gXCLvvJDvvJDvvJDvvJDvvJDvvJDvvJDvvJHvvJLvvJNcIlxuY29uc29sZS5sb2codXRpbC5jcmVhdGVSYW5kb20oMSwgMTApKTsgLy8tPiAx44CcMTDjga7jg6njg7Pjg4Djg6Djga7mlbDlgKRcbiIsIi8qKlxuICogVXRpbOmWouaVsFxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgLyoqXG4gICAgICog44K844Ot6Kmw44KBXG4gICAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB0YXJnZXQg5a++6LGhXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRpZ2l0IOOCvOODreipsOOCgeOBmeOCi+ahgeaVsFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJaZXJvIOWfi+OCgeOCi+aWh+Wtl+OAgeODh+ODleOCqeODq+ODiOOBrycw77yI5Y2K6KeS5pWw5a2X44Gu44K844Ot77yJJ1xuICAgICAqIEByZXR1cm4ge3N0cmluZ30g44K844Ot6Kmw44KB44GX44Gf5paH5a2X5YiXXG4gICAgICovXG4gICAgemVyb1BhZGRpbmc6ICh0YXJnZXQ6IG51bWJlcnxzdHJpbmcsIGRpZ2l0OiBudW1iZXIsIHN0clplcm86IHN0cmluZyA9ICcwJyk6IHN0cmluZyA9PiB7XG4gICAgICAgIGNvbnN0IHplcm86IHN0cmluZyA9ICgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdG1wOiBzdHJpbmcgPSAnJztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlnaXQ7IGkrKykge1xuICAgICAgICAgICAgICAgIHRtcCArPSBzdHJaZXJvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRtcDtcbiAgICAgICAgfSkoKTtcbiAgICAgICAgcmV0dXJuICh6ZXJvICsgdGFyZ2V0LnRvU3RyaW5nKCkpLnNsaWNlKC1kaWdpdCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOODqeODs+ODgOODoOOBruWApOOCkueUn+aIkFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW4g5pyA5bCP5YCkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heCDmnIDlpKflgKRcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IOacgOWwj+WApOOBi+OCieacgOWkp+WApOOBvuOBp+mWk+OBruODqeODs+ODgOODoOOBruaVsOWApFxuICAgICAqL1xuICAgIGNyZWF0ZVJhbmRvbTogKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciA9PiB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4ICsgMSAtIG1pbikpICsgbWluO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9