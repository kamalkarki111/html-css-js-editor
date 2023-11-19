'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function useConsole(_ref) {
  let {
    iframeRef
  } = _ref;
  const [logs, setLogs] = React.useState([{
    type: 'log',
    msg: 'welcome to console'
  }]);
  React.useEffect(() => {
    var _iframeRef$current;
    const node = iframeRef === null || iframeRef === void 0 || (_iframeRef$current = iframeRef.current) === null || _iframeRef$current === void 0 ? void 0 : _iframeRef$current.contentWindow;
    if (node) {
      node.console = {
        log: msg => {
          setLogs(val => {
            val && val.push({
              type: 'log',
              msg
            });
            return [...val];
          });
        },
        error: msg => {
          setLogs(val => {
            val && val.push({
              type: 'error',
              msg
            });
            return [...val];
          });
        },
        warn: msg => {
          setLogs(val => {
            val && val.push({
              type: 'warn',
              msg
            });
            return [...val];
          });
        }
      };
      node.onerror = msg => {
        setLogs(val => {
          val && val.push({
            type: 'error',
            msg
          });
          return [...val];
        });
      };
    }
    return () => {};
  }, [iframeRef, setLogs]);
  return {
    logs
  };
}

function Console(_ref) {
  let {
    IframeRef,
    editorProps
  } = _ref;
  const {
    logs
  } = useConsole({
    iframeRef: IframeRef
  });
  return /*#__PURE__*/React__default["default"].createElement("div", {
    ...editorProps
  }, logs === null || logs === void 0 ? void 0 : logs.map((log, index) => /*#__PURE__*/React__default["default"].createElement("p", {
    key: index,
    style: {
      color: log.type === 'error' ? '	#cc3300' : log.type === 'warn' ? '#ffcc00' : 'green'
    }
  }, log.type + ' : ' + log.msg)));
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function compose$1() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
}
function curry$1(fn) {
  return function curried() {
    var _this = this;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return args.length >= fn.length ? fn.apply(this, args) : function () {
      for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nextArgs[_key3] = arguments[_key3];
      }
      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}
function isObject$1(value) {
  return {}.toString.call(value).includes('Object');
}
function isEmpty(obj) {
  return !Object.keys(obj).length;
}
function isFunction(value) {
  return typeof value === 'function';
}
function hasOwnProperty(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}
function validateChanges(initial, changes) {
  if (!isObject$1(changes)) errorHandler$1('changeType');
  if (Object.keys(changes).some(function (field) {
    return !hasOwnProperty(initial, field);
  })) errorHandler$1('changeField');
  return changes;
}
function validateSelector(selector) {
  if (!isFunction(selector)) errorHandler$1('selectorType');
}
function validateHandler(handler) {
  if (!(isFunction(handler) || isObject$1(handler))) errorHandler$1('handlerType');
  if (isObject$1(handler) && Object.values(handler).some(function (_handler) {
    return !isFunction(_handler);
  })) errorHandler$1('handlersType');
}
function validateInitial(initial) {
  if (!initial) errorHandler$1('initialIsRequired');
  if (!isObject$1(initial)) errorHandler$1('initialType');
  if (isEmpty(initial)) errorHandler$1('initialContent');
}
function throwError$1(errorMessages, type) {
  throw new Error(errorMessages[type] || errorMessages["default"]);
}
var errorMessages$1 = {
  initialIsRequired: 'initial state is required',
  initialType: 'initial state should be an object',
  initialContent: 'initial state shouldn\'t be an empty object',
  handlerType: 'handler should be an object or a function',
  handlersType: 'all handlers should be a functions',
  selectorType: 'selector should be a function',
  changeType: 'provided value of changes should be an object',
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  "default": 'an unknown error accured in `state-local` package'
};
var errorHandler$1 = curry$1(throwError$1)(errorMessages$1);
var validators$1 = {
  changes: validateChanges,
  selector: validateSelector,
  handler: validateHandler,
  initial: validateInitial
};
function create(initial) {
  var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  validators$1.initial(initial);
  validators$1.handler(handler);
  var state = {
    current: initial
  };
  var didUpdate = curry$1(didStateUpdate)(state, handler);
  var update = curry$1(updateState)(state);
  var validate = curry$1(validators$1.changes)(initial);
  var getChanges = curry$1(extractChanges)(state);
  function getState() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (state) {
      return state;
    };
    validators$1.selector(selector);
    return selector(state.current);
  }
  function setState(causedChanges) {
    compose$1(didUpdate, update, validate, getChanges)(causedChanges);
  }
  return [getState, setState];
}
function extractChanges(state, causedChanges) {
  return isFunction(causedChanges) ? causedChanges(state.current) : causedChanges;
}
function updateState(state, changes) {
  state.current = _objectSpread2(_objectSpread2({}, state.current), changes);
  return changes;
}
function didStateUpdate(state, handler, changes) {
  isFunction(handler) ? handler(state.current) : Object.keys(changes).forEach(function (field) {
    var _handler$field;
    return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state.current[field]);
  });
  return changes;
}
var index = {
  create: create
};

var config$1 = {
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs'
  }
};

function curry(fn) {
  return function curried() {
    var _this = this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return args.length >= fn.length ? fn.apply(this, args) : function () {
      for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nextArgs[_key2] = arguments[_key2];
      }
      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}

function isObject(value) {
  return {}.toString.call(value).includes('Object');
}

/**
 * validates the configuration object and informs about deprecation
 * @param {Object} config - the configuration object 
 * @return {Object} config - the validated configuration object
 */

function validateConfig(config) {
  if (!config) errorHandler('configIsRequired');
  if (!isObject(config)) errorHandler('configType');
  if (config.urls) {
    informAboutDeprecation();
    return {
      paths: {
        vs: config.urls.monacoBase
      }
    };
  }
  return config;
}
/**
 * logs deprecation message
 */

function informAboutDeprecation() {
  console.warn(errorMessages.deprecation);
}
function throwError(errorMessages, type) {
  throw new Error(errorMessages[type] || errorMessages["default"]);
}
var errorMessages = {
  configIsRequired: 'the configuration object is required',
  configType: 'the configuration object should be an object',
  "default": 'an unknown error accured in `@monaco-editor/loader` package',
  deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
};
var errorHandler = curry(throwError)(errorMessages);
var validators = {
  config: validateConfig
};

var compose = function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
};

function merge(target, source) {
  Object.keys(source).forEach(function (key) {
    if (source[key] instanceof Object) {
      if (target[key]) {
        Object.assign(source[key], merge(target[key], source[key]));
      }
    }
  });
  return _objectSpread2$1(_objectSpread2$1({}, target), source);
}

// The source (has been changed) is https://github.com/facebook/react/issues/5465#issuecomment-157888325
var CANCELATION_MESSAGE = {
  type: 'cancelation',
  msg: 'operation is manually canceled'
};
function makeCancelable(promise) {
  var hasCanceled_ = false;
  var wrappedPromise = new Promise(function (resolve, reject) {
    promise.then(function (val) {
      return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
    });
    promise["catch"](reject);
  });
  return wrappedPromise.cancel = function () {
    return hasCanceled_ = true;
  }, wrappedPromise;
}

/** the local state of the module */

var _state$create = index.create({
    config: config$1,
    isInitialized: false,
    resolve: null,
    reject: null,
    monaco: null
  }),
  _state$create2 = _slicedToArray(_state$create, 2),
  getState = _state$create2[0],
  setState = _state$create2[1];
/**
 * set the loader configuration
 * @param {Object} config - the configuration object
 */

function config(globalConfig) {
  var _validators$config = validators.config(globalConfig),
    monaco = _validators$config.monaco,
    config = _objectWithoutProperties(_validators$config, ["monaco"]);
  setState(function (state) {
    return {
      config: merge(state.config, config),
      monaco: monaco
    };
  });
}
/**
 * handles the initialization of the monaco-editor
 * @return {Promise} - returns an instance of monaco (with a cancelable promise)
 */

function init() {
  var state = getState(function (_ref) {
    var monaco = _ref.monaco,
      isInitialized = _ref.isInitialized,
      resolve = _ref.resolve;
    return {
      monaco: monaco,
      isInitialized: isInitialized,
      resolve: resolve
    };
  });
  if (!state.isInitialized) {
    setState({
      isInitialized: true
    });
    if (state.monaco) {
      state.resolve(state.monaco);
      return makeCancelable(wrapperPromise);
    }
    if (window.monaco && window.monaco.editor) {
      storeMonacoInstance(window.monaco);
      state.resolve(window.monaco);
      return makeCancelable(wrapperPromise);
    }
    compose(injectScripts, getMonacoLoaderScript)(configureLoader);
  }
  return makeCancelable(wrapperPromise);
}
/**
 * injects provided scripts into the document.body
 * @param {Object} script - an HTML script element
 * @return {Object} - the injected HTML script element
 */

function injectScripts(script) {
  return document.body.appendChild(script);
}
/**
 * creates an HTML script element with/without provided src
 * @param {string} [src] - the source path of the script
 * @return {Object} - the created HTML script element
 */

function createScript(src) {
  var script = document.createElement('script');
  return src && (script.src = src), script;
}
/**
 * creates an HTML script element with the monaco loader src
 * @return {Object} - the created HTML script element
 */

function getMonacoLoaderScript(configureLoader) {
  var state = getState(function (_ref2) {
    var config = _ref2.config,
      reject = _ref2.reject;
    return {
      config: config,
      reject: reject
    };
  });
  var loaderScript = createScript("".concat(state.config.paths.vs, "/loader.js"));
  loaderScript.onload = function () {
    return configureLoader();
  };
  loaderScript.onerror = state.reject;
  return loaderScript;
}
/**
 * configures the monaco loader
 */

function configureLoader() {
  var state = getState(function (_ref3) {
    var config = _ref3.config,
      resolve = _ref3.resolve,
      reject = _ref3.reject;
    return {
      config: config,
      resolve: resolve,
      reject: reject
    };
  });
  var require = window.require;
  require.config(state.config);
  require(['vs/editor/editor.main'], function (monaco) {
    storeMonacoInstance(monaco);
    state.resolve(monaco);
  }, function (error) {
    state.reject(error);
  });
}
/**
 * store monaco instance in local state
 */

function storeMonacoInstance(monaco) {
  if (!getState().monaco) {
    setState({
      monaco: monaco
    });
  }
}
/**
 * internal helper function
 * extracts stored monaco instance
 * @return {Object|null} - the monaco instance
 */

function __getMonacoInstance() {
  return getState(function (_ref4) {
    var monaco = _ref4.monaco;
    return monaco;
  });
}
var wrapperPromise = new Promise(function (resolve, reject) {
  return setState({
    resolve: resolve,
    reject: reject
  });
});
var loader = {
  config: config,
  init: init,
  __getMonacoInstance: __getMonacoInstance
};

var le={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},v=le;var ae={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Y=ae;function Me({children:e}){return React__default["default"].createElement("div",{style:Y.container},e)}var Z=Me;var $=Z;function Ee({width:e,height:r,isEditorReady:n,loading:t,_ref:a,className:m,wrapperProps:E}){return React__default["default"].createElement("section",{style:{...v.wrapper,width:e,height:r},...E},!n&&React__default["default"].createElement($,null,t),React__default["default"].createElement("div",{ref:a,style:{...v.fullWidth,...!n&&v.hide},className:m}))}var ee=Ee;var H=React.memo(ee);function Ce(e){React.useEffect(e,[]);}var k=Ce;function he(e,r,n=!0){let t=React.useRef(!0);React.useEffect(t.current||!n?()=>{t.current=!1;}:e,r);}var l=he;function D(){}function h(e,r,n,t){return De(e,t)||be(e,r,n,t)}function De(e,r){return e.editor.getModel(te(e,r))}function be(e,r,n,t){return e.editor.createModel(r,n,t?te(e,t):void 0)}function te(e,r){return e.Uri.parse(r)}function Oe({original:e,modified:r,language:n,originalLanguage:t,modifiedLanguage:a,originalModelPath:m,modifiedModelPath:E,keepCurrentOriginalModel:g=!1,keepCurrentModifiedModel:N=!1,theme:x="light",loading:P="Loading...",options:y={},height:V="100%",width:z="100%",className:F,wrapperProps:j={},beforeMount:A=D,onMount:q=D}){let[M,O]=React.useState(!1),[T,s]=React.useState(!0),u=React.useRef(null),c=React.useRef(null),w=React.useRef(null),d=React.useRef(q),o=React.useRef(A),b=React.useRef(!1);k(()=>{let i=loader.init();return i.then(f=>(c.current=f)&&s(!1)).catch(f=>f?.type!=="cancelation"&&console.error("Monaco initialization: error:",f)),()=>u.current?I():i.cancel()}),l(()=>{if(u.current&&c.current){let i=u.current.getOriginalEditor(),f=h(c.current,e||"",t||n||"text",m||"");f!==i.getModel()&&i.setModel(f);}},[m],M),l(()=>{if(u.current&&c.current){let i=u.current.getModifiedEditor(),f=h(c.current,r||"",a||n||"text",E||"");f!==i.getModel()&&i.setModel(f);}},[E],M),l(()=>{let i=u.current.getModifiedEditor();i.getOption(c.current.editor.EditorOption.readOnly)?i.setValue(r||""):r!==i.getValue()&&(i.executeEdits("",[{range:i.getModel().getFullModelRange(),text:r||"",forceMoveMarkers:!0}]),i.pushUndoStop());},[r],M),l(()=>{u.current?.getModel()?.original.setValue(e||"");},[e],M),l(()=>{let{original:i,modified:f}=u.current.getModel();c.current.editor.setModelLanguage(i,t||n||"text"),c.current.editor.setModelLanguage(f,a||n||"text");},[n,t,a],M),l(()=>{c.current?.editor.setTheme(x);},[x],M),l(()=>{u.current?.updateOptions(y);},[y],M);let L=React.useCallback(()=>{if(!c.current)return;o.current(c.current);let i=h(c.current,e||"",t||n||"text",m||""),f=h(c.current,r||"",a||n||"text",E||"");u.current?.setModel({original:i,modified:f});},[n,r,a,e,t,m,E]),U=React.useCallback(()=>{!b.current&&w.current&&(u.current=c.current.editor.createDiffEditor(w.current,{automaticLayout:!0,...y}),L(),c.current?.editor.setTheme(x),O(!0),b.current=!0);},[y,x,L]);React.useEffect(()=>{M&&d.current(u.current,c.current);},[M]),React.useEffect(()=>{!T&&!M&&U();},[T,M,U]);function I(){let i=u.current?.getModel();g||i?.original?.dispose(),N||i?.modified?.dispose(),u.current?.dispose();}return React__default["default"].createElement(H,{width:z,height:V,isEditorReady:M,loading:P,_ref:w,className:F,wrapperProps:j})}var ie=Oe;React.memo(ie);function He(e){let r=React.useRef();return React.useEffect(()=>{r.current=e;},[e]),r.current}var se=He;var _=new Map;function Ve({defaultValue:e,defaultLanguage:r,defaultPath:n,value:t,language:a,path:m,theme:E="light",line:g,loading:N="Loading...",options:x={},overrideServices:P={},saveViewState:y=!0,keepCurrentModel:V=!1,width:z="100%",height:F="100%",className:j,wrapperProps:A={},beforeMount:q=D,onMount:M=D,onChange:O,onValidate:T=D}){let[s,u]=React.useState(!1),[c,w]=React.useState(!0),d=React.useRef(null),o=React.useRef(null),b=React.useRef(null),L=React.useRef(M),U=React.useRef(q),I=React.useRef(),i=React.useRef(t),f=se(m),Q=React.useRef(!1),B=React.useRef(!1);k(()=>{let p=loader.init();return p.then(R=>(d.current=R)&&w(!1)).catch(R=>R?.type!=="cancelation"&&console.error("Monaco initialization: error:",R)),()=>o.current?pe():p.cancel()}),l(()=>{let p=h(d.current,e||t||"",r||a||"",m||n||"");p!==o.current?.getModel()&&(y&&_.set(f,o.current?.saveViewState()),o.current?.setModel(p),y&&o.current?.restoreViewState(_.get(m)));},[m],s),l(()=>{o.current?.updateOptions(x);},[x],s),l(()=>{!o.current||t===void 0||(o.current.getOption(d.current.editor.EditorOption.readOnly)?o.current.setValue(t):t!==o.current.getValue()&&(B.current=!0,o.current.executeEdits("",[{range:o.current.getModel().getFullModelRange(),text:t,forceMoveMarkers:!0}]),o.current.pushUndoStop(),B.current=!1));},[t],s),l(()=>{let p=o.current?.getModel();p&&a&&d.current?.editor.setModelLanguage(p,a);},[a],s),l(()=>{g!==void 0&&o.current?.revealLine(g);},[g],s),l(()=>{d.current?.editor.setTheme(E);},[E],s);let X=React.useCallback(()=>{if(!(!b.current||!d.current)&&!Q.current){U.current(d.current);let p=m||n,R=h(d.current,t||e||"",r||a||"",p||"");o.current=d.current?.editor.create(b.current,{model:R,automaticLayout:!0,...x},P),y&&o.current.restoreViewState(_.get(p)),d.current.editor.setTheme(E),g!==void 0&&o.current.revealLine(g),u(!0),Q.current=!0;}},[e,r,n,t,a,m,x,P,y,E,g]);React.useEffect(()=>{s&&L.current(o.current,d.current);},[s]),React.useEffect(()=>{!c&&!s&&X();},[c,s,X]),i.current=t,React.useEffect(()=>{s&&O&&(I.current?.dispose(),I.current=o.current?.onDidChangeModelContent(p=>{B.current||O(o.current.getValue(),p);}));},[s,O]),React.useEffect(()=>{if(s){let p=d.current.editor.onDidChangeMarkers(R=>{let G=o.current.getModel()?.uri;if(G&&R.find(J=>J.path===G.path)){let J=d.current.editor.getModelMarkers({resource:G});T?.(J);}});return ()=>{p?.dispose();}}return ()=>{}},[s,T]);function pe(){I.current?.dispose(),V?y&&_.set(m,o.current.saveViewState()):o.current.getModel()?.dispose(),o.current.dispose();}return React__default["default"].createElement(H,{width:z,height:F,isEditorReady:s,loading:N,_ref:b,className:j,wrapperProps:A})}var fe=Ve;var de=React.memo(fe);

function useCSSEditor(_ref) {
  let {
    value,
    iframeRef
  } = _ref;
  const cssElement = React.useMemo(() => {
    return document.createElement('style');
  }, []);
  React.useEffect(() => {
    var _iframeRef$current;
    const node = (_iframeRef$current = iframeRef.current) === null || _iframeRef$current === void 0 || (_iframeRef$current = _iframeRef$current.contentDocument) === null || _iframeRef$current === void 0 ? void 0 : _iframeRef$current.head;
    if (node) {
      node === null || node === void 0 || node.appendChild(cssElement);
    }
    return () => {
      if (node) {
        try {
          node === null || node === void 0 || node.removeChild(cssElement);
        } catch (e) {
          console.log(e);
        }
      }
    };
  }, []);
  React.useEffect(() => {
    if (cssElement) {
      try {
        cssElement.innerHTML = value;
      } catch (e) {
        console.log(e);
      }
    }
    return () => {};
  }, [value, iframeRef, cssElement]);
}

function CSSEditor(_ref) {
  let {
    IframeRef,
    editorProps
  } = _ref;
  const [code, setCode] = React.useState();
  useCSSEditor({
    value: code,
    iframeRef: IframeRef
  });
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(de, {
    ...editorProps,
    language: "css",
    theme: "vs-dark",
    value: code,
    onChange: (val, e) => {
      setCode(val);
    }
  }));
}

function useHTMLEditor(_ref) {
  let {
    value,
    iframeRef
  } = _ref;
  React.useEffect(() => {
    var _iframeRef$current;
    const node = iframeRef === null || iframeRef === void 0 || (_iframeRef$current = iframeRef.current) === null || _iframeRef$current === void 0 || (_iframeRef$current = _iframeRef$current.contentDocument) === null || _iframeRef$current === void 0 ? void 0 : _iframeRef$current.body;
    if (value && node) {
      node.innerHTML = value;
    }
    return () => {};
  }, [value, iframeRef]);
  return {};
}

function HTMLEditor(_ref) {
  let {
    IframeRef,
    editorProps
  } = _ref;
  const [code, setCode] = React.useState();
  useHTMLEditor({
    value: code,
    iframeRef: IframeRef
  });
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(de, {
    ...editorProps,
    language: "html",
    theme: "vs-dark",
    value: code,
    onChange: (val, e) => {
      setCode(val);
    }
  }));
}

function useJSEditor(_ref) {
  let {
    value,
    iframeRef
  } = _ref;
  React.useEffect(() => {
    var _iframeRef$current;
    const node = (_iframeRef$current = iframeRef.current) === null || _iframeRef$current === void 0 || (_iframeRef$current = _iframeRef$current.contentDocument) === null || _iframeRef$current === void 0 ? void 0 : _iframeRef$current.head;
    if (node) {
      var scriptElement = document.createElement('script');
      node === null || node === void 0 || node.appendChild(scriptElement);
      try {
        setTimeout(() => scriptElement.innerHTML = value || '');
      } catch (e) {
        console.log(e);
      }
    }
    return () => {
      if (node) {
        try {
          node === null || node === void 0 || node.removeChild(scriptElement);
          scriptElement.innerHTML = '';
        } catch (e) {
          console.log(e);
        }
      }
    };
  }, [value, iframeRef]);
}

function JSEditor(_ref) {
  let {
    IframeRef,
    editorProps
  } = _ref;
  const [code, setCode] = React.useState();
  useJSEditor({
    value: code,
    iframeRef: IframeRef
  });
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(de, {
    ...editorProps,
    language: "javascript",
    theme: "vs-dark",
    value: code,
    onChange: (val, e) => {
      setCode(val);
    }
  }));
}

function useEditor(_ref) {
  var _config$html, _config$css, _config$js;
  let {
    config
  } = _ref;
  const hostRef = React.useRef();
  const id = React.useId();
  useHTMLEditor({
    value: (_config$html = config.html) === null || _config$html === void 0 ? void 0 : _config$html.snippit,
    iframeRef: hostRef
  });
  useCSSEditor({
    value: (_config$css = config.css) === null || _config$css === void 0 ? void 0 : _config$css.snippit,
    iframeRef: hostRef
  });
  useJSEditor({
    value: (_config$js = config.js) === null || _config$js === void 0 ? void 0 : _config$js.snippit,
    iframeRef: hostRef
  });
  React.useEffect(() => {
    const iframe = document.createElement('iframe');
    const rootElement = document.getElementById(id);
    hostRef.current = rootElement === null || rootElement === void 0 ? void 0 : rootElement.appendChild(iframe);
    return () => {
      rootElement === null || rootElement === void 0 || rootElement.removeChild(iframe);
    };
  }, []);
  return {
    elementProps: {
      id
    },
    hostRef
  };
}

exports.CSSEditor = CSSEditor;
exports.Console = Console;
exports.HTMLEditor = HTMLEditor;
exports.JSEditor = JSEditor;
exports.useCSSEditor = useCSSEditor;
exports.useConsole = useConsole;
exports.useEditor = useEditor;
exports.useHTMLEditor = useHTMLEditor;
exports.useJSEditor = useJSEditor;
//# sourceMappingURL=bundle.cjs.js.map
