webpackJsonp([4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

/**
 * Created by zhangcheng on 17/4/11.
 */
(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _App = __webpack_require__(33);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
    path: '/',
    component: _App2.default,
    children: [{
        path: '',
        component: function component(r) {
            return __webpack_require__.e/* require.ensure */(0).then((function () {
                return r(__webpack_require__(39));
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
        }
    }, {
        path: '/item',
        component: function component(r) {
            return __webpack_require__.e/* require.ensure */(2).then((function () {
                return r(__webpack_require__(40));
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
        }
    }, {
        path: '/score',
        component: function component(r) {
            return __webpack_require__.e/* require.ensure */(1).then((function () {
                return r(__webpack_require__(41));
            }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
        }
    }]
}];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(2);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(13);

var _vuex2 = _interopRequireDefault(_vuex);

var _mutations = __webpack_require__(18);

var _mutations2 = _interopRequireDefault(_mutations);

var _action = __webpack_require__(17);

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

var state = {
    level: '第一周',
    itemNum: 1,
    allTime: 0,
    timer: '',
    itemDetail: [{
        "topic_id": 20,
        "active_topic_id": 4,
        "type": "ONE",
        "topic_name": "题目一",
        "active_id": 1,
        "active_title": "欢乐星期五标题",
        "active_topic_phase": "第一周",
        "active_start_time": "1479139200",
        "active_end_time": "1482163200",
        "topic_answer": [{
            "topic_answer_id": 66,
            "topic_id": 20,
            "answer_name": "答案aaaa",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 67,
            "topic_id": 20,
            "answer_name": "答案bbbb",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 68,
            "topic_id": 20,
            "answer_name": "答案cccc",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 69,
            "topic_id": 20,
            "answer_name": "答案dddd",
            "is_standard_answer": 1
        }]
    }, {
        "topic_id": 21,
        "active_topic_id": 4,
        "type": "MORE",
        "topic_name": "题目二",
        "active_id": 1,
        "active_title": "欢乐星期五标题",
        "active_topic_phase": "第一周",
        "active_start_time": "1479139200",
        "active_end_time": "1482163200",
        "topic_answer": [{
            "topic_answer_id": 70,
            "topic_id": 21,
            "answer_name": "答案A",
            "is_standard_answer": 1
        }, {
            "topic_answer_id": 71,
            "topic_id": 21,
            "answer_name": "答案B",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 72,
            "topic_id": 21,
            "answer_name": "答案C",
            "is_standard_answer": 0
        }, {
            "topic_answer_id": 73,
            "topic_id": 21,
            "answer_name": "答案D",
            "is_standard_answer": 0
        }]
    }],
    answerid: {}
};

exports.default = new _vuex2.default.Store({
    state: state,
    actions: _action2.default,
    mutations: _mutations2.default
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * Created by zhangcheng on 17/4/11.
 */
/* harmony default export */ __webpack_exports__["default"] = ((type='GET', url='', data={}, async=true) => {
    return new Promise((resolve, reject) => { //定义一个promise
        type = type.toUpperCase();

        let requestObj;
        if (window.XMLHttpRequest) {
            requestObj = new XMLHttpRequest();
        } else {
            requestObj = new ActiveXObject;
        }

        if (type == 'GET') {
            let dataStr = ''; //数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&';
            })
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
            requestObj.open(type, url, async);
            requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            requestObj.send();
        }else if (type == 'POST') {
            requestObj.open(type, url, async);
            requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            requestObj.send(JSON.stringify(data));
        }else {
            reject('error type');
        }

        requestObj.onreadystatechange = () => {
            if (requestObj.readyState == 4) {
                if (requestObj.status == 200) {
                    let obj = requestObj.response
                    if (typeof obj !== 'object') {
                        obj = JSON.parse(obj);
                    }
                    resolve(obj);
                }else {
                    reject(requestObj);
                }
            }
        }
    })
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(2);

var _vue2 = _interopRequireDefault(_vue);

var _router = __webpack_require__(8);

var _router2 = _interopRequireDefault(_router);

var _vueRouter = __webpack_require__(11);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _store = __webpack_require__(9);

var _store2 = _interopRequireDefault(_store);

__webpack_require__(10);

__webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

var router = new _vueRouter2.default({
  routes: _router2.default
});

new _vue2.default({
  router: router,
  store: _store2.default
}).$mount('#app');

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ajax = __webpack_require__(14);

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    addNum: function addNum(_ref, id) {
        var commit = _ref.commit,
            state = _ref.state;

        commit('REMBER_ANSWER', { id: id });
        if (state.itemNum < state.itemDetail.length) {
            commit('ADD_ITEMNUM', {
                num: 1
            });
        }
    },
    getData: function getData(_ref2) {
        var commit = _ref2.commit,
            state = _ref2.state;

        (0, _ajax2.default)('GET', 'http://operating-activities.putao.com/happyfriday?active_topic_id=4').then(function (res) {
            commit('GET_DATA', {
                res: res
            });
        });
    },
    initializeData: function initializeData(_ref3) {
        var commit = _ref3.commit;

        commit('INITIALIZE_DATA');
    }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(20);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _GET_DATA$GET_USER_IN;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GET_DATA = 'GET_DATA';
var ADD_ITEMNUM = 'ADD_ITEMNUM';
var REMBER_ANSWER = 'REMBER_ANSWER';
var REMBER_TIME = 'REMBER_TIME';
var INITIALIZE_DATA = 'INITIALIZE_DATA';
var GET_USER_INFORM = 'GET_USER_INFORM';

exports.default = (_GET_DATA$GET_USER_IN = {}, (0, _defineProperty3.default)(_GET_DATA$GET_USER_IN, GET_DATA, function (state, payload) {
    if (payload.res.httpStatusCode == 200) {
        state.itemDetail = payload.res.topiclist;
    }
}), (0, _defineProperty3.default)(_GET_DATA$GET_USER_IN, GET_USER_INFORM, function (state, payload) {
    state.user_id = payload.res.users_id;
}), (0, _defineProperty3.default)(_GET_DATA$GET_USER_IN, ADD_ITEMNUM, function (state, payload) {
    state.itemNum += payload.num;
}), (0, _defineProperty3.default)(_GET_DATA$GET_USER_IN, REMBER_ANSWER, function (state, payload) {
    state.answerid[state.itemNum] = payload.id;
}), (0, _defineProperty3.default)(_GET_DATA$GET_USER_IN, REMBER_TIME, function (state) {
    state.timer = setInterval(function () {
        state.allTime++;
    }, 1000);
}), (0, _defineProperty3.default)(_GET_DATA$GET_USER_IN, INITIALIZE_DATA, function (state) {
    state.itemNum = 1;
    state.allTime = 0;
}), _GET_DATA$GET_USER_IN);

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(32)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(34),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('router-view')], 1)
},staticRenderFns: []}

/***/ })
],[16]);
//# sourceMappingURL=app.8bda8c696ef8ad1d5c70.js.map