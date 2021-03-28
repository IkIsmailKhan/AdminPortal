/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([159,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(14);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(78);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/universal-cookie/es6/index.js + 2 modules
var es6 = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js + 1 modules
var createStyles = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/DashboardTwoTone.js
var DashboardTwoTone = __webpack_require__(310);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/ComputerTwoTone.js
var ComputerTwoTone = __webpack_require__(309);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/PeopleTwoTone.js
var PeopleTwoTone = __webpack_require__(308);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/LocalActivityTwoTone.js
var LocalActivityTwoTone = __webpack_require__(307);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js
var CircularProgress = __webpack_require__(80);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(107);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(106);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardMedia/CardMedia.js
var CardMedia = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/CheckCircle.js
var CheckCircle = __webpack_require__(317);
var CheckCircle_default = /*#__PURE__*/__webpack_require__.n(CheckCircle);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Error.js
var Error = __webpack_require__(315);
var Error_default = /*#__PURE__*/__webpack_require__.n(Error);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Info.js
var Info = __webpack_require__(314);
var Info_default = /*#__PURE__*/__webpack_require__.n(Info);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Close.js
var Close = __webpack_require__(311);
var Close_default = /*#__PURE__*/__webpack_require__.n(Close);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/colors/green.js
var green = __webpack_require__(313);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/colors/amber.js
var amber = __webpack_require__(312);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Snackbar/Snackbar.js + 1 modules
var Snackbar = __webpack_require__(300);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/SnackbarContent/SnackbarContent.js
var SnackbarContent = __webpack_require__(155);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Warning.js
var Warning = __webpack_require__(316);
var Warning_default = /*#__PURE__*/__webpack_require__.n(Warning);

// CONCATENATED MODULE: ./src/utils/ErrorBoundary.tsx

class ErrorBoundary_ErrorBoundary extends react["Component"] {
    constructor() {
        super(...arguments);
        this.state = { error: '', errorInfo: null };
    }
    /* tslint:disable-next-line */
    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }
    /* tslint:disable-next-line */
    render() {
        if (this.state.errorInfo) {
            // Error path
            return (react["createElement"]("div", null,
                react["createElement"]("h2", null, "Something went wrong."),
                react["createElement"]("details", { style: { whiteSpace: 'pre-wrap' } },
                    this.state.error && this.state.error.toString(),
                    react["createElement"]("br", null),
                    this.state.errorInfo.componentStack)));
        }
        // Normally, just render children
        return this.props.children;
    }
}

// CONCATENATED MODULE: ./src/components/Toast/Toast.tsx
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};













const variantIcon = {
    success: CheckCircle_default.a,
    warning: Warning_default.a,
    error: Error_default.a,
    info: Info_default.a,
};
const useStyles1 = Object(makeStyles["a" /* default */])((theme) => ({
    success: {
        backgroundColor: green["a" /* default */][600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    warning: {
        backgroundColor: amber["a" /* default */][700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));
/**
 * MySnackbarContentWrapper
 * @param props
 */
const MySnackbarContentWrapper = (props) => {
    const classes = useStyles1();
    const { className, message, onClose, variant } = props, other = __rest(props, ["className", "message", "onClose", "variant"]);
    const Icon = variantIcon[variant];
    return (react_default.a.createElement(SnackbarContent["a" /* default */], Object.assign({ className: Object(clsx_m["a" /* default */])(classes[variant], className), "aria-describedby": 'client-snackbar', message: react_default.a.createElement("span", { id: 'client-snackbar', className: classes.message },
            react_default.a.createElement(Icon, { className: Object(clsx_m["a" /* default */])(classes.icon, classes.iconVariant) }),
            message), action: [
            react_default.a.createElement(IconButton["a" /* default */], { key: 'close', "aria-label": 'close', color: 'inherit', onClick: onClose },
                react_default.a.createElement(Close_default.a, { className: classes.icon })),
        ] }, other)));
};
const useStyles2 = Object(makeStyles["a" /* default */])((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));
const CustomizedSnackbars = (props) => {
    const classes = useStyles2();
    return (react_default.a.createElement(ErrorBoundary_ErrorBoundary, null,
        react_default.a.createElement(Snackbar["a" /* default */], { anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right',
            }, open: props.open, autoHideDuration: 3000, onClose: props.handleToastClose },
            react_default.a.createElement(MySnackbarContentWrapper, { open: props.open, onClose: props.handleToastClose, variant: props.variant, className: classes.margin, message: props.message }))));
};
/* harmony default export */ var Toast = (CustomizedSnackbars);

// EXTERNAL MODULE: ./node_modules/@simplus/robin/build/index.js
var build = __webpack_require__(77);

// CONCATENATED MODULE: ./src/robins/index.tsx

const VIDA_PRO_SERVER_URL = (window.FOURA || { VIDA_PRO_SERVER_URL: '' }).VIDA_PRO_SERVER_URL || '/';
const robins = {
    SimplusAuthRobin: new build["CollectionRobin"]({
        baseUrl: `${VIDA_PRO_SERVER_URL}/vida-pro/api/v1`
    }),
};

// CONCATENATED MODULE: ./src/views/Dashboard/Dashboard.tsx





const { SimplusAuthRobin } = robins;
const useStyles = Object(makeStyles["a" /* default */])((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '20px'
    },
    paperPadding: {
        padding: theme.spacing(3, 2),
    },
    icon: {
        margin: theme.spacing(2),
    },
    progress: {
        margin: theme.spacing(2),
    },
    card: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        width: '250px'
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
}));
const Dashboard = (props) => {
    const classes = useStyles();
    const [loading, setLoading] = react_default.a.useState(false);
    const [KPI, setKPI] = react_default.a.useState({
        'customerCount': '0',
        'userCount': '0',
        'projectCount': '0',
    });
    const [notification, setNotification] = react_default.a.useState({
        toastOpen: false,
        toastVariant: undefined,
        toastMessage: undefined
    });
    const handleToastClose = (_event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotification(Object.assign({}, notification, { toastOpen: false, toastMessage: undefined }));
    };
    const handleToastOpen = (toastVariant, toastMessage) => {
        setNotification(Object.assign({}, notification, { toastOpen: true, toastVariant: toastVariant, toastMessage: toastMessage }));
    };
    const fetchKPI = () => {
        setLoading(true);
        SimplusAuthRobin.when(SimplusAuthRobin.get('KPI', `/dashboard/kpi`)).then(() => {
            setLoading(false);
            const KPI = SimplusAuthRobin.getResult('KPI').data;
            setKPI(Object.assign({}, KPI, { 'customerCount': KPI.customerCount, 'userCount': KPI.userCount, 'projectCount': KPI.projectCount }));
        }).catch(err => {
            setLoading(false);
            handleToastOpen('error', err.response.data.message);
        });
    };
    const goto = (redirectTo) => {
        props.history.push(redirectTo);
    };
    Object(react["useEffect"])(() => {
        fetchKPI();
    }, []);
    return (react_default.a.createElement(ErrorBoundary_ErrorBoundary, null,
        react_default.a.createElement(Toast, { open: notification.toastOpen, variant: notification.toastVariant, message: notification.toastMessage, handleToastClose: handleToastClose }),
        react_default.a.createElement("div", { className: classes.root }, loading ? react_default.a.createElement("div", { style: { display: 'flex', justifyContent: 'center', width: '100%' } },
            react_default.a.createElement(CircularProgress["a" /* default */], { className: classes.progress })) :
            react_default.a.createElement(Grid["a" /* default */], { container: true, direction: 'row', justify: 'space-around', alignItems: 'center', spacing: 4 },
                react_default.a.createElement(Grid["a" /* default */], { item: true },
                    react_default.a.createElement(Card["a" /* default */], { className: classes.card },
                        react_default.a.createElement("div", { className: classes.details },
                            react_default.a.createElement(CardContent["a" /* default */], { className: classes.content },
                                react_default.a.createElement(Typography["a" /* default */], { component: "h2", variant: "h2" }, KPI.customerCount),
                                react_default.a.createElement(Typography["a" /* default */], { variant: "subtitle1", color: "textSecondary" }, "Customers")),
                            react_default.a.createElement("div", { className: classes.controls },
                                react_default.a.createElement(Button["a" /* default */], { size: "small", onClick: () => goto('/admin/dashboard') }, "Learn More"))),
                        react_default.a.createElement(CardMedia["a" /* default */], { className: classes.cover, image: `/src/assets/img/organization-avatar.png`, title: "Organizations" }))),
                react_default.a.createElement(Grid["a" /* default */], { item: true },
                    react_default.a.createElement(Card["a" /* default */], { className: classes.card },
                        react_default.a.createElement("div", { className: classes.details },
                            react_default.a.createElement(CardContent["a" /* default */], { className: classes.content },
                                react_default.a.createElement(Typography["a" /* default */], { component: "h2", variant: "h2" }, KPI.projectCount),
                                react_default.a.createElement(Typography["a" /* default */], { variant: "subtitle1", color: "textSecondary" }, "Projects")),
                            react_default.a.createElement("div", { className: classes.controls },
                                react_default.a.createElement(Button["a" /* default */], { size: "small", onClick: () => goto('/admin/dashboard') }, "Learn More"))),
                        react_default.a.createElement(CardMedia["a" /* default */], { className: classes.cover, image: `/src/assets/img/applications-avatar.png`, title: "Applications" }))),
                react_default.a.createElement(Grid["a" /* default */], { item: true },
                    react_default.a.createElement(Card["a" /* default */], { className: classes.card },
                        react_default.a.createElement("div", { className: classes.details },
                            react_default.a.createElement(CardContent["a" /* default */], { className: classes.content },
                                react_default.a.createElement(Typography["a" /* default */], { component: "h2", variant: "h2" }, KPI.userCount),
                                react_default.a.createElement(Typography["a" /* default */], { variant: "subtitle1", color: "textSecondary" }, "Users")),
                            react_default.a.createElement("div", { className: classes.controls },
                                react_default.a.createElement(Button["a" /* default */], { size: "small", onClick: () => goto('/admin/users') }, "Learn More"))),
                        react_default.a.createElement(CardMedia["a" /* default */], { className: classes.cover, image: `/src/assets/img/users-avatar.png`, title: "Users" })))))));
};
/* harmony default export */ var Dashboard_Dashboard = (Dashboard);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js + 19 modules
var TextField = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemAvatar/ListItemAvatar.js
var ListItemAvatar = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Avatar/Avatar.js
var Avatar = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Link/Link.js
var Link = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemSecondaryAction/ListItemSecondaryAction.js
var ListItemSecondaryAction = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Menu/Menu.js + 2 modules
var Menu = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Divider/Divider.js
var Divider = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/CreateTwoTone.js
var CreateTwoTone = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/CheckCircleTwoTone.js
var CheckCircleTwoTone = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/MoreVertTwoTone.js
var MoreVertTwoTone = __webpack_require__(66);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Dialog/Dialog.js
var Dialog = __webpack_require__(150);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(147);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(146);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContentText/DialogContentText.js
var DialogContentText = __webpack_require__(145);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(144);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(151);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(56);

// CONCATENATED MODULE: ./src/components/Modal/Modal.tsx






const Modal_useStyles = Object(makeStyles["a" /* default */])((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2, 2),
    }
}));
/**
 * Modal Component
 * @param props
 */
function ModalComponent(props) {
    const { open, handleClose, heading, formFields, submit, subHeading } = props;
    const classes = Modal_useStyles();
    const theme = Object(useTheme["a" /* default */])();
    const fullScreen = Object(useMediaQuery["a" /* default */])(theme.breakpoints.down('sm'));
    return (react_default.a.createElement(ErrorBoundary_ErrorBoundary, null,
        react_default.a.createElement(Dialog["a" /* default */], { fullScreen: fullScreen, open: open, onClose: handleClose, "aria-labelledby": 'responsive-dialog-title' },
            react_default.a.createElement(DialogTitle["a" /* default */], { id: 'responsive-dialog-title' }, heading),
            react_default.a.createElement(DialogContent["a" /* default */], null,
                react_default.a.createElement(DialogContentText["a" /* default */], null, subHeading),
                react_default.a.createElement("form", { className: classes.form, autoComplete: 'off' }, formFields)),
            react_default.a.createElement(DialogActions["a" /* default */], null,
                react_default.a.createElement(Button["a" /* default */], { onClick: handleClose, color: 'primary' }, "Cancel"),
                react_default.a.createElement(Button["a" /* default */], { onClick: submit, color: 'primary', autoFocus: true }, "OK")))));
}

// CONCATENATED MODULE: ./src/components/ConfirmModal/ConfirmModal.tsx






/**
 * Confirm Modal Component
 * @param props
 */
function ConfirmModalComponent(props) {
    const { open, handleClose, heading, submit, subHeading } = props;
    const theme = Object(useTheme["a" /* default */])();
    const fullScreen = Object(useMediaQuery["a" /* default */])(theme.breakpoints.down('sm'));
    return (react_default.a.createElement(ErrorBoundary_ErrorBoundary, null,
        react_default.a.createElement(Dialog["a" /* default */], { fullScreen: fullScreen, open: open, onClose: handleClose, "aria-labelledby": 'responsive-dialog-title' },
            react_default.a.createElement(DialogTitle["a" /* default */], { id: 'responsive-dialog-title' }, heading),
            react_default.a.createElement(DialogContent["a" /* default */], null,
                react_default.a.createElement(DialogContentText["a" /* default */], null, subHeading ? subHeading : 'Are you sure you want to delete it?')),
            react_default.a.createElement(DialogActions["a" /* default */], null,
                react_default.a.createElement(Button["a" /* default */], { onClick: handleClose, color: 'primary' }, "Cancel"),
                react_default.a.createElement(Button["a" /* default */], { onClick: submit, color: 'primary', autoFocus: true }, "OK")))));
}

// CONCATENATED MODULE: ./src/views/Users/Users.tsx









const { SimplusAuthRobin: Users_SimplusAuthRobin } = robins;
const Users_useStyles = Object(makeStyles["a" /* default */])((theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2, 2),
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
    iconSmall: {
        fontSize: 20,
    },
    root: {
        width: '100%',
        backgroundColor: '#f5f5f5',
    },
    inline: {
        display: 'inline',
    },
    progress: {
        margin: theme.spacing(2),
    },
}));
const UsersList = (props) => {
    const classes = Users_useStyles();
    const getLoggedInUser = () => {
        return Users_SimplusAuthRobin.getResult('loggedInUserInfo');
    };
    const loggedInUser = getLoggedInUser();
    const [selectUser, setSelectUser] = react_default.a.useState(null);
    const loggedInUserId = loggedInUser ? loggedInUser.data.id : null;
    const [loading, setLoading] = react_default.a.useState(true);
    const [modalOpen, setModalOpen] = react_default.a.useState(false);
    const [notification, setNotification] = react_default.a.useState({
        toastOpen: false,
        toastVariant: undefined,
        toastMessage: undefined
    });
    const [newUser, setNewUser] = react_default.a.useState({
        name: '',
        email: '',
        user_type: 'app_user',
        password: ''
    });
    const [userList, setUserList] = react_default.a.useState({
        users: []
    });
    const handleToastClose = (_event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotification(Object.assign({}, notification, { toastOpen: false, toastMessage: undefined }));
    };
    const handleToastOpen = (toastVariant, toastMessage) => {
        setNotification(Object.assign({}, notification, { toastOpen: true, toastVariant: toastVariant, toastMessage: toastMessage }));
    };
    const handleModalOpen = () => {
        setModalOpen(true);
    };
    const handleModalClose = () => {
        setModalOpen(false);
    };
    const [menuAnchorEl, menuSetAnchorEl] = react_default.a.useState({ item: null, index: null });
    const menuHandleClick = i => event => {
        menuSetAnchorEl(Object.assign({}, menuAnchorEl, { item: event.currentTarget, index: i }));
    };
    const menuHandleClose = () => {
        menuSetAnchorEl(Object.assign({}, menuAnchorEl, { item: null, index: null }));
    };
    const [menuConfirmOpen, menuConfirmSetOpen] = react_default.a.useState(false);
    const menuConfirmHandleClickOpen = (userId) => {
        setSelectUser(userId);
        menuConfirmSetOpen(true);
    };
    const menuConfirmHandleClose = () => {
        setSelectUser(null);
        menuConfirmSetOpen(false);
    };
    const handleCreateAppForm = (prop) => (event) => {
        setNewUser(Object.assign({}, newUser, { [prop]: event.target.value }));
    };
    const deleteUser = (userId) => {
        if (!userId) {
            handleToastOpen('warning', 'User id missing!');
        }
        else {
            Users_SimplusAuthRobin.when(Users_SimplusAuthRobin.delete('deleteUser', `/users/${userId}`)).then(() => {
                handleToastOpen('success', 'User deleted successfully!');
                menuConfirmHandleClose();
                fetchUsers();
            }).catch(err => {
                handleToastOpen('error', err.response.data.message);
            });
        }
    };
    const onSelectDeleteMenu = () => {
        menuHandleClose();
        if (!selectUser) {
            handleToastOpen('warning', 'User id missing!');
        }
        else {
            deleteUser(selectUser);
        }
    };
    const fetchUsers = () => {
        setLoading(true);
        Users_SimplusAuthRobin.when(Users_SimplusAuthRobin.get('userList', `/users`)).then(() => {
            setLoading(false);
            const fetchedUsers = Users_SimplusAuthRobin.getResult('userList').data;
            if (fetchedUsers.length) {
                const userDataMapping = fetchedUsers.map((user) => {
                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        email_verified: user.email_verified,
                        picture_url: user.picture_url,
                        user_type: user.user_type
                    };
                });
                setUserList(Object.assign({}, userList, { users: userDataMapping }));
            }
        }).catch(err => {
            setLoading(false);
            handleToastOpen('error', err.response.data.message);
        });
    };
    const submitNewUser = () => {
        if (!newUser.name || !newUser.email || !newUser.password) {
            handleToastOpen('warning', 'Name, email and password is required!');
        }
        else {
            Users_SimplusAuthRobin.when(Users_SimplusAuthRobin.post('createUser', `/users`, {
                name: newUser.name,
                email: newUser.email,
                password: newUser.password,
                user_type: newUser.user_type
            })).then(() => {
                handleToastOpen('success', 'New user added successfully. You can see details in settings!');
                handleModalClose();
                setNewUser({ name: '', email: '', password: '', user_type: 'app_user' });
                fetchUsers();
            }).catch(err => {
                handleToastOpen('error', err.response.data.message);
            });
        }
    };
    const createUserFields = ([
        react_default.a.createElement(TextField["a" /* default */], { variant: 'filled', margin: 'normal', required: true, fullWidth: true, key: 1, id: 'name', label: 'Full Name', name: 'name', autoComplete: 'User Name', onChange: handleCreateAppForm('name'), autoFocus: true }),
        react_default.a.createElement(TextField["a" /* default */], { variant: 'filled', margin: 'normal', required: true, fullWidth: true, key: 2, type: 'email', id: 'email', label: 'Email', name: 'email', autoComplete: 'email', onChange: handleCreateAppForm('email'), autoFocus: true }),
        react_default.a.createElement(TextField["a" /* default */], { variant: 'filled', margin: 'normal', required: true, fullWidth: true, key: 3, type: 'password', id: 'password', label: 'Password', name: 'password', autoComplete: 'password', onChange: handleCreateAppForm('password'), autoFocus: true }),
        react_default.a.createElement(TextField["a" /* default */], { id: 'usertype', select: true, key: 4, label: 'Select User Type', fullWidth: true, value: newUser.user_type, onChange: handleCreateAppForm('user_type'), margin: 'normal', variant: 'filled' },
            react_default.a.createElement(MenuItem["a" /* default */], { key: 0, value: newUser.user_type }, "App User"),
            react_default.a.createElement(MenuItem["a" /* default */], { key: 1, value: 'admin' }, "Admin User"))
    ]);
    const handleViewClick = (redirectTo) => {
        props.history.push(redirectTo);
    };
    Object(react["useEffect"])(() => {
        fetchUsers();
    }, []);
    return (react_default.a.createElement(ErrorBoundary_ErrorBoundary, null,
        react_default.a.createElement(Toast, { open: notification.toastOpen, variant: notification.toastVariant, message: notification.toastMessage, handleToastClose: handleToastClose }),
        react_default.a.createElement(ModalComponent, { subHeading: 'You can update your information later in the user details view.', open: modalOpen, handleOpen: handleModalOpen, handleClose: handleModalClose, heading: 'Add New User', formFields: createUserFields, submit: submitNewUser }),
        react_default.a.createElement(ConfirmModalComponent, { open: menuConfirmOpen, handleClose: menuConfirmHandleClose, heading: 'Confirmation', submit: onSelectDeleteMenu }),
        react_default.a.createElement(Grid["a" /* default */], { container: true, spacing: 5 },
            react_default.a.createElement(Grid["a" /* default */], { item: true, xs: true },
                react_default.a.createElement(Typography["a" /* default */], { variant: 'h5', display: 'block', gutterBottom: true }, "App Users")),
            react_default.a.createElement(Grid["a" /* default */], { item: true, xs: true, style: { display: 'flex', justifyContent: 'flex-end' } },
                react_default.a.createElement(Button["a" /* default */], { variant: 'contained', size: 'medium', className: classes.submit, color: 'secondary', type: 'submit', onClick: handleModalOpen },
                    react_default.a.createElement(CreateTwoTone["a" /* default */], { className: Object(clsx_m["a" /* default */])(classes.leftIcon, classes.iconSmall) }),
                    "Create User"))),
        react_default.a.createElement(Grid["a" /* default */], { container: true }, userList.users.length ?
            react_default.a.createElement(List["a" /* default */], { className: classes.root }, loading ? react_default.a.createElement("div", { style: { display: 'flex', justifyContent: 'center', width: '100%' } },
                react_default.a.createElement(CircularProgress["a" /* default */], { className: classes.progress })) :
                userList.users.map((user, index) => {
                    return [
                        react_default.a.createElement(ListItem["a" /* default */], { alignItems: 'flex-start', key: index },
                            react_default.a.createElement(ListItemAvatar["a" /* default */], null,
                                react_default.a.createElement(Avatar["a" /* default */], { alt: user.name, src: user.picture_url ? user.picture_url : '/src/assets/img/simplus-logo.png' })),
                            react_default.a.createElement(ListItemText["a" /* default */], { style: { width: '50%' }, primary: react_default.a.createElement(Link["a" /* default */], { href: `/admin/users/${user.id}/details`, color: 'textPrimary', underline: 'none' }, user.name), secondary: react_default.a.createElement(react_default.a.Fragment, null, user.email) }),
                            react_default.a.createElement(ListItemText["a" /* default */], { style: { width: '50%' }, primary: 'Email Verified', secondary: react_default.a.createElement(react_default.a.Fragment, null, user.email_verified ?
                                    react_default.a.createElement(CheckCircleTwoTone["a" /* default */], { style: { color: 'green' } })
                                    :
                                        react_default.a.createElement(CheckCircleTwoTone["a" /* default */], { style: { color: 'red' } })) }),
                            react_default.a.createElement(ListItemSecondaryAction["a" /* default */], null,
                                react_default.a.createElement(Menu["a" /* default */], { id: `simple-menu-${user.id}`, anchorEl: menuAnchorEl.item, keepMounted: true, open: Boolean(menuAnchorEl) && menuAnchorEl.index === index, onClose: menuHandleClose },
                                    react_default.a.createElement(MenuItem["a" /* default */], { onClick: () => handleViewClick(`/admin/users/${user.id ? user.id : null}/details`) }, "View"),
                                    react_default.a.createElement(MenuItem["a" /* default */], { onClick: () => menuConfirmHandleClickOpen(user.id) }, "Delete")),
                                react_default.a.createElement(IconButton["a" /* default */], { edge: 'end', "aria-label": 'delete', "aria-controls": `simple-menu-${user.id}`, "aria-haspopup": 'true', onClick: menuHandleClick(index) },
                                    react_default.a.createElement(MoreVertTwoTone["a" /* default */], null)))),
                        userList.users.length - 1 !== index ? react_default.a.createElement(Divider["a" /* default */], { key: `div-${index}`, variant: 'inset', component: 'li' }) : null
                    ];
                }))
            :
                react_default.a.createElement("div", null, "There are no users in the selected organization."))));
};
/* harmony default export */ var Users = (UsersList);

// CONCATENATED MODULE: ./src/views/Projects/Projects.tsx









const { SimplusAuthRobin: Projects_SimplusAuthRobin } = robins;
const Projects_useStyles = Object(makeStyles["a" /* default */])((theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2, 2),
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
    iconSmall: {
        fontSize: 20,
    },
    root: {
        width: '100%',
        backgroundColor: '#f5f5f5',
    },
    inline: {
        display: 'inline'
    },
    progress: {
        margin: theme.spacing(2),
    },
}));
const ProjectList = (props) => {
    const getLoggedInUser = () => {
        return Projects_SimplusAuthRobin.getResult('loggedInUserInfo');
    };
    const loggedInUser = getLoggedInUser();
    const userId = loggedInUser ? loggedInUser.data.id : null;
    const classes = Projects_useStyles();
    const [modalOpen, setModalOpen] = react_default.a.useState(false);
    const [selectProject, setSelectProject] = react_default.a.useState(null);
    const [project, setProject] = react_default.a.useState({
        projectList: []
    });
    const [newProject, setNewProject] = react_default.a.useState({
        projectName: ''
    });
    const [notification, setNotification] = react_default.a.useState({
        toastOpen: false,
        toastVariant: undefined,
        toastMessage: undefined
    });
    const [loading, setLoading] = react_default.a.useState(true);
    const handleToastClose = (_event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotification(Object.assign({}, notification, { toastOpen: false, toastMessage: undefined }));
    };
    const handleToastOpen = (toastVariant, toastMessage) => {
        setNotification(Object.assign({}, notification, { toastOpen: true, toastVariant: toastVariant, toastMessage: toastMessage }));
    };
    const handleModalOpen = () => {
        setModalOpen(true);
    };
    const handleModalClose = () => {
        setModalOpen(false);
    };
    const [menuAnchorEl, menuSetAnchorEl] = react_default.a.useState({ item: null, index: null });
    const menuHandleClick = i => event => {
        menuSetAnchorEl(Object.assign({}, menuAnchorEl, { item: event.currentTarget, index: i }));
    };
    const menuHandleClose = () => {
        menuSetAnchorEl(Object.assign({}, menuAnchorEl, { item: null, index: null }));
    };
    const [menuConfirmOpen, menuConfirmSetOpen] = react_default.a.useState(false);
    const menuConfirmHandleClickOpen = (projectId) => {
        setSelectProject(projectId);
        menuConfirmSetOpen(true);
    };
    const menuConfirmHandleClose = () => {
        setSelectProject(null);
        menuConfirmSetOpen(false);
    };
    const fetchProjects = () => {
        setLoading(true);
        Projects_SimplusAuthRobin.when(Projects_SimplusAuthRobin.get('projectList', `/projects`)).then(() => {
            setLoading(false);
            const fetchedProjects = Projects_SimplusAuthRobin.getResult('projectList').data;
            if (fetchedProjects.length) {
                const projectDataMapping = fetchedProjects.map((project) => {
                    return {
                        'id': project.id,
                        'name': project.name
                    };
                });
                setProject(Object.assign({}, project, { projectList: projectDataMapping }));
            }
        }).catch(err => {
            setLoading(false);
            handleToastOpen('error', err.response.data.message);
        });
    };
    const handleViewClick = (redirectTo) => {
        props.history.push(redirectTo);
    };
    const handleCreateAppForm = (prop) => (event) => {
        setNewProject(Object.assign({}, newProject, { [prop]: event.target.value }));
    };
    const submitNewProject = () => {
        if (!newProject.projectName) {
            handleToastOpen('warning', 'Project name is required!');
        }
        else if (!userId) {
            handleToastOpen('warning', 'Problem in getting user info!');
        }
        else {
            Projects_SimplusAuthRobin.when(Projects_SimplusAuthRobin.post('createProject', `/projects`, {
                name: newProject.projectName,
                user_id: userId
            })).then(() => {
                handleToastOpen('success', 'New Project created successfully. You can get details in settings!');
                handleModalClose();
                setNewProject({ projectName: '' });
                fetchProjects();
            }).catch(err => {
                handleToastOpen('error', err.response.data.message);
            });
        }
    };
    const deleteProject = (projectId) => {
        if (!projectId) {
            handleToastOpen('warning', 'Project id missing!');
        }
        else {
            Projects_SimplusAuthRobin.when(Projects_SimplusAuthRobin.delete('deleteProject', `/projects/${projectId}`)).then(() => {
                handleToastOpen('success', 'Project deleted successfully!');
                menuConfirmHandleClose();
                fetchProjects();
            }).catch(err => {
                handleToastOpen('error', err.response.data.message);
            });
        }
    };
    const onSelectDeleteMenu = () => {
        menuHandleClose();
        if (!selectProject) {
            handleToastOpen('warning', 'Project id missing!');
        }
        else {
            deleteProject(selectProject);
        }
    };
    const createProjectFields = (react_default.a.createElement(TextField["a" /* default */], { variant: 'filled', margin: 'normal', required: true, fullWidth: true, id: 'projectName', label: 'Project Name', name: 'projectName', autoComplete: 'Project Name', onChange: handleCreateAppForm('projectName'), autoFocus: true }));
    Object(react["useEffect"])(() => {
        fetchProjects();
    }, []);
    return (react_default.a.createElement(ErrorBoundary_ErrorBoundary, null,
        react_default.a.createElement(Toast, { open: notification.toastOpen, variant: notification.toastVariant, message: notification.toastMessage, handleToastClose: handleToastClose }),
        react_default.a.createElement(ModalComponent, { subHeading: 'You can change the project name later in the project settings.', open: modalOpen, handleOpen: handleModalOpen, handleClose: handleModalClose, heading: 'Create New Project', formFields: createProjectFields, submit: submitNewProject }),
        react_default.a.createElement(ConfirmModalComponent, { open: menuConfirmOpen, handleClose: menuConfirmHandleClose, heading: 'Confirmation', submit: onSelectDeleteMenu }),
        react_default.a.createElement(Grid["a" /* default */], { container: true, spacing: 5 },
            react_default.a.createElement(Grid["a" /* default */], { item: true, xs: true },
                react_default.a.createElement(Typography["a" /* default */], { variant: 'h5', display: 'block', gutterBottom: true }, "Projects")),
            react_default.a.createElement(Grid["a" /* default */], { item: true, xs: true, style: { display: 'flex', justifyContent: 'flex-end' } },
                react_default.a.createElement(Button["a" /* default */], { variant: 'contained', size: 'medium', className: classes.submit, color: 'secondary', type: 'submit', onClick: handleModalOpen },
                    react_default.a.createElement(CreateTwoTone["a" /* default */], { className: Object(clsx_m["a" /* default */])(classes.leftIcon, classes.iconSmall) }),
                    "Create Project"))),
        react_default.a.createElement(Grid["a" /* default */], { container: true }, loading ? react_default.a.createElement("div", { style: { display: 'flex', justifyContent: 'center', width: '100%' } },
            react_default.a.createElement(CircularProgress["a" /* default */], { className: classes.progress })) :
            project.projectList.length ?
                react_default.a.createElement(List["a" /* default */], { className: classes.root }, project.projectList.map((proj, index) => {
                    return react_default.a.createElement("div", { key: index },
                        react_default.a.createElement(ListItem["a" /* default */], { alignItems: 'flex-start' },
                            react_default.a.createElement(ListItemAvatar["a" /* default */], null,
                                react_default.a.createElement(Avatar["a" /* default */], { alt: 'Remy Sharp', src: '/src/assets/img/login-banner.jpeg' })),
                            react_default.a.createElement(ListItemText["a" /* default */], { style: { width: '50%' }, primary: 'Project Name', secondary: react_default.a.createElement(react_default.a.Fragment, null,
                                    react_default.a.createElement(Link["a" /* default */], { href: `/admin/projects/${proj.id}/details`, color: 'textSecondary', underline: 'none' }, proj.name)) }),
                            react_default.a.createElement(ListItemText["a" /* default */], { style: { width: '50%' }, primary: 'Project Id', secondary: react_default.a.createElement(react_default.a.Fragment, null, proj.id) }),
                            react_default.a.createElement(ListItemSecondaryAction["a" /* default */], null,
                                react_default.a.createElement(Menu["a" /* default */], { id: 'simple-menu', anchorEl: menuAnchorEl.item, keepMounted: true, open: Boolean(menuAnchorEl) && menuAnchorEl.index === index, onClose: menuHandleClose },
                                    react_default.a.createElement(MenuItem["a" /* default */], { onClick: () => handleViewClick(`/admin/projects/${proj.id ? proj.id : undefined}/details`) }, "View"),
                                    react_default.a.createElement(MenuItem["a" /* default */], { onClick: () => menuConfirmHandleClickOpen(proj.id) }, "Delete")),
                                react_default.a.createElement(IconButton["a" /* default */], { edge: 'end', "aria-label": 'delete', "aria-controls": 'simple-menu', "aria-haspopup": 'true', onClick: menuHandleClick(index) },
                                    react_default.a.createElement(MoreVertTwoTone["a" /* default */], null)))),
                        (project.projectList.length - 1) !== index ? react_default.a.createElement(Divider["a" /* default */], { key: `div-${index}`, variant: 'inset', component: 'li' }) : null);
                }))
                :
                    react_default.a.createElement("div", null, "There is no projects yet"))));
};
/* harmony default export */ var Projects = (ProjectList);

// CONCATENATED MODULE: ./src/views/Customers/Customers.tsx









const { SimplusAuthRobin: Customers_SimplusAuthRobin } = robins;
const Customers_useStyles = Object(makeStyles["a" /* default */])((theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2, 2),
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
    iconSmall: {
        fontSize: 20,
    },
    root: {
        width: '100%',
        backgroundColor: '#f5f5f5',
    },
    inline: {
        display: 'inline',
    },
    progress: {
        margin: theme.spacing(2),
    },
}));
let addCustomerFields = [];
const Customers = (props) => {
    const classes = Customers_useStyles();
    const getLoggedInUser = () => {
        return Customers_SimplusAuthRobin.getResult('loggedInUserInfo');
    };
    const loggedInUser = getLoggedInUser();
    const [selectCustomer, setSelectCustomer] = react_default.a.useState(null);
    const loggedInUserId = loggedInUser ? loggedInUser.data.id : null;
    const [loading, setLoading] = react_default.a.useState(true);
    const [modalOpen, setModalOpen] = react_default.a.useState(false);
    const [notification, setNotification] = react_default.a.useState({
        toastOpen: false,
        toastVariant: undefined,
        toastMessage: undefined
    });
    const [newCustomer, setNewCustomer] = react_default.a.useState({});
    const [customerList, setCustomerList] = react_default.a.useState({
        customers: []
    });
    const [customerFields, setCustomerFields] = react_default.a.useState({
        fields: []
    });
    const [projectList, setProjectList] = react_default.a.useState({
        projects: []
    });
    const handleToastClose = (_event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotification(Object.assign({}, notification, { toastOpen: false, toastMessage: undefined }));
    };
    const handleToastOpen = (toastVariant, toastMessage) => {
        setNotification(Object.assign({}, notification, { toastOpen: true, toastVariant: toastVariant, toastMessage: toastMessage }));
    };
    const handleModalOpen = () => {
        setModalOpen(true);
        createCustomerForm();
    };
    const handleModalClose = () => {
        setNewCustomer({});
        setModalOpen(false);
    };
    const [menuAnchorEl, menuSetAnchorEl] = react_default.a.useState({ item: null, index: null });
    const menuHandleClick = i => event => {
        menuSetAnchorEl(Object.assign({}, menuAnchorEl, { item: event.currentTarget, index: i }));
    };
    const menuHandleClose = () => {
        menuSetAnchorEl(Object.assign({}, menuAnchorEl, { item: null, index: null }));
    };
    const [menuConfirmOpen, menuConfirmSetOpen] = react_default.a.useState(false);
    const menuConfirmHandleClickOpen = (customerId) => {
        setSelectCustomer(customerId);
        menuConfirmSetOpen(true);
    };
    const menuConfirmHandleClose = () => {
        setSelectCustomer(null);
        menuConfirmSetOpen(false);
    };
    const handleCreateCustomerForm = (prop) => (event) => {
        const { name, value } = event.target;
        console.log(newCustomer.name);
        setNewCustomer(prevState => (Object.assign({}, prevState, { [name]: value })));
        // setNewCustomer({ ...newCustomer, [prop]: event.target.value });
    };
    const deleteCustomer = (customerId) => {
        if (!customerId) {
            handleToastOpen('warning', 'Customer id missing!');
        }
        else {
            Customers_SimplusAuthRobin.when(Customers_SimplusAuthRobin.delete('deleteCustomer', `/customers/${customerId}`)).then(() => {
                handleToastOpen('success', 'Customer deleted successfully!');
                menuConfirmHandleClose();
                fetchCustomers();
            }).catch(err => {
                handleToastOpen('error', err.response.data.message);
            });
        }
    };
    const onSelectDeleteMenu = () => {
        menuHandleClose();
        if (!selectCustomer) {
            handleToastOpen('warning', 'Customerid missing!');
        }
        else {
            deleteCustomer(selectCustomer);
        }
    };
    const fetchCustomers = () => {
        setLoading(true);
        Customers_SimplusAuthRobin.when(Customers_SimplusAuthRobin.get('customerList', `/customers`)).then(() => {
            setLoading(false);
            const customerList = Customers_SimplusAuthRobin.getResult('customerList').data;
            if (customerList.length) {
                const customerDataMapping = customerList.map((customer) => {
                    return {
                        'id': customer.id,
                        'name': customer.name,
                        'project_id': customer.project_id,
                        'project_name': customer.project_name,
                        'created_by': customer.created_by,
                        'created_by_name': customer.created_by_name
                    };
                });
                setCustomerList(Object.assign({}, customerList, { customers: customerDataMapping }));
            }
        }).catch(err => {
            setLoading(false);
            handleToastOpen('error', err.response.data.message);
        });
    };
    const fetchProjects = () => {
        Customers_SimplusAuthRobin.when(Customers_SimplusAuthRobin.get('projectList', `/projects`)).then(() => {
            const projects = Customers_SimplusAuthRobin.getResult('projectList').data;
            if (projects.length) {
                const projectDataMapping = projects.map((proj) => {
                    return {
                        'id': proj.id,
                        'name': proj.name,
                    };
                });
                setProjectList(Object.assign({}, projectList, { projects: projectDataMapping }));
            }
        }).catch(err => {
            handleToastOpen('error', err.response.data.message);
        });
    };
    const fetchCustomerFields = () => {
        Customers_SimplusAuthRobin.when(Customers_SimplusAuthRobin.get('customerFields', `/customers/schema/fields`)).then(() => {
            const customerField = Customers_SimplusAuthRobin.getResult('customerFields').data;
            if (customerField.length) {
                const customerFieldsDataMapping = customerField.map((customer) => {
                    return {
                        "column_name": customer.column_name,
                        "is_nullable": customer.is_nullable,
                        "data_type": customer.data_type,
                        "visible_text": customer.column_name.split('_').join(' ')
                    };
                });
                setCustomerFields(Object.assign({}, customerFields, { fields: customerFieldsDataMapping }));
            }
        }).catch(err => {
            handleToastOpen('error', err.response.data.message);
        });
    };
    const createCustomerForm = () => {
        addCustomerFields = [];
        customerFields.fields.forEach((customer, index) => {
            addCustomerFields.push(react_default.a.createElement(TextField["a" /* default */], { variant: 'filled', margin: 'normal', required: customer.column_name == 'name' ? true : false, fullWidth: true, key: index, id: customer.column_name, label: customer.visible_text, name: customer.column_name, onChange: handleCreateCustomerForm(customer.column_name) }));
        });
        addCustomerFields.push(react_default.a.createElement(TextField["a" /* default */], { id: 'project', required: true, key: customerFields.fields.length + 1, select: true, label: 'Select Project', fullWidth: true, name: 'project_id', value: Object.keys(newCustomer).length > 0 ? newCustomer.project_id : '', onChange: handleCreateCustomerForm('project_id'), margin: 'normal', variant: 'filled' }, projectList.projects.map((val, index) => react_default.a.createElement(MenuItem["a" /* default */], { key: index, value: val.id }, val.name))));
    };
    const submitNewCustomer = () => {
        console.log(newCustomer);
        if (!newCustomer.name || !newCustomer.project_id) {
            handleToastOpen('warning', 'Name and project selection is required!');
        }
        else {
            Customers_SimplusAuthRobin.when(Customers_SimplusAuthRobin.post('createCustomer', `/customers`, Object.assign({}, newCustomer, { created_by: loggedInUserId }))).then(() => {
                handleToastOpen('success', 'New customer added successfully. You can see details in settings!');
                handleModalClose();
                setNewCustomer({});
                fetchCustomers();
            }).catch(err => {
                handleToastOpen('error', err.response.data.message);
            });
        }
    };
    const createCustomerFields = addCustomerFields;
    const handleViewClick = (redirectTo) => {
        props.history.push(redirectTo);
    };
    Object(react["useEffect"])(() => {
        fetchCustomers();
        fetchCustomerFields();
        fetchProjects();
    }, []);
    return (react_default.a.createElement(ErrorBoundary_ErrorBoundary, null,
        react_default.a.createElement(Toast, { open: notification.toastOpen, variant: notification.toastVariant, message: notification.toastMessage, handleToastClose: handleToastClose }),
        react_default.a.createElement(ModalComponent, { subHeading: 'You can update your information later in the customer details view.', open: modalOpen, handleOpen: handleModalOpen, handleClose: handleModalClose, heading: 'Add New Customer', formFields: createCustomerFields, submit: submitNewCustomer }),
        react_default.a.createElement(ConfirmModalComponent, { open: menuConfirmOpen, handleClose: menuConfirmHandleClose, heading: 'Confirmation', submit: onSelectDeleteMenu }),
        react_default.a.createElement(Grid["a" /* default */], { container: true, spacing: 5 },
            react_default.a.createElement(Grid["a" /* default */], { item: true, xs: true },
                react_default.a.createElement(Typography["a" /* default */], { variant: 'h5', display: 'block', gutterBottom: true }, "Customers")),
            react_default.a.createElement(Grid["a" /* default */], { item: true, xs: true, style: { display: 'flex', justifyContent: 'flex-end' } },
                react_default.a.createElement(Button["a" /* default */], { variant: 'contained', size: 'medium', className: classes.submit, color: 'secondary', type: 'submit', onClick: handleModalOpen },
                    react_default.a.createElement(CreateTwoTone["a" /* default */], { className: Object(clsx_m["a" /* default */])(classes.leftIcon, classes.iconSmall) }),
                    "Add Customer"))),
        react_default.a.createElement(Grid["a" /* default */], { container: true }, customerList.customers.length ?
            react_default.a.createElement(List["a" /* default */], { className: classes.root }, loading ? react_default.a.createElement("div", { style: { display: 'flex', justifyContent: 'center', width: '100%' } },
                react_default.a.createElement(CircularProgress["a" /* default */], { className: classes.progress })) :
                customerList.customers.map((customer, index) => {
                    return [
                        react_default.a.createElement(ListItem["a" /* default */], { alignItems: 'flex-start', key: index },
                            react_default.a.createElement(ListItemAvatar["a" /* default */], null,
                                react_default.a.createElement(Avatar["a" /* default */], { alt: customer.name, src: '/src/assets/img/simplus-logo.png' })),
                            react_default.a.createElement(ListItemText["a" /* default */], { style: { width: '50%' }, primary: react_default.a.createElement(Link["a" /* default */], { href: `/admin/customers/${customer.id}/details`, color: 'textPrimary', underline: 'none' }, customer.name), secondary: react_default.a.createElement(react_default.a.Fragment, null,
                                    react_default.a.createElement("b", null, "Created By:"),
                                    " ",
                                    customer.created_by_name) }),
                            react_default.a.createElement(ListItemText["a" /* default */], { style: { width: '50%' }, primary: 'Project', secondary: react_default.a.createElement(react_default.a.Fragment, null, customer.project_name) }),
                            react_default.a.createElement(ListItemSecondaryAction["a" /* default */], null,
                                react_default.a.createElement(Menu["a" /* default */], { id: `simple-menu-${customer.id}`, anchorEl: menuAnchorEl.item, keepMounted: true, open: Boolean(menuAnchorEl) && menuAnchorEl.index === index, onClose: menuHandleClose },
                                    react_default.a.createElement(MenuItem["a" /* default */], { onClick: () => handleViewClick(`/admin/customers/${customer.id ? customer.id : null}/details`) }, "View"),
                                    react_default.a.createElement(MenuItem["a" /* default */], { onClick: () => menuConfirmHandleClickOpen(customer.id) }, "Delete")),
                                react_default.a.createElement(IconButton["a" /* default */], { edge: 'end', "aria-label": 'delete', "aria-controls": `simple-menu-${customer.id}`, "aria-haspopup": 'true', onClick: menuHandleClick(index) },
                                    react_default.a.createElement(MoreVertTwoTone["a" /* default */], null)))),
                        customerList.customers.length - 1 !== index ? react_default.a.createElement(Divider["a" /* default */], { key: `div-${index}`, variant: 'inset', component: 'li' }) : null
                    ];
                }))
            :
                react_default.a.createElement("div", null, "There are no customers yet."))));
};
/* harmony default export */ var Customers_Customers = (Customers);

// CONCATENATED MODULE: ./src/routes.tsx

// core components/views for Admin layout




const dashboardRoutes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        icon: DashboardTwoTone["a" /* default */],
        component: Dashboard_Dashboard,
        layout: '/admin'
    },
    {
        path: '/projects',
        name: 'Projects',
        icon: ComputerTwoTone["a" /* default */],
        component: Projects,
        layout: '/admin'
    },
    {
        path: '/users',
        name: 'Users',
        icon: PeopleTwoTone["a" /* default */],
        component: Users,
        layout: '/admin'
    },
    {
        path: '/customers',
        name: 'Customers',
        icon: LocalActivityTwoTone["a" /* default */],
        component: Customers_Customers,
        layout: '/admin'
    }
];
/* harmony default export */ var src_routes = (dashboardRoutes);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AppBar/AppBar.js
var AppBar = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js
var Toolbar = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Menu.js
var icons_Menu = __webpack_require__(306);
var Menu_default = /*#__PURE__*/__webpack_require__.n(icons_Menu);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/AccountCircleTwoTone.js
var AccountCircleTwoTone = __webpack_require__(305);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/SettingsApplicationsTwoTone.js
var SettingsApplicationsTwoTone = __webpack_require__(304);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/PowerSettingsNewTwoTone.js
var PowerSettingsNewTwoTone = __webpack_require__(303);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(103);

// CONCATENATED MODULE: ./src/components/Navbars/Navbar.tsx
var Navbar_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};


const url = __webpack_require__(165);













const { SimplusAuthRobin: Navbar_SimplusAuthRobin } = robins;
const Navbar_cookies = new es6["a" /* default */]();
const drawerWidth = 240;
const Navbar_useStyles = Object(makeStyles["a" /* default */])((theme) => Object(createStyles["a" /* default */])({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    inline: {
        display: 'inline',
    },
}));
/**
 * Header Component
 */
const Header = (_a) => {
    var props = Navbar_rest(_a, []);
    const { path } = url.parse(window.location.href);
    const activeTab = path.split('/')[2];
    const classes = Navbar_useStyles();
    const { handleDrawerOpen, drawerOpen, userInfo } = props;
    const [anchorEl, setAnchorEl] = react_default.a.useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        Navbar_cookies.remove('token', { path: '/' });
        Navbar_SimplusAuthRobin.when(Navbar_SimplusAuthRobin.get('logout', `/auth/logout`)).then(() => {
            window.location.reload();
        }).catch(_err => {
            window.location.reload();
        });
    };
    const handleMenuItemClick = (redirectTo) => {
        handleClose();
        props.history.push(redirectTo);
    };
    return (react_default.a.createElement(ErrorBoundary_ErrorBoundary, null,
        react_default.a.createElement(AppBar["a" /* default */], { color: 'secondary', position: 'fixed', className: Object(clsx_m["a" /* default */])(classes.appBar, {
                [classes.appBarShift]: drawerOpen,
            }) },
            react_default.a.createElement(Toolbar["a" /* default */], { style: { display: 'flex', justifyContent: 'space-between' } },
                react_default.a.createElement("div", { style: { display: 'flex', alignItems: 'center' } },
                    react_default.a.createElement(IconButton["a" /* default */], { color: 'inherit', "aria-label": 'Open drawer', onClick: handleDrawerOpen, edge: 'start', className: Object(clsx_m["a" /* default */])(classes.menuButton, {
                            [classes.hide]: drawerOpen,
                        }) },
                        react_default.a.createElement(Menu_default.a, null)),
                    react_default.a.createElement(Typography["a" /* default */], { variant: 'h6', noWrap: true }, activeTab.toUpperCase())),
                react_default.a.createElement("div", null,
                    react_default.a.createElement(IconButton["a" /* default */], { "aria-label": 'Account of current user', "aria-controls": 'menu-appbar', "aria-haspopup": 'true', onClick: handleMenu, color: 'inherit' },
                        react_default.a.createElement(AccountCircleTwoTone["a" /* default */], null)),
                    react_default.a.createElement(Menu["a" /* default */], { id: 'menu-appbar', anchorEl: anchorEl, anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'right',
                        }, keepMounted: true, transformOrigin: {
                            vertical: 'top',
                            horizontal: 'right',
                        }, open: open, onClose: handleClose },
                        react_default.a.createElement(MenuItem["a" /* default */], { onClick: () => handleMenuItemClick(`/admin/profile/${userInfo ? userInfo.id : undefined}`) },
                            react_default.a.createElement(ListItemAvatar["a" /* default */], null,
                                react_default.a.createElement(Avatar["a" /* default */], { alt: userInfo ? userInfo.name : 'admin name', src: (userInfo && userInfo.picture_url) ? userInfo.picture_url : 'https://i.ibb.co/2kcsxxB/avatar.png' })),
                            react_default.a.createElement(ListItemText["a" /* default */], { primary: userInfo ? userInfo.name : '', secondary: react_default.a.createElement(react_default.a.Fragment, null, "View profile") })),
                        react_default.a.createElement(Divider["a" /* default */], { light: true }),
                        react_default.a.createElement(MenuItem["a" /* default */], { onClick: () => handleMenuItemClick(`/admin/profile/${userInfo ? userInfo.id : undefined}/settings`) },
                            react_default.a.createElement(ListItemIcon["a" /* default */], null,
                                react_default.a.createElement(SettingsApplicationsTwoTone["a" /* default */], null)),
                            react_default.a.createElement(ListItemText["a" /* default */], { primary: 'Account Settings' })),
                        react_default.a.createElement(Divider["a" /* default */], { light: true }),
                        react_default.a.createElement(MenuItem["a" /* default */], { onClick: handleLogout },
                            react_default.a.createElement(ListItemIcon["a" /* default */], null,
                                react_default.a.createElement(PowerSettingsNewTwoTone["a" /* default */], null)),
                            react_default.a.createElement(ListItemText["a" /* default */], { primary: 'Logout' }))))))));
};
/* harmony default export */ var Navbar = (Header);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Drawer/Drawer.js + 1 modules
var Drawer = __webpack_require__(299);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ChevronLeft.js
var ChevronLeft = __webpack_require__(301);
var ChevronLeft_default = /*#__PURE__*/__webpack_require__.n(ChevronLeft);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ChevronRight.js
var ChevronRight = __webpack_require__(302);
var ChevronRight_default = /*#__PURE__*/__webpack_require__.n(ChevronRight);

// CONCATENATED MODULE: ./src/components/Sidebar/Sidebar.tsx
var Sidebar_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};



/**
 * @material-ui/core components
 */











/**
 * Import dependencies
 */
const Sidebar_drawerWidth = 240;
const Sidebar_useStyles = Object(makeStyles["a" /* default */])((theme) => Object(createStyles["a" /* default */])({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: Sidebar_drawerWidth,
        width: `calc(100% - ${Sidebar_drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: Sidebar_drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: Sidebar_drawerWidth,
        backgroundColor: '#44474b',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: '#44474b',
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: Object.assign({ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 8px' }, theme.mixins.toolbar),
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
}));
const Sidebar = (_a) => {
    var props = Sidebar_rest(_a, []);
    const classes = Sidebar_useStyles();
    const theme = Object(useTheme["a" /* default */])();
    const { routes, handleDrawerClose, drawerOpen } = props;
    const links = (react_default.a.createElement(List["a" /* default */], null, routes.map((prop, key) => {
        return (react_default.a.createElement(react_router_dom["c" /* NavLink */], { to: prop.layout + prop.path, activeClassName: 'active', key: key, style: { textDecoration: 'none', color: '#ffffff' } },
            react_default.a.createElement(ListItem["a" /* default */], { button: true, key: prop.name },
                react_default.a.createElement(ListItemIcon["a" /* default */], { style: { color: '#ffffff' } },
                    react_default.a.createElement(prop.icon, null)),
                react_default.a.createElement(ListItemText["a" /* default */], { primary: prop.name }))));
    })));
    const brand = (react_default.a.createElement("div", { style: { flexGrow: 1 } },
        react_default.a.createElement("a", { href: '/admin/dashboard' },
            react_default.a.createElement("div", { style: { display: 'flex', justifyContent: 'center' } },
                react_default.a.createElement("img", { src: 'https://i.ibb.co/Kzk4Zz8/fourasol.png', width: '80%', alt: 'logo' })))));
    return (react_default.a.createElement(ErrorBoundary_ErrorBoundary, null,
        react_default.a.createElement(Drawer["a" /* default */], { variant: 'permanent', className: Object(clsx_m["a" /* default */])(classes.drawer, {
                [classes.drawerOpen]: drawerOpen,
                [classes.drawerClose]: !drawerOpen,
            }), classes: {
                paper: Object(clsx_m["a" /* default */])({
                    [classes.drawerOpen]: drawerOpen,
                    [classes.drawerClose]: !drawerOpen,
                }),
            }, open: drawerOpen },
            react_default.a.createElement("div", { className: classes.toolbar },
                brand,
                react_default.a.createElement(IconButton["a" /* default */], { onClick: handleDrawerClose }, theme.direction === 'rtl' ? react_default.a.createElement(ChevronRight_default.a, null) : react_default.a.createElement(ChevronLeft_default.a, null))),
            react_default.a.createElement(Divider["a" /* default */], null),
            links)));
};
/* harmony default export */ var Sidebar_Sidebar = (Sidebar);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/SaveTwoTone.js
var SaveTwoTone = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 22 modules
var Box = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tabs/Tabs.js + 7 modules
var Tabs = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tab/Tab.js
var Tab = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(62);

// CONCATENATED MODULE: ./src/views/OrganizationSettings/OrganizationSettings.tsx
var OrganizationSettings_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};







const { SimplusAuthRobin: OrganizationSettings_SimplusAuthRobin } = robins;
const TabPanel = (props) => {
    const { children, value, index } = props, other = OrganizationSettings_rest(props, ["children", "value", "index"]);
    return (react_default.a.createElement(Typography["a" /* default */], Object.assign({ style: { flexGrow: 1 }, component: 'div', role: 'tabpanel', hidden: value !== index, id: `scrollable-auto-tabpanel-${index}`, "aria-labelledby": `scrollable-auto-tab-${index}` }, other),
        react_default.a.createElement(Box["a" /* default */], { p: 3 }, children)));
};
const a11yProps = (index) => {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
};
const OrganizationSettings_useStyles = Object(makeStyles["a" /* default */])((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2, 2),
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
    iconSmall: {
        fontSize: 20,
    },
    root: {
        width: '100%',
        backgroundColor: '#f5f5f5',
    },
    inline: {
        display: 'inline'
    },
    chip: {
        margin: theme.spacing(1),
    },
}));
const OrganizationSettings = (props) => {
    const classes = OrganizationSettings_useStyles();
    const [value, setValue] = react_default.a.useState(0);
    const [orgProfile, setOrgProfile] = react_default.a.useState({
        name: '',
        address: '',
        type: '',
        contactNo: '',
    });
    const [themeSetting, setThemeSetting] = react_default.a.useState({
        logoUrl: '',
        authContainerBackgroundColor: '',
        pageBackgroundColor: '',
        fontColor: '',
    });
    const [notification, setNotification] = react_default.a.useState({
        toastOpen: false,
        toastVariant: undefined,
        toastMessage: undefined
    });
    const [menuAnchorEl, menuSetAnchorEl] = react_default.a.useState({ item: null, index: null });
    const [invitee, setInvitee] = react_default.a.useState({
        inviteeList: [
            {
                organization_id: '',
                invitor_id: '',
                invitor_name: '',
                invitee_id: '',
                status: '',
                invitee_name: '',
                invitee_email: ''
            }
        ]
    });
    const handleToastClose = (_event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotification(Object.assign({}, notification, { toastOpen: false, toastMessage: undefined }));
    };
    const handleToastOpen = (toastVariant, toastMessage) => {
        setNotification(Object.assign({}, notification, { toastOpen: true, toastVariant: toastVariant, toastMessage: toastMessage }));
    };
    const menuHandleClick = i => event => {
        menuSetAnchorEl(Object.assign({}, menuAnchorEl, { item: event.currentTarget, index: i }));
    };
    const menuHandleClose = () => {
        menuSetAnchorEl(Object.assign({}, menuAnchorEl, { item: null, index: null }));
    };
    const handleChange = (_event, newValue) => {
        setValue(newValue);
    };
    const handleFormChange = (prop) => (event) => {
        setOrgProfile(Object.assign({}, orgProfile, { [prop]: event.target.value }));
    };
    const handleThemeFormChange = (prop) => (event) => {
        setThemeSetting(Object.assign({}, themeSetting, { [prop]: event.target.value }));
    };
    const organizationId = (props.match && props.match.params.organizationId) ? props.match.params.organizationId : undefined;
    const submitOrganizationProfile = (event) => {
        event.preventDefault();
        OrganizationSettings_SimplusAuthRobin.when(OrganizationSettings_SimplusAuthRobin.put('updateOrganizationProfile', `/organization/${organizationId}`, {
            name: orgProfile.name,
            address: orgProfile.address,
            type: orgProfile.type,
            contact_no: orgProfile.contactNo,
        })).then(() => {
            const updatedInfo = OrganizationSettings_SimplusAuthRobin.getResult('updateOrganizationProfile');
            handleToastOpen('success', updatedInfo.message);
        }).catch(err => {
            handleToastOpen('error', err.response.data.message);
        });
    };
    const submitThemeSettings = (event) => {
        event.preventDefault();
        OrganizationSettings_SimplusAuthRobin.when(OrganizationSettings_SimplusAuthRobin.put('updateOrganizationThemeSettings', `/organization/${organizationId}/theme_settings`, {
            logo_url: themeSetting.logoUrl,
            login_background_color: themeSetting.authContainerBackgroundColor,
            page_background_color: themeSetting.pageBackgroundColor,
            font_color: themeSetting.fontColor
        })).then(() => {
            const updatedInfo = OrganizationSettings_SimplusAuthRobin.getResult('updateOrganizationThemeSettings');
            handleToastOpen('success', updatedInfo.message);
        }).catch(err => {
            if (err.response.status === 404) {
                OrganizationSettings_SimplusAuthRobin.when(OrganizationSettings_SimplusAuthRobin.post('createOrganizationThemeSettings', `/organization/${organizationId}/theme_settings`, {
                    logo_url: themeSetting.logoUrl,
                    login_background_color: themeSetting.authContainerBackgroundColor,
                    page_background_color: themeSetting.pageBackgroundColor,
                    font_color: themeSetting.fontColor
                })).then(() => {
                    const createOrganizationThemeSetting = OrganizationSettings_SimplusAuthRobin.getResult('createOrganizationThemeSettings');
                    handleToastOpen('success', createOrganizationThemeSetting.message);
                }).catch(err => {
                    handleToastOpen('error', err.response.data.message);
                });
            }
            else {
                handleToastOpen('error', err.response.data.message);
            }
        });
    };
    const getOrganizationProfile = (id) => {
        OrganizationSettings_SimplusAuthRobin.when(OrganizationSettings_SimplusAuthRobin.get('organizationInfo', `/organization/${id}`)).then(() => {
            const organizationInfo = OrganizationSettings_SimplusAuthRobin.getResult('organizationInfo').data[0];
            setOrgProfile(Object.assign({}, orgProfile, { name: organizationInfo.name ? organizationInfo.name : '', address: organizationInfo.address ? organizationInfo.address : '', type: organizationInfo.type ? organizationInfo.type : '', contactNo: organizationInfo.contact_no ? organizationInfo.contact_no : '' }));
        }).catch(err => {
            handleToastOpen('error', err.response.data.message);
        });
    };
    const getOrganizationThemeSettings = (id) => {
        OrganizationSettings_SimplusAuthRobin.when(OrganizationSettings_SimplusAuthRobin.get('organizationThemeSettings', `/organization/${id}/theme_settings`)).then(() => {
            const organizationThemeSettings = OrganizationSettings_SimplusAuthRobin.getResult('organizationThemeSettings').data[0];
            setThemeSetting(Object.assign({}, themeSetting, { logoUrl: organizationThemeSettings.logo_url ? organizationThemeSettings.logo_url : '', authContainerBackgroundColor: organizationThemeSettings.login_background_color ? organizationThemeSettings.login_background_color : '', pageBackgroundColor: organizationThemeSettings.page_background_color ? organizationThemeSettings.page_background_color : '', fontColor: organizationThemeSettings.font_color ? organizationThemeSettings.font_color : '' }));
        }).catch(err => {
            handleToastOpen('error', err.response.data.message);
        });
    };
    const getOrganizationInvitees = (id) => {
        OrganizationSettings_SimplusAuthRobin.when(OrganizationSettings_SimplusAuthRobin.get('organizationInvitees', `/organization/${id}/invitees`)).then(() => {
            const organizationInvitees = OrganizationSettings_SimplusAuthRobin.getResult('organizationInvitees').data;
            setInvitee(Object.assign({}, invitee, { inviteeList: organizationInvitees }));
        }).catch(err => {
            handleToastOpen('error', err.response.data.message);
        });
    };
    const menuResendHandleClick = (organizationId, invitorId, inviteeId) => {
        OrganizationSettings_SimplusAuthRobin.when(OrganizationSettings_SimplusAuthRobin.post('resendInvitation', `/organization/${organizationId}/invitees/${inviteeId}/resend`, {
            invitorId: invitorId
        })).then(() => {
            const resendInvitation = OrganizationSettings_SimplusAuthRobin.getResult('resendInvitation');
            handleToastOpen('success', resendInvitation.message);
            getOrganizationInvitees(organizationId);
        }).catch(err => {
            handleToastOpen('error', err.response.data.message);
        });
    };
    const menuDeleteHandleClick = (organizationId, inviteeId) => {
        OrganizationSettings_SimplusAuthRobin.when(OrganizationSettings_SimplusAuthRobin.delete('deleteInvitation', `/organization/${organizationId}/invitees/${inviteeId}`)).then(() => {
            const deleteInvitation = OrganizationSettings_SimplusAuthRobin.getResult('deleteInvitation');
            handleToastOpen('success', deleteInvitation.message);
            getOrganizationInvitees(organizationId);
        }).catch(err => {
            handleToastOpen('error', err.response.data.message);
        });
    };
    const onCancelOrganizationProfile = () => {
        getOrganizationProfile(organizationId);
    };
    const onCancelOrganizationThemeSettings = () => {
        getOrganizationProfile(organizationId);
    };
    Object(react["useEffect"])(() => {
        getOrganizationProfile(organizationId);
        getOrganizationThemeSettings(organizationId);
        getOrganizationInvitees(organizationId);
    }, []);
    return (react_default.a.createElement(ErrorBoundary_ErrorBoundary, null,
        react_default.a.createElement(Toast, { open: notification.toastOpen, variant: notification.toastVariant, message: notification.toastMessage, handleToastClose: handleToastClose }),
        react_default.a.createElement(Grid["a" /* default */], { container: true },
            react_default.a.createElement(Typography["a" /* default */], { variant: 'h5', display: 'block', gutterBottom: true }, "Organization Settings")),
        react_default.a.createElement(Grid["a" /* default */], { container: true },
            react_default.a.createElement(AppBar["a" /* default */], { position: 'static', color: 'default' },
                react_default.a.createElement(Tabs["a" /* default */], { value: value, onChange: handleChange, indicatorColor: 'secondary', variant: 'scrollable', scrollButtons: 'auto', "aria-label": 'scrollable auto tabs example' },
                    react_default.a.createElement(Tab["a" /* default */], Object.assign({ label: 'Profile' }, a11yProps(0))),
                    react_default.a.createElement(Tab["a" /* default */], Object.assign({ label: 'Theme Settings' }, a11yProps(1))),
                    react_default.a.createElement(Tab["a" /* default */], Object.assign({ label: 'Invitations' }, a11yProps(2))))),
            react_default.a.createElement(TabPanel, { value: value, index: 0 },
                react_default.a.createElement("form", { className: classes.form, autoComplete: 'off', onSubmit: submitOrganizationProfile },
                    react_default.a.createElement(TextField["a" /* default */], { variant: 'filled', margin: 'normal', required: true, fullWidth: true, id: 'name', label: 'Name', type: 'name', name: 'name', value: orgProfile.name, autoComplete: 'name', autoFocus: true, onChange: handleFormChange('name') }),
                    react_default.a.createElement(TextField["a" /* default */], { variant: 'filled', margin: 'normal', fullWidth: true, name: 'address', label: 'Address', type: 'address', value: orgProfile.address, id: 'address', autoComplete: 'address', onChange: handleFormChange('address') }),
                    react_default.a.createElement(TextField["a" /* default */], { variant: 'filled', margin: 'normal', fullWidth: true, name: 'type', label: 'Type', type: 'type', value: orgProfile.type, id: 'type', autoComplete: 'type', onChange: handleFormChange('type') }),
                    react_default.a.createElement(TextField["a" /* default */], { variant: 'filled', margin: 'normal', fullWidth: true, name: 'contactNo', label: 'Contact No', value: orgProfile.contactNo, type: 'type', id: 'contactNo', autoComplete: 'contactNo', onChange: handleFormChange('contactNo') }),
                    react_default.a.createElement("div", { style: { float: 'right' } },
                        react_default.a.createElement(Button["a" /* default */], { variant: 'contained', size: 'medium', className: classes.submit, color: 'default', onClick: onCancelOrganizationProfile },
                            react_default.a.createElement(SaveTwoTone["a" /* default */], { className: Object(clsx_m["a" /* default */])(classes.leftIcon, classes.iconSmall) }),
                            "Cancel"),
                        react_default.a.createElement(Button["a" /* default */], { variant: 'contained', size: 'medium', className: classes.submit, color: 'secondary', type: 'submit' },
                            react_default.a.createElement(SaveTwoTone["a" /* default */], { className: Object(clsx_m["a" /* default */])(classes.leftIcon, classes.iconSmall) }),
                            "Save")))),
            react_default.a.createElement(TabPanel, { value: value, index: 1 },
                react_default.a.createElement("form", { className: classes.form, autoComplete: 'off', onSubmit: submitThemeSettings },
                    react_default.a.createElement(TextField["a" /* default */], { variant: 'filled', margin: 'normal', required: true, fullWidth: true, id: 'logoUrl', label: 'Logo Url', type: 'text', name: 'logoUrl', value: themeSetting.logoUrl, autoComplete: 'logoUrl', autoFocus: true, onChange: handleThemeFormChange('logoUrl') }),
                    react_default.a.createElement(TextField["a" /* default */], { variant: 'filled', margin: 'normal', required: true, fullWidth: true, name: 'authContainerBackgroundColor', label: 'Auth Container Bacground Color', type: 'text', value: themeSetting.authContainerBackgroundColor, id: 'authContainerBackgroundColor', autoComplete: 'authContainerBackgroundColor', onChange: handleThemeFormChange('authContainerBackgroundColor') }),
                    react_default.a.createElement(TextField["a" /* default */], { variant: 'filled', margin: 'normal', required: true, fullWidth: true, name: 'pageBackgroundColor', label: 'Page Background Color', type: 'text', value: themeSetting.pageBackgroundColor, id: 'pageBackgroundColor', autoComplete: 'pageBackgroundColor', onChange: handleThemeFormChange('pageBackgroundColor') }),
                    react_default.a.createElement(TextField["a" /* default */], { variant: 'filled', margin: 'normal', required: true, fullWidth: true, name: 'fontColor', label: 'Font Color', type: 'text', id: 'fontColor', value: themeSetting.fontColor, autoComplete: 'fontColor', onChange: handleThemeFormChange('fontColor') }),
                    react_default.a.createElement("div", { style: { float: 'right' } },
                        react_default.a.createElement(Button["a" /* default */], { variant: 'contained', size: 'medium', className: classes.submit, color: 'default', onClick: onCancelOrganizationThemeSettings },
                            react_default.a.createElement(SaveTwoTone["a" /* default */], { className: Object(clsx_m["a" /* default */])(classes.leftIcon, classes.iconSmall) }),
                            "Cancel"),
                        react_default.a.createElement(Button["a" /* default */], { variant: 'contained', size: 'medium', className: classes.submit, color: 'secondary', type: 'submit' },
                            react_default.a.createElement(SaveTwoTone["a" /* default */], { className: Object(clsx_m["a" /* default */])(classes.leftIcon, classes.iconSmall) }),
                            "Save")))),
            react_default.a.createElement(TabPanel, { value: value, index: 2 }, invitee.inviteeList.length ?
                react_default.a.createElement(List["a" /* default */], { className: classes.root }, invitee.inviteeList.map((invitee, index) => {
                    return react_default.a.createElement("div", { key: index },
                        react_default.a.createElement(ListItem["a" /* default */], { alignItems: 'flex-start' },
                            react_default.a.createElement(ListItemAvatar["a" /* default */], null,
                                react_default.a.createElement(Avatar["a" /* default */], { alt: 'Remy Sharp', src: '/src/assets/img/simplus-logo.png' })),
                            react_default.a.createElement(ListItemText["a" /* default */], { primary: 'Invitee Name', secondary: react_default.a.createElement(react_default.a.Fragment, null, invitee.invitee_name) }),
                            react_default.a.createElement(ListItemText["a" /* default */], { primary: 'Invitee Email', secondary: react_default.a.createElement(react_default.a.Fragment, null, invitee.invitee_email) }),
                            react_default.a.createElement(ListItemText["a" /* default */], { primary: 'Invitor Name', secondary: react_default.a.createElement(react_default.a.Fragment, null, invitee.invitor_name) }),
                            react_default.a.createElement(ListItemText["a" /* default */], { primary: 'Status', secondary: react_default.a.createElement(Typography["a" /* default */], { component: 'div', variant: 'body2' }, invitee.status === 'expired' ?
                                    react_default.a.createElement(Chip["a" /* default */], { style: { margin: 0 }, color: 'secondary', size: 'small', label: invitee.status, className: classes.chip })
                                    :
                                        invitee.status === 'failed' ?
                                            react_default.a.createElement(Chip["a" /* default */], { style: { margin: 0, backgroundColor: 'orange' }, size: 'small', label: invitee.status, className: classes.chip })
                                            :
                                                react_default.a.createElement(Chip["a" /* default */], { style: { margin: 0, backgroundColor: '#79d479' }, size: 'small', label: invitee.status, className: classes.chip })) }),
                            react_default.a.createElement(ListItemSecondaryAction["a" /* default */], null,
                                react_default.a.createElement(Menu["a" /* default */], { id: 'simple-menu', anchorEl: menuAnchorEl.item, keepMounted: true, open: Boolean(menuAnchorEl) && menuAnchorEl.index === index, onClose: menuHandleClose },
                                    react_default.a.createElement(MenuItem["a" /* default */], { onClick: () => menuResendHandleClick(invitee.organization_id, invitee.invitor_id, invitee.invitee_id) }, "Resend"),
                                    react_default.a.createElement(MenuItem["a" /* default */], { disabled: invitee.status === 'expired' || invitee.status === 'failed' ? false : true, onClick: () => menuDeleteHandleClick(invitee.organization_id, invitee.invitee_id) }, "Delete")),
                                react_default.a.createElement(IconButton["a" /* default */], { edge: 'end', "aria-label": 'delete', "aria-controls": 'simple-menu', "aria-haspopup": 'true', onClick: menuHandleClick(index) },
                                    react_default.a.createElement(MoreVertTwoTone["a" /* default */], null)))));
                }))
                :
                    react_default.a.createElement("div", null, "There is no invitation to organization")))));
};
/* harmony default export */ var OrganizationSettings_OrganizationSettings = (OrganizationSettings);

// CONCATENATED MODULE: ./src/views/OrganizationSettings/SwitchOrganization.tsx









const { SimplusAuthRobin: SwitchOrganization_SimplusAuthRobin } = robins;
const SwitchOrganization_useStyles = Object(makeStyles["a" /* default */])((theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2, 2),
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
    iconSmall: {
        fontSize: 20,
    },
    root: {
        width: '100%',
        backgroundColor: '#f5f5f5',
    },
    inline: {
        display: 'inline',
    },
    chip: {
        margin: theme.spacing(1),
    },
}));
const SwitchOrganization = (props) => {
    const classes = SwitchOrganization_useStyles();
    const getLoggedInUser = () => {
        return SwitchOrganization_SimplusAuthRobin.getResult('loggedInUserInfo');
    };
    const loggedInUser = getLoggedInUser();
    const [selectOrganization, setSelectOrganization] = react_default.a.useState(null);
    const [modalOpen, setModalOpen] = react_default.a.useState(false);
    const [notification, setNotification] = react_default.a.useState({
        toastOpen: false,
        toastVariant: undefined,
        toastMessage: undefined
    });
    const [newOrganization, setNewOrganization] = react_default.a.useState({
        name: '',
        type: '',
        address: '',
        contact_no: '',
    });
    const [organizationList, setOrganizationList] = react_default.a.useState({
        organizations: []
    });
    const handleToastClose = (_event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotification(Object.assign({}, notification, { toastOpen: false, toastMessage: undefined }));
    };
    const handleToastOpen = (toastVariant, toastMessage) => {
        setNotification(Object.assign({}, notification, { toastOpen: true, toastVariant: toastVariant, toastMessage: toastMessage }));
    };
    const handleModalOpen = () => {
        setModalOpen(true);
    };
    const handleModalClose = () => {
        setModalOpen(false);
    };
    const [menuAnchorEl, menuSetAnchorEl] = react_default.a.useState({ item: null, index: null });
    const menuHandleClick = i => event => {
        menuSetAnchorEl(Object.assign({}, menuAnchorEl, { item: event.currentTarget, index: i }));
    };
    const menuHandleClose = () => {
        menuSetAnchorEl(Object.assign({}, menuAnchorEl, { item: null, index: null }));
    };
    const [menuConfirmOpen, menuConfirmSetOpen] = react_default.a.useState(false);
    const [menuSelectConfirmOpen, menuSelectConfirmSetOpen] = react_default.a.useState(false);
    const menuConfirmHandleClickOpen = (orgId) => {
        setSelectOrganization(orgId);
        menuConfirmSetOpen(true);
    };
    const menuConfirmHandleClose = () => {
        setSelectOrganization(null);
        menuConfirmSetOpen(false);
    };
    const menuSelectConfirmHandleClickOpen = (orgId) => {
        console.log(orgId);
        setSelectOrganization(orgId);
        menuSelectConfirmSetOpen(true);
    };
    const menuSelectConfirmHandleClose = () => {
        setSelectOrganization(null);
        menuSelectConfirmSetOpen(false);
    };
    const handleCreateAppForm = (prop) => (event) => {
        setNewOrganization(Object.assign({}, newOrganization, { [prop]: event.target.value }));
    };
    const deleteOrg = (orgId) => {
        if (!orgId) {
            handleToastOpen('warning', 'Org id missing!');
        }
        else {
            SwitchOrganization_SimplusAuthRobin.when(SwitchOrganization_SimplusAuthRobin.delete('deleteOrg', `/organization/${orgId}`)).then(() => {
                handleToastOpen('success', 'Organization deleted successfully!');
                menuConfirmHandleClose();
                fetchOrganizations();
            }).catch(err => {
                handleToastOpen('error', err.response.data.message);
            });
        }
    };
    const switchOrganization = (orgId) => {
        if (!orgId) {
            handleToastOpen('warning', 'Org id missing!');
        }
        else {
            SwitchOrganization_SimplusAuthRobin.when(SwitchOrganization_SimplusAuthRobin.put('switchOrg', `/organization/${orgId}`, {
                by_default: true
            })).then(() => {
                handleToastOpen('success', 'Organization updated successfully!');
                menuSelectConfirmHandleClose();
                fetchOrganizations();
                location.reload();
            }).catch(err => {
                handleToastOpen('error', err.response.data.message);
            });
        }
    };
    const onSelectDeleteMenu = () => {
        menuHandleClose();
        if (!selectOrganization) {
            handleToastOpen('warning', 'Organization id missing!');
        }
        else {
            deleteOrg(selectOrganization);
        }
    };
    const onSelectOrganizationMenu = () => {
        menuHandleClose();
        if (!selectOrganization) {
            handleToastOpen('warning', 'Organization id missing!');
        }
        else {
            switchOrganization(selectOrganization);
        }
    };
    const fetchOrganizations = () => {
        SwitchOrganization_SimplusAuthRobin.when(SwitchOrganization_SimplusAuthRobin.get('orgList', `/organization`)).then(() => {
            const organizations = SwitchOrganization_SimplusAuthRobin.getResult('orgList').data;
            if (organizations.length) {
                const orgDataMapping = organizations.map((org) => {
                    return {
                        id: org.id,
                        name: org.name,
                        type: org.type,
                        selected: org.by_default,
                        logo_url: '',
                        contact_no: org.contact_no,
                        address: org.address
                    };
                });
                setOrganizationList(Object.assign({}, organizationList, { organizations: orgDataMapping }));
            }
        }).catch(err => {
            handleToastOpen('error', err.response.data.message);
        });
    };
    const submitNewOrg = () => {
        if (!newOrganization.name) {
            handleToastOpen('warning', 'Name is required!');
        }
        else {
            SwitchOrganization_SimplusAuthRobin.when(SwitchOrganization_SimplusAuthRobin.post('createOrg', `/organization`, {
                'name': newOrganization.name,
                'type': newOrganization.type ? newOrganization.type : null,
                'address': newOrganization.address ? newOrganization.address : null,
                'contact_no': newOrganization.contact_no ? newOrganization.contact_no : null,
            })).then(() => {
                handleToastOpen('success', 'New organization added. You can see details in organization settings!');
                handleModalClose();
                setNewOrganization({ name: '', type: '', address: '', contact_no: '' });
                fetchOrganizations();
            }).catch(err => {
                handleToastOpen('error', err.response.data.message);
            });
        }
    };
    const createOrganizationFields = ([
        react_default.a.createElement(TextField["a" /* default */], { variant: 'filled', margin: 'normal', required: true, fullWidth: true, key: 1, id: 'name', label: 'Full Name', name: 'name', autoComplete: 'Organization Name', onChange: handleCreateAppForm('name'), autoFocus: true }),
        react_default.a.createElement(TextField["a" /* default */], { variant: 'filled', margin: 'normal', fullWidth: true, key: 2, id: 'type', label: 'Type', name: 'type', autoComplete: 'type', onChange: handleCreateAppForm('type'), autoFocus: true }),
        react_default.a.createElement(TextField["a" /* default */], { variant: 'filled', margin: 'normal', fullWidth: true, key: 3, id: 'address', label: 'Address', name: 'address', autoComplete: 'address', onChange: handleCreateAppForm('address'), autoFocus: true }),
        react_default.a.createElement(TextField["a" /* default */], { variant: 'filled', margin: 'normal', fullWidth: true, key: 4, id: 'contact_no', label: 'Contact No', name: 'contact_no', autoComplete: 'contact_no', onChange: handleCreateAppForm('contact_no'), autoFocus: true })
    ]);
    const handleViewClick = (redirectTo) => {
        props.history.push(redirectTo);
    };
    Object(react["useEffect"])(() => {
        fetchOrganizations();
    }, []);
    return (react_default.a.createElement(ErrorBoundary_ErrorBoundary, null,
        react_default.a.createElement(Toast, { open: notification.toastOpen, variant: notification.toastVariant, message: notification.toastMessage, handleToastClose: handleToastClose }),
        react_default.a.createElement(ModalComponent, { subHeading: 'You can update your information later in the organization details view.', open: modalOpen, handleOpen: handleModalOpen, handleClose: handleModalClose, heading: 'Add New Organization', formFields: createOrganizationFields, submit: submitNewOrg }),
        react_default.a.createElement(ConfirmModalComponent, { open: menuConfirmOpen, handleClose: menuConfirmHandleClose, heading: 'Confirmation', submit: onSelectDeleteMenu }),
        react_default.a.createElement(ConfirmModalComponent, { subHeading: 'Are you sure you want to switch to this organization.', open: menuSelectConfirmOpen, handleClose: menuSelectConfirmHandleClose, heading: 'Confirmation', submit: onSelectOrganizationMenu }),
        react_default.a.createElement(Grid["a" /* default */], { container: true, spacing: 5 },
            react_default.a.createElement(Grid["a" /* default */], { item: true, xs: true },
                react_default.a.createElement(Typography["a" /* default */], { variant: 'h5', display: 'block', gutterBottom: true }, "Organizations")),
            react_default.a.createElement(Grid["a" /* default */], { item: true, xs: true, style: { display: 'flex', justifyContent: 'flex-end' } },
                react_default.a.createElement(Button["a" /* default */], { variant: 'contained', size: 'medium', className: classes.submit, color: 'secondary', type: 'submit', onClick: handleModalOpen },
                    react_default.a.createElement(CreateTwoTone["a" /* default */], { className: Object(clsx_m["a" /* default */])(classes.leftIcon, classes.iconSmall) }),
                    "Create Organization"))),
        react_default.a.createElement(Grid["a" /* default */], { container: true }, organizationList.organizations.length ?
            react_default.a.createElement(List["a" /* default */], { className: classes.root }, organizationList.organizations.map((org, index) => {
                return [
                    react_default.a.createElement(ListItem["a" /* default */], { alignItems: 'flex-start', key: index },
                        react_default.a.createElement(ListItemAvatar["a" /* default */], null,
                            react_default.a.createElement(Avatar["a" /* default */], { alt: org.name, src: org.logo_url ? org.logo_url : '/src/assets/img/simplus-logo.png' })),
                        react_default.a.createElement(ListItemText["a" /* default */], { primary: react_default.a.createElement(Typography["a" /* default */], { variant: 'h6', style: { marginRight: '10px' } }, org.name), secondary: react_default.a.createElement(react_default.a.Fragment, null, org.type) }),
                        react_default.a.createElement(ListItemText["a" /* default */], { primary: 'Contact #', secondary: react_default.a.createElement(react_default.a.Fragment, null, org.contact_no) }),
                        react_default.a.createElement(ListItemText["a" /* default */], { primary: 'Selected', secondary: react_default.a.createElement(Typography["a" /* default */], { component: 'div', variant: 'body2' }, org.selected ?
                                react_default.a.createElement(Chip["a" /* default */], { style: { margin: 0, backgroundColor: '#79d479' }, size: 'small', label: `${org.selected}`, className: classes.chip })
                                :
                                    react_default.a.createElement(Chip["a" /* default */], { style: { margin: 0 }, color: 'secondary', size: 'small', label: `${org.selected}`, className: classes.chip })) }),
                        react_default.a.createElement(ListItemSecondaryAction["a" /* default */], null,
                            react_default.a.createElement(Menu["a" /* default */], { id: `simple-menu-${org.id}`, anchorEl: menuAnchorEl.item, keepMounted: true, open: Boolean(menuAnchorEl) && menuAnchorEl.index === index, onClose: menuHandleClose },
                                react_default.a.createElement(MenuItem["a" /* default */], { onClick: () => handleViewClick(`/admin/organization/${org.id ? org.id : null}/settings`) }, "View/Update"),
                                react_default.a.createElement(MenuItem["a" /* default */], { onClick: () => menuSelectConfirmHandleClickOpen(org.id) }, "Select"),
                                react_default.a.createElement(MenuItem["a" /* default */], { disabled: true, onClick: () => menuConfirmHandleClickOpen(org.id) }, "Delete")),
                            react_default.a.createElement(IconButton["a" /* default */], { edge: 'end', "aria-label": 'delete', "aria-controls": `simple-menu-${org.id}`, "aria-haspopup": 'true', onClick: menuHandleClick(index) },
                                react_default.a.createElement(MoreVertTwoTone["a" /* default */], null)))),
                    organizationList.organizations.length - 1 !== index ? react_default.a.createElement(Divider["a" /* default */], { key: `div-${index}`, variant: 'inset', component: 'li' }) : null
                ];
            }))
            :
                react_default.a.createElement("div", null, "There are no organizations."))));
};
/* harmony default export */ var OrganizationSettings_SwitchOrganization = (SwitchOrganization);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(42);

// CONCATENATED MODULE: ./src/views/OrganizationProfile/OrganizationProfile.tsx





const { SimplusAuthRobin: OrganizationProfile_SimplusAuthRobin } = robins;
const OrganizationProfile_useStyles = Object(makeStyles["a" /* default */])((theme) => ({
    root: {
        padding: theme.spacing(3, 2),
    },
    bigAvatar: {
        margin: 10,
        width: 150,
        height: 150,
    },
}));
const OrganizationProfile = (props) => {
    const classes = OrganizationProfile_useStyles();
    const [notification, setNotification] = react_default.a.useState({
        toastOpen: false,
        toastVariant: undefined,
        toastMessage: undefined
    });
    const [organization, setOrganization] = react_default.a.useState({
        name: '',
        type: '',
        address: '',
        contactNo: '',
        owner: '',
        pictureUrl: ''
    });
    const organizationId = (props.match && props.match.params.organizationId) ? props.match.params.organizationId : undefined;
    const handleToastClose = (_event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotification(Object.assign({}, notification, { toastOpen: false, toastMessage: undefined }));
    };
    const handleToastOpen = (toastVariant, toastMessage) => {
        setNotification(Object.assign({}, notification, { toastOpen: true, toastVariant: toastVariant, toastMessage: toastMessage }));
    };
    Object(react["useEffect"])(() => {
        OrganizationProfile_SimplusAuthRobin.when(OrganizationProfile_SimplusAuthRobin.get('organizationInfo', `/organization/${organizationId}`)).then(() => {
            const organizationInfo = OrganizationProfile_SimplusAuthRobin.getResult('organizationInfo').data[0];
            setOrganization(Object.assign({}, organization, { name: organizationInfo.name, type: organizationInfo.type, address: organizationInfo.address, contactNo: organizationInfo.contact_no, owner: organizationInfo.owner, pictureUrl: '' }));
        }).catch(err => {
            handleToastOpen('error', err.response.data.message);
        });
    }, []);
    return (react_default.a.createElement(ErrorBoundary_ErrorBoundary, null,
        react_default.a.createElement(Grid["a" /* default */], { container: true, direction: 'column' },
            react_default.a.createElement(Toast, { open: notification.toastOpen, variant: notification.toastVariant, message: notification.toastMessage, handleToastClose: handleToastClose }),
            react_default.a.createElement(Grid["a" /* default */], { item: true, xs: true },
                react_default.a.createElement(Typography["a" /* default */], { variant: 'h5', display: 'block', gutterBottom: true }, "Organization Profile")),
            react_default.a.createElement(Grid["a" /* default */], { item: true, xs: true },
                react_default.a.createElement(Paper["a" /* default */], { className: classes.root },
                    react_default.a.createElement(Grid["a" /* default */], { container: true },
                        react_default.a.createElement(Grid["a" /* default */], { item: true, xs: 12, sm: 12, md: 4, lg: 4 },
                            react_default.a.createElement(Avatar["a" /* default */], { alt: organization.name ? organization.name : 'simplus-logo', src: organization.pictureUrl ? organization.pictureUrl : '/src/assets/img/simplus-logo.png', className: classes.bigAvatar })),
                        react_default.a.createElement(Grid["a" /* default */], { item: true, xs: 12, sm: 12, md: 8, lg: 8 },
                            react_default.a.createElement(Grid["a" /* default */], { container: true },
                                react_default.a.createElement(Grid["a" /* default */], { item: true, xs: true },
                                    react_default.a.createElement(Grid["a" /* default */], { container: true, direction: 'column', justify: 'center', spacing: 3 },
                                        react_default.a.createElement(Grid["a" /* default */], { item: true, xs: true },
                                            react_default.a.createElement(Typography["a" /* default */], { variant: 'caption' }, "NAME"),
                                            react_default.a.createElement(Typography["a" /* default */], { variant: 'h6' }, organization.name ? organization.name : '')),
                                        react_default.a.createElement(Grid["a" /* default */], { item: true, xs: true },
                                            react_default.a.createElement(Typography["a" /* default */], { variant: 'caption' }, "ADDRESS"),
                                            react_default.a.createElement(Typography["a" /* default */], { variant: 'h6' }, organization.address ? organization.address : '')),
                                        react_default.a.createElement(Grid["a" /* default */], { item: true, xs: true },
                                            react_default.a.createElement(Typography["a" /* default */], { variant: 'caption' }, "CONTACT NO"),
                                            react_default.a.createElement(Typography["a" /* default */], { variant: 'h6' }, organization.contactNo ? organization.contactNo : '')))),
                                react_default.a.createElement(Grid["a" /* default */], { item: true, xs: true, style: { display: 'flex' } },
                                    react_default.a.createElement(Grid["a" /* default */], { container: true, direction: 'column', justify: 'space-between', style: { flexGrow: 1 } },
                                        react_default.a.createElement(Grid["a" /* default */], { item: true, xs: true },
                                            react_default.a.createElement(Typography["a" /* default */], { variant: 'caption' }, "TYPE"),
                                            react_default.a.createElement(Typography["a" /* default */], { variant: 'h6' }, organization.type ? organization.type : '')),
                                        react_default.a.createElement(Grid["a" /* default */], { item: true, xs: true, style: { display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' } },
                                            react_default.a.createElement(Typography["a" /* default */], { variant: 'caption' }, "OWNER"),
                                            react_default.a.createElement(Typography["a" /* default */], { variant: 'h6' }, organization.owner ? organization.owner : ''))))))))))));
};
/* harmony default export */ var OrganizationProfile_OrganizationProfile = (OrganizationProfile);

// CONCATENATED MODULE: ./src/views/Users/UserProfile.tsx
var UserProfile_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};






const { SimplusAuthRobin: UserProfile_SimplusAuthRobin } = robins;
const UserProfile_useStyles = Object(makeStyles["a" /* default */])((theme) => ({
    root: {
        padding: theme.spacing(3, 2),
    },
    bigAvatar: {
        margin: 10,
        width: 150,
        height: 150,
    },
}));
const UserProfile = (_a) => {
    var props = UserProfile_rest(_a, []);
    const classes = UserProfile_useStyles();
    const [notification, setNotification] = react_default.a.useState({
        toastOpen: false,
        toastVariant: undefined,
        toastMessage: undefined
    });
    const [user, setUser] = react_default.a.useState({
        name: '',
        email: '',
        emailVerifed: false,
        pictureUrl: ''
    });
    const adminId = (props.match && props.match.params.userId) ? props.match.params.userId : undefined;
    const handleToastClose = (_event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotification(Object.assign({}, notification, { toastOpen: false, toastMessage: undefined }));
    };
    const handleToastOpen = (toastVariant, toastMessage) => {
        setNotification(Object.assign({}, notification, { toastOpen: true, toastVariant: toastVariant, toastMessage: toastMessage }));
    };
    Object(react["useEffect"])(() => {
        UserProfile_SimplusAuthRobin.when(UserProfile_SimplusAuthRobin.get('adminUserInfo', `/users/${adminId}`)).then(() => {
            const userInfo = UserProfile_SimplusAuthRobin.getResult('adminUserInfo').data;
            setUser(Object.assign({}, user, { name: userInfo.name, email: userInfo.email, emailVerifed: userInfo.email_verified, pictureUrl: userInfo.picture_url }));
        }).catch(err => {
            handleToastOpen('error', err.response.data.message);
        });
    }, []);
    return (react_default.a.createElement(ErrorBoundary_ErrorBoundary, null,
        react_default.a.createElement(Grid["a" /* default */], { container: true, direction: 'column' },
            react_default.a.createElement(Toast, { open: notification.toastOpen, variant: notification.toastVariant, message: notification.toastMessage, handleToastClose: handleToastClose }),
            react_default.a.createElement(Grid["a" /* default */], { item: true, xs: true },
                react_default.a.createElement(Typography["a" /* default */], { variant: 'h5', display: 'block', gutterBottom: true }, "Your Profile")),
            react_default.a.createElement(Grid["a" /* default */], { item: true, xs: true },
                react_default.a.createElement(Paper["a" /* default */], { className: classes.root },
                    react_default.a.createElement(Grid["a" /* default */], { container: true },
                        react_default.a.createElement(Grid["a" /* default */], { item: true, xs: 12, sm: 12, md: 4, lg: 4 },
                            react_default.a.createElement(Avatar["a" /* default */], { alt: user.name ? user.name : 'simplus-logo', src: user.pictureUrl ? user.pictureUrl : 'https://i.ibb.co/2kcsxxB/avatar.png', className: classes.bigAvatar })),
                        react_default.a.createElement(Grid["a" /* default */], { item: true, xs: 12, sm: 12, md: 8, lg: 8 },
                            react_default.a.createElement(Grid["a" /* default */], { container: true },
                                react_default.a.createElement(Grid["a" /* default */], { item: true, xs: true },
                                    react_default.a.createElement(Grid["a" /* default */], { container: true, direction: 'column', justify: 'center', spacing: 3 },
                                        react_default.a.createElement(Grid["a" /* default */], { item: true, xs: true },
                                            react_default.a.createElement(Typography["a" /* default */], { variant: 'caption' }, "NAME"),
                                            react_default.a.createElement(Typography["a" /* default */], { variant: 'h6' }, user.name ? user.name : '')),
                                        react_default.a.createElement(Grid["a" /* default */], { item: true, xs: true },
                                            react_default.a.createElement(Typography["a" /* default */], { variant: 'caption' }, "EMAIL"),
                                            react_default.a.createElement(Typography["a" /* default */], { variant: 'h6' }, user.email ? user.email : '')),
                                        react_default.a.createElement(Grid["a" /* default */], { item: true, xs: true, style: { display: 'flex', flexDirection: 'column' } },
                                            react_default.a.createElement(Typography["a" /* default */], { variant: 'caption' }, "Email Verified"),
                                            user.emailVerifed ?
                                                react_default.a.createElement(CheckCircleTwoTone["a" /* default */], { style: { color: 'green' } })
                                                :
                                                    react_default.a.createElement(CheckCircleTwoTone["a" /* default */], { style: { color: 'red' } }))))))))))));
};
/* harmony default export */ var Users_UserProfile = (UserProfile);

// CONCATENATED MODULE: ./src/views/Users/UserProfileSettings.tsx
var UserProfileSettings_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};







const { SimplusAuthRobin: UserProfileSettings_SimplusAuthRobin } = robins;
const UserProfileSettings_TabPanel = (props) => {
    const { children, value, index } = props, other = UserProfileSettings_rest(props, ["children", "value", "index"]);
    return (react_default.a.createElement(Typography["a" /* default */], Object.assign({ style: { flexGrow: 1 }, component: 'div', role: 'tabpanel', hidden: value !== index, id: `scrollable-auto-tabpanel-${index}`, "aria-labelledby": `scrollable-auto-tab-${index}` }, other),
        react_default.a.createElement(Box["a" /* default */], { p: 3 }, children)));
};
const UserProfileSettings_a11yProps = (index) => {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
};
const UserProfileSettings_useStyles = Object(makeStyles["a" /* default */])((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2, 2),
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
    iconSmall: {
        fontSize: 20,
    },
}));
const UserProfileSettings = (props) => {
    const classes = UserProfileSettings_useStyles();
    const [value, setValue] = react_default.a.useState(0);
    const [userProfile, setUserProfile] = react_default.a.useState({
        name: '',
        pictureUrl: ''
    });
    const [notification, setNotification] = react_default.a.useState({
        toastOpen: false,
        toastVariant: undefined,
        toastMessage: undefined
    });
    const adminId = (props.match && props.match.params.userId) ? props.match.params.userId : undefined;
    const getAdminInfo = (id) => {
        UserProfileSettings_SimplusAuthRobin.when(UserProfileSettings_SimplusAuthRobin.get('adminUserInfo', `/users/${id}`)).then(() => {
            const userInfo = UserProfileSettings_SimplusAuthRobin.getResult('adminUserInfo').data;
            setUserProfile(Object.assign({}, userProfile, { name: userInfo.name, pictureUrl: userInfo.picture_url ? userInfo.picture_url : '' }));
        }).catch(err => {
            handleToastOpen('error', err.response.data.message);
        });
    };
    const handleToastClose = (_event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotification(Object.assign({}, notification, { toastOpen: false, toastMessage: undefined }));
    };
    const handleToastOpen = (toastVariant, toastMessage) => {
        setNotification(Object.assign({}, notification, { toastOpen: true, toastVariant: toastVariant, toastMessage: toastMessage }));
    };
    const handleChange = (_event, newValue) => {
        setValue(newValue);
    };
    const handleFormChange = (prop) => (event) => {
        setUserProfile(Object.assign({}, userProfile, { [prop]: event.target.value }));
    };
    const submitUserProfileSettings = (event) => {
        event.preventDefault();
        UserProfileSettings_SimplusAuthRobin.when(UserProfileSettings_SimplusAuthRobin.put('updateAdminInfo', `/users/${adminId}`, {
            name: userProfile.name,
            picture_url: userProfile.pictureUrl
        })).then(() => {
            const updatedInfo = UserProfileSettings_SimplusAuthRobin.getResult('updateAdminInfo');
            handleToastOpen('success', updatedInfo.message);
        }).catch(err => {
            handleToastOpen('error', err.response.data.message);
        });
    };
    const onCancel = () => {
        getAdminInfo(adminId);
    };
    Object(react["useEffect"])(() => {
        getAdminInfo(adminId);
    }, []);
    return (react_default.a.createElement(ErrorBoundary_ErrorBoundary, null,
        react_default.a.createElement(Toast, { open: notification.toastOpen, variant: notification.toastVariant, message: notification.toastMessage, handleToastClose: handleToastClose }),
        react_default.a.createElement(Grid["a" /* default */], { container: true },
            react_default.a.createElement(Typography["a" /* default */], { variant: 'h5', display: 'block', gutterBottom: true }, "Your Profile Settings")),
        react_default.a.createElement(Grid["a" /* default */], { container: true },
            react_default.a.createElement(AppBar["a" /* default */], { position: 'static', color: 'default' },
                react_default.a.createElement(Tabs["a" /* default */], { value: value, onChange: handleChange, indicatorColor: 'secondary', variant: 'scrollable', scrollButtons: 'auto', "aria-label": 'scrollable auto tabs example' },
                    react_default.a.createElement(Tab["a" /* default */], Object.assign({ label: 'Profile' }, UserProfileSettings_a11yProps(0))))),
            react_default.a.createElement(UserProfileSettings_TabPanel, { value: value, index: 0 },
                react_default.a.createElement("form", { className: classes.form, autoComplete: 'off', onSubmit: submitUserProfileSettings },
                    react_default.a.createElement(TextField["a" /* default */], { variant: 'filled', margin: 'normal', required: true, fullWidth: true, id: 'name', label: 'Name', type: 'name', name: 'name', value: userProfile.name, autoComplete: 'name', autoFocus: true, onChange: handleFormChange('name') }),
                    react_default.a.createElement(TextField["a" /* default */], { variant: 'filled', margin: 'normal', fullWidth: true, id: 'pictureUrl', label: 'pictureUrl', type: 'text', value: userProfile.pictureUrl, name: 'pictureUrl', autoComplete: 'pictureUrl', autoFocus: true, onChange: handleFormChange('pictureUrl') }),
                    react_default.a.createElement("div", { style: { float: 'right' } },
                        react_default.a.createElement(Button["a" /* default */], { variant: 'contained', size: 'medium', className: classes.submit, color: 'default', onClick: onCancel },
                            react_default.a.createElement(SaveTwoTone["a" /* default */], { className: Object(clsx_m["a" /* default */])(classes.leftIcon, classes.iconSmall) }),
                            "Cancel"),
                        react_default.a.createElement(Button["a" /* default */], { variant: 'contained', size: 'medium', className: classes.submit, color: 'secondary', type: 'submit' },
                            react_default.a.createElement(SaveTwoTone["a" /* default */], { className: Object(clsx_m["a" /* default */])(classes.leftIcon, classes.iconSmall) }),
                            "Save")))))));
};
/* harmony default export */ var Users_UserProfileSettings = (UserProfileSettings);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/ArrowBackTwoTone.js
var ArrowBackTwoTone = __webpack_require__(108);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/LinearProgress/LinearProgress.js
var LinearProgress = __webpack_require__(143);

// CONCATENATED MODULE: ./src/views/Users/UserDetails.tsx
var UserDetails_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};







const { SimplusAuthRobin: UserDetails_SimplusAuthRobin } = robins;
const UserDetails_TabPanel = (props) => {
    const { children, value, index } = props, other = UserDetails_rest(props, ["children", "value", "index"]);
    return (react_default.a.createElement(Typography["a" /* default */], Object.assign({ style: { flexGrow: 1 }, component: 'div', role: 'tabpanel', hidden: value !== index, id: `scrollable-auto-tabpanel-${index}`, "aria-labelledby": `scrollable-auto-tab-${index}` }, other),
        react_default.a.createElement(Box["a" /* default */], { p: 3 }, children)));
};
const UserDetails_a11yProps = (index) => {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
};
const UserDetails_useStyles = Object(makeStyles["a" /* default */])((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2, 2),
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
    iconSmall: {
        fontSize: 20,
    },
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    backArrowButton: {
        marginRight: theme.spacing(2),
    },
}));
const UserDetails = (props) => {
    const classes = UserDetails_useStyles();
    const [value, setValue] = react_default.a.useState(0);
    const [progress, setProgress] = react_default.a.useState('none');
    const [userProfile, setUserProfile] = react_default.a.useState({
        name: '',
        pictureUrl: '',
        email: '',
        id: ''
    });
    const [notification, setNotification] = react_default.a.useState({
        toastOpen: false,
        toastVariant: undefined,
        toastMessage: undefined
    });
    const handleToastClose = (_event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotification(Object.assign({}, notification, { toastOpen: false, toastMessage: undefined }));
    };
    const handleToastOpen = (toastVariant, toastMessage) => {
        setNotification(Object.assign({}, notification, { toastOpen: true, toastVariant: toastVariant, toastMessage: toastMessage }));
    };
    const handleChange = (_event, newValue) => {
        setValue(newValue);
    };
    const handleFormChange = (prop) => (event) => {
        setUserProfile(Object.assign({}, userProfile, { [prop]: event.target.value }));
    };
    const handleBackClick = () => {
        props.history.goBack();
    };
    const userId = (props.match && props.match.params.userId) ? props.match.params.userId : undefined;
    const getUserInfo = (id) => {
        UserDetails_SimplusAuthRobin.when(UserDetails_SimplusAuthRobin.get('userInfo', `/users/${id}`)).then(() => {
            const userInfo = UserDetails_SimplusAuthRobin.getResult('userInfo').data;
            setUserProfile(Object.assign({}, userProfile, { name: userInfo.name, pictureUrl: userInfo.picture_url ? userInfo.picture_url : '', id: userInfo.id, email: userInfo.email }));
        }).catch(err => {
            handleToastOpen('error', err.response.data.message);
        });
    };
    const submitUserProfileSettings = (event) => {
        event.preventDefault();
        setProgress('block');
        UserDetails_SimplusAuthRobin.when(UserDetails_SimplusAuthRobin.put('updateUserInfo', `/users/${userId}`, {
            name: userProfile.name,
            picture_url: userProfile.pictureUrl
        })).then(() => {
            const updatedInfo = UserDetails_SimplusAuthRobin.getResult('updateUserInfo');
            handleToastOpen('success', updatedInfo.message);
            setProgress('none');
        }).catch(err => {
            handleToastOpen('error', err.response.data.message);
            setProgress('none');
        });
    };
    const onCancel = () => {
        getUserInfo(userId);
    };
    Object(react["useEffect"])(() => {
        getUserInfo(userId);
    }, []);
    return (react_default.a.createElement(ErrorBoundary_ErrorBoundary, null,
        react_default.a.createElement(Toast, { open: notification.toastOpen, variant: notification.toastVariant, message: notification.toastMessage, handleToastClose: handleToastClose }),
        react_default.a.createElement(Grid["a" /* default */], { container: true },
            react_default.a.createElement(List["a" /* default */], { className: classes.root },
                react_default.a.createElement(Toolbar["a" /* default */], { variant: 'dense' },
                    react_default.a.createElement(IconButton["a" /* default */], { onClick: handleBackClick, edge: 'start', className: classes.backArrowButton, color: 'inherit', "aria-label": 'menu' },
                        react_default.a.createElement(ArrowBackTwoTone["a" /* default */], null)),
                    react_default.a.createElement(Typography["a" /* default */], { variant: 'h6', color: 'inherit' }, "Back to Application")),
                react_default.a.createElement(ListItem["a" /* default */], { alignItems: 'flex-start' },
                    react_default.a.createElement(ListItemAvatar["a" /* default */], null,
                        react_default.a.createElement(Avatar["a" /* default */], { alt: userProfile.name, src: userProfile.pictureUrl ? userProfile.pictureUrl : '/src/assets/img/simplus-logo.png' })),
                    react_default.a.createElement(ListItemText["a" /* default */], { primary: react_default.a.createElement(Typography["a" /* default */], { variant: 'h6', style: { marginRight: '10px' } }, userProfile.name), secondary: react_default.a.createElement(react_default.a.Fragment, null, userProfile.id) })))),
        react_default.a.createElement(LinearProgress["a" /* default */], { color: 'primary', style: { display: progress } }),
        react_default.a.createElement(Grid["a" /* default */], { container: true },
            react_default.a.createElement(AppBar["a" /* default */], { position: 'static', color: 'default' },
                react_default.a.createElement(Tabs["a" /* default */], { value: value, onChange: handleChange, indicatorColor: 'secondary', variant: 'scrollable', scrollButtons: 'auto', "aria-label": 'scrollable auto tabs example' },
                    react_default.a.createElement(Tab["a" /* default */], Object.assign({ label: 'Profile' }, UserDetails_a11yProps(0))))),
            react_default.a.createElement(UserDetails_TabPanel, { value: value, index: 0 },
                react_default.a.createElement("form", { className: classes.form, autoComplete: 'off', onSubmit: submitUserProfileSettings },
                    react_default.a.createElement(TextField["a" /* default */], { variant: 'filled', margin: 'normal', fullWidth: true, id: 'email', label: 'Email', type: 'email', name: 'email', value: userProfile.email, autoComplete: 'email', autoFocus: true }),
                    react_default.a.createElement(TextField["a" /* default */], { variant: 'filled', margin: 'normal', required: true, fullWidth: true, id: 'name', label: 'Name', type: 'name', name: 'name', value: userProfile.name, autoComplete: 'name', autoFocus: true, onChange: handleFormChange('name') }),
                    react_default.a.createElement(TextField["a" /* default */], { variant: 'filled', margin: 'normal', fullWidth: true, id: 'pictureUrl', label: 'pictureUrl', type: 'text', value: userProfile.pictureUrl, name: 'pictureUrl', autoComplete: 'pictureUrl', autoFocus: true, onChange: handleFormChange('pictureUrl') }),
                    react_default.a.createElement("div", { style: { float: 'right' } },
                        react_default.a.createElement(Button["a" /* default */], { variant: 'contained', size: 'medium', className: classes.submit, color: 'default', onClick: onCancel },
                            react_default.a.createElement(SaveTwoTone["a" /* default */], { className: Object(clsx_m["a" /* default */])(classes.leftIcon, classes.iconSmall) }),
                            "Cancel"),
                        react_default.a.createElement(Button["a" /* default */], { variant: 'contained', size: 'medium', className: classes.submit, color: 'secondary', type: 'submit' },
                            react_default.a.createElement(SaveTwoTone["a" /* default */], { className: Object(clsx_m["a" /* default */])(classes.leftIcon, classes.iconSmall) }),
                            "Save")))))));
};
/* harmony default export */ var Users_UserDetails = (UserDetails);

// CONCATENATED MODULE: ./src/views/Projects/ProjectDetails.tsx
var ProjectDetails_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};







const { SimplusAuthRobin: ProjectDetails_SimplusAuthRobin } = robins;
const ProjectDetails_TabPanel = (props) => {
    const { children, value, index } = props, other = ProjectDetails_rest(props, ["children", "value", "index"]);
    return (react_default.a.createElement(Typography["a" /* default */], Object.assign({ style: { flexGrow: 1 }, component: 'div', role: 'tabpanel', hidden: value !== index, id: `scrollable-auto-tabpanel-${index}`, "aria-labelledby": `scrollable-auto-tab-${index}` }, other),
        react_default.a.createElement(Box["a" /* default */], { p: 3 }, children)));
};
const ProjectDetails_a11yProps = (index) => {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
};
const ProjectDetails_useStyles = Object(makeStyles["a" /* default */])((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2, 2),
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
    iconSmall: {
        fontSize: 20,
    },
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    backArrowButton: {
        marginRight: theme.spacing(2),
    },
}));
const ProjectDetails = (props) => {
    const classes = ProjectDetails_useStyles();
    const [value, setValue] = react_default.a.useState(0);
    const [Project, setProject] = react_default.a.useState({
        id: '',
        name: ''
    });
    const [notification, setNotification] = react_default.a.useState({
        toastOpen: false,
        toastVariant: undefined,
        toastMessage: undefined
    });
    const handleToastClose = (_event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotification(Object.assign({}, notification, { toastOpen: false, toastMessage: undefined }));
    };
    const handleToastOpen = (toastVariant, toastMessage) => {
        setNotification(Object.assign({}, notification, { toastOpen: true, toastVariant: toastVariant, toastMessage: toastMessage }));
    };
    const handleChange = (_event, newValue) => {
        setValue(newValue);
    };
    const handleFormChange = (prop) => (event) => {
        setProject(Object.assign({}, Project, { [prop]: event.target.value }));
    };
    const projectId = (props.match && props.match.params.projectId) ? props.match.params.projectId : null;
    const submitProjectSettings = (event) => {
        event.preventDefault();
        ProjectDetails_SimplusAuthRobin.when(ProjectDetails_SimplusAuthRobin.put('updatedProjectInfo', `/projects/${projectId}`, {
            name: Project.name,
        })).then(() => {
            ProjectDetails_SimplusAuthRobin.getResult('updatedProjectInfo');
            handleToastOpen('success', 'Project settings updated successfully!');
        }).catch(err => {
            handleToastOpen('error', 'Project settings failed to update!');
        });
    };
    const handleBackClick = () => {
        props.history.goBack();
    };
    const getProjectInfo = (projectId) => {
        ProjectDetails_SimplusAuthRobin.when(ProjectDetails_SimplusAuthRobin.get('projectInfo', `/projects/${projectId}`)).then(() => {
            const projectInfo = ProjectDetails_SimplusAuthRobin.getResult('projectInfo').data[0];
            setProject(Object.assign({}, Project, { name: projectInfo.name ? projectInfo.name : '', id: projectInfo.id ? projectInfo.id : '' }));
        }).catch(err => {
            handleToastOpen('error', err.response.data.message);
        });
    };
    Object(react["useEffect"])(() => {
        getProjectInfo(projectId);
    }, []);
    return (react_default.a.createElement(ErrorBoundary_ErrorBoundary, null,
        react_default.a.createElement(Toast, { open: notification.toastOpen, variant: notification.toastVariant, message: notification.toastMessage, handleToastClose: handleToastClose }),
        react_default.a.createElement(Grid["a" /* default */], { container: true },
            react_default.a.createElement(List["a" /* default */], { className: classes.root },
                react_default.a.createElement(Toolbar["a" /* default */], { variant: 'dense' },
                    react_default.a.createElement(IconButton["a" /* default */], { edge: 'start', onClick: handleBackClick, className: classes.backArrowButton, color: 'inherit', "aria-label": 'menu' },
                        react_default.a.createElement(ArrowBackTwoTone["a" /* default */], null)),
                    react_default.a.createElement(Typography["a" /* default */], { variant: 'h6', color: 'inherit' }, "Back to Projects")),
                react_default.a.createElement(ListItem["a" /* default */], { alignItems: 'flex-start' },
                    react_default.a.createElement(ListItemAvatar["a" /* default */], null,
                        react_default.a.createElement(Avatar["a" /* default */], { alt: 'Remy Sharp', src: '/src/assets/img/login-banner.jpeg' })),
                    react_default.a.createElement(ListItemText["a" /* default */], { primary: react_default.a.createElement(Typography["a" /* default */], { variant: 'h6', style: { marginRight: '10px' } }, Project.name), secondary: react_default.a.createElement(react_default.a.Fragment, null, Project.id) })))),
        react_default.a.createElement(Grid["a" /* default */], { container: true },
            react_default.a.createElement(AppBar["a" /* default */], { position: 'static', color: 'default' },
                react_default.a.createElement(Tabs["a" /* default */], { value: value, onChange: handleChange, indicatorColor: 'secondary', variant: 'scrollable', scrollButtons: 'auto', "aria-label": 'scrollable auto tabs example' },
                    react_default.a.createElement(Tab["a" /* default */], Object.assign({ label: 'Settings' }, ProjectDetails_a11yProps(0))))),
            react_default.a.createElement(ProjectDetails_TabPanel, { value: value, index: 0 },
                react_default.a.createElement("form", { className: classes.form, autoComplete: 'off', onSubmit: submitProjectSettings },
                    react_default.a.createElement(TextField["a" /* default */], { variant: 'filled', margin: 'normal', required: true, fullWidth: true, id: 'projectName', label: 'Project Name', name: 'projectName', value: Project.name, autoComplete: 'Project Name', autoFocus: true, onChange: handleFormChange('name') }),
                    react_default.a.createElement("div", { style: { float: 'right' } },
                        react_default.a.createElement(Button["a" /* default */], { variant: 'contained', size: 'medium', className: classes.submit, color: 'default' },
                            react_default.a.createElement(SaveTwoTone["a" /* default */], { className: Object(clsx_m["a" /* default */])(classes.leftIcon, classes.iconSmall) }),
                            "Cancel"),
                        react_default.a.createElement(Button["a" /* default */], { variant: 'contained', size: 'medium', className: classes.submit, color: 'secondary', type: 'submit' },
                            react_default.a.createElement(SaveTwoTone["a" /* default */], { className: Object(clsx_m["a" /* default */])(classes.leftIcon, classes.iconSmall) }),
                            "Save")))))));
};
/* harmony default export */ var Projects_ProjectDetails = (ProjectDetails);

// CONCATENATED MODULE: ./src/views/Customers/CustomerDetails.tsx
var CustomerDetails_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};







const { SimplusAuthRobin: CustomerDetails_SimplusAuthRobin } = robins;
const CustomerDetails_TabPanel = (props) => {
    const { children, value, index } = props, other = CustomerDetails_rest(props, ["children", "value", "index"]);
    return (react_default.a.createElement(Typography["a" /* default */], Object.assign({ style: { flexGrow: 1 }, component: 'div', role: 'tabpanel', hidden: value !== index, id: `scrollable-auto-tabpanel-${index}`, "aria-labelledby": `scrollable-auto-tab-${index}` }, other),
        react_default.a.createElement(Box["a" /* default */], { p: 3 }, children)));
};
const CustomerDetails_a11yProps = (index) => {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
};
const CustomerDetails_useStyles = Object(makeStyles["a" /* default */])((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2, 2),
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
    iconSmall: {
        fontSize: 20,
    },
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    backArrowButton: {
        marginRight: theme.spacing(2),
    },
}));
const CustomerDetails = (props) => {
    const classes = CustomerDetails_useStyles();
    const [value, setValue] = react_default.a.useState(0);
    const [progress, setProgress] = react_default.a.useState('none');
    const [customer, setCustomer] = react_default.a.useState({});
    const [notification, setNotification] = react_default.a.useState({
        toastOpen: false,
        toastVariant: undefined,
        toastMessage: undefined
    });
    const [customerFields, setCustomerFields] = react_default.a.useState({
        fields: []
    });
    const handleToastClose = (_event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotification(Object.assign({}, notification, { toastOpen: false, toastMessage: undefined }));
    };
    const handleToastOpen = (toastVariant, toastMessage) => {
        setNotification(Object.assign({}, notification, { toastOpen: true, toastVariant: toastVariant, toastMessage: toastMessage }));
    };
    const handleChange = (_event, newValue) => {
        setValue(newValue);
    };
    const handleFormChange = (prop) => (event) => {
        setCustomer(Object.assign({}, customer, { [prop]: event.target.value }));
    };
    const handleBackClick = () => {
        props.history.goBack();
    };
    const customerId = (props.match && props.match.params.customerId) ? props.match.params.customerId : undefined;
    const getCustomerInfo = (id) => {
        CustomerDetails_SimplusAuthRobin.when(CustomerDetails_SimplusAuthRobin.get('customerInfo', `/customers/${id}`)).then(() => {
            const userInfo = CustomerDetails_SimplusAuthRobin.getResult('customerInfo').data[0];
            setCustomer(Object.assign({}, customer, userInfo));
        }).catch(err => {
            handleToastOpen('error', err.response.data.message);
        });
    };
    const submitCustomerSettings = (event) => {
        event.preventDefault();
        let { id, created_at, updated_at, deleted_at, project_id, updated_by, created_by } = customer, info = CustomerDetails_rest(customer, ["id", "created_at", "updated_at", "deleted_at", "project_id", "updated_by", "created_by"]);
        console.log(info);
        setProgress('block');
        CustomerDetails_SimplusAuthRobin.when(CustomerDetails_SimplusAuthRobin.put('updateCustomerInfo', `/customers/${customerId}`, Object.assign({}, info))).then(() => {
            const updatedInfo = CustomerDetails_SimplusAuthRobin.getResult('updateCustomerInfo');
            handleToastOpen('success', updatedInfo.message);
            setProgress('none');
        }).catch(err => {
            handleToastOpen('error', err.response.data.message);
            setProgress('none');
        });
    };
    const onCancel = () => {
        getCustomerInfo(customerId);
    };
    const fetchCustomerFields = () => {
        CustomerDetails_SimplusAuthRobin.when(CustomerDetails_SimplusAuthRobin.get('customerFields', `/customers/schema/fields`)).then(() => {
            const customerField = CustomerDetails_SimplusAuthRobin.getResult('customerFields').data;
            if (customerField.length) {
                const customerFieldsDataMapping = customerField.map((customer) => {
                    return {
                        "column_name": customer.column_name,
                        "is_nullable": customer.is_nullable,
                        "data_type": customer.data_type,
                        "visible_text": customer.column_name.split('_').join(' ')
                    };
                });
                setCustomerFields(Object.assign({}, customerFields, { fields: customerFieldsDataMapping }));
            }
        }).catch(err => {
            handleToastOpen('error', err.response.data.message);
        });
    };
    Object(react["useEffect"])(() => {
        getCustomerInfo(customerId);
        fetchCustomerFields();
    }, []);
    return (react_default.a.createElement(ErrorBoundary_ErrorBoundary, null,
        react_default.a.createElement(Toast, { open: notification.toastOpen, variant: notification.toastVariant, message: notification.toastMessage, handleToastClose: handleToastClose }),
        react_default.a.createElement(Grid["a" /* default */], { container: true },
            react_default.a.createElement(List["a" /* default */], { className: classes.root },
                react_default.a.createElement(Toolbar["a" /* default */], { variant: 'dense' },
                    react_default.a.createElement(IconButton["a" /* default */], { onClick: handleBackClick, edge: 'start', className: classes.backArrowButton, color: 'inherit', "aria-label": 'menu' },
                        react_default.a.createElement(ArrowBackTwoTone["a" /* default */], null)),
                    react_default.a.createElement(Typography["a" /* default */], { variant: 'h6', color: 'inherit' }, "Back to Application")),
                react_default.a.createElement(ListItem["a" /* default */], { alignItems: 'flex-start' },
                    react_default.a.createElement(ListItemAvatar["a" /* default */], null,
                        react_default.a.createElement(Avatar["a" /* default */], { alt: customer.name, src: '/src/assets/img/simplus-logo.png' })),
                    react_default.a.createElement(ListItemText["a" /* default */], { primary: react_default.a.createElement(Typography["a" /* default */], { variant: 'h6', style: { marginRight: '10px' } }, customer.name), secondary: react_default.a.createElement(react_default.a.Fragment, null, customer.id) })))),
        react_default.a.createElement(LinearProgress["a" /* default */], { color: 'primary', style: { display: progress } }),
        react_default.a.createElement(Grid["a" /* default */], { container: true },
            react_default.a.createElement(AppBar["a" /* default */], { position: 'static', color: 'default' },
                react_default.a.createElement(Tabs["a" /* default */], { value: value, onChange: handleChange, indicatorColor: 'secondary', variant: 'scrollable', scrollButtons: 'auto', "aria-label": 'scrollable auto tabs example' },
                    react_default.a.createElement(Tab["a" /* default */], Object.assign({ label: 'Profile' }, CustomerDetails_a11yProps(0))))),
            react_default.a.createElement(CustomerDetails_TabPanel, { value: value, index: 0 },
                react_default.a.createElement("form", { className: classes.form, autoComplete: 'off', onSubmit: submitCustomerSettings },
                    customerFields.fields.map((val, index) => react_default.a.createElement(TextField["a" /* default */], { variant: 'filled', required: customer.column_name == 'name' ? true : false, margin: 'normal', fullWidth: true, id: val.column_name, label: val.visible_text, type: 'text', name: val.column_name, value: customer[val.column_name], onChange: handleFormChange(val.column_name) })),
                    react_default.a.createElement("div", { style: { float: 'right' } },
                        react_default.a.createElement(Button["a" /* default */], { variant: 'contained', size: 'medium', className: classes.submit, color: 'default', onClick: onCancel },
                            react_default.a.createElement(SaveTwoTone["a" /* default */], { className: Object(clsx_m["a" /* default */])(classes.leftIcon, classes.iconSmall) }),
                            "Cancel"),
                        react_default.a.createElement(Button["a" /* default */], { variant: 'contained', size: 'medium', className: classes.submit, color: 'secondary', type: 'submit' },
                            react_default.a.createElement(SaveTwoTone["a" /* default */], { className: Object(clsx_m["a" /* default */])(classes.leftIcon, classes.iconSmall) }),
                            "Save")))))));
};
/* harmony default export */ var Customers_CustomerDetails = (CustomerDetails);

// CONCATENATED MODULE: ./src/layouts/Admin.tsx



















const { SimplusAuthRobin: Admin_SimplusAuthRobin } = robins;
const switchRoutes = (props) => (react_default.a.createElement(react_router["d" /* Switch */], null,
    react_default.a.createElement(react_router["b" /* Route */], { exact: true, path: '/admin/organization/:organizationId/profile', component: OrganizationProfile_OrganizationProfile }),
    react_default.a.createElement(react_router["b" /* Route */], { exact: true, path: '/admin/organization/:organizationId/settings', component: OrganizationSettings_OrganizationSettings }),
    react_default.a.createElement(react_router["b" /* Route */], { exact: true, path: '/admin/organization', component: OrganizationSettings_SwitchOrganization }),
    react_default.a.createElement(react_router["b" /* Route */], { exact: true, path: '/admin/profile/:userId', component: Users_UserProfile }),
    react_default.a.createElement(react_router["b" /* Route */], { exact: true, path: '/admin/profile/:userId/settings', component: Users_UserProfileSettings }),
    react_default.a.createElement(react_router["b" /* Route */], { exact: true, path: '/admin/users/:userId/details', component: Users_UserDetails }),
    react_default.a.createElement(react_router["b" /* Route */], { exact: true, path: '/admin/projects/:projectId/details', component: Projects_ProjectDetails }),
    react_default.a.createElement(react_router["b" /* Route */], { exact: true, path: '/admin/customers/:customerId/details', component: Customers_CustomerDetails }),
    src_routes.map((prop, key) => {
        if (prop.layout === '/admin') {
            return (react_default.a.createElement(react_router["b" /* Route */], { exact: true, history: props.history, path: prop.layout + prop.path, component: prop.component, key: key }));
        }
        return null;
    }),
    react_default.a.createElement(react_router["a" /* Redirect */], { from: '/admin', to: '/admin/dashboard' })));
const Admin_useStyles = Object(makeStyles["a" /* default */])((theme) => Object(createStyles["a" /* default */])({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: Object.assign({ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 8px' }, theme.mixins.toolbar),
}));
/**
 * App Layout
 */
const Admin = (props) => {
    const classes = Admin_useStyles();
    const [drawerOpen, setDrawerOpen] = react_default.a.useState(false);
    const [loggedInUser, setLoggedInUser] = react_default.a.useState({});
    const [notification, setNotification] = react_default.a.useState({
        toastOpen: false,
        toastVariant: undefined,
        toastMessage: undefined
    });
    const handleToastClose = (_event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotification(Object.assign({}, notification, { toastOpen: false, toastMessage: undefined }));
    };
    const handleToastOpen = (toastVariant, toastMessage) => {
        setNotification(Object.assign({}, notification, { toastOpen: true, toastVariant: toastVariant, toastMessage: toastMessage }));
    };
    /**
     * Set drawer open state to true
     */
    function handleDrawerOpen() {
        setDrawerOpen(true);
    }
    /**
     * Set drawer open state to false
     */
    function handleDrawerClose() {
        setDrawerOpen(false);
    }
    /**
     * component will mount
     */
    const fetchLoggedInUser = () => {
        Admin_SimplusAuthRobin.when(Admin_SimplusAuthRobin.get('loggedInUserInfo', `/users/loggedIn/info`)).then(() => {
            const userInfo = Admin_SimplusAuthRobin.getResult('loggedInUserInfo');
            setLoggedInUser(Object.assign({}, loggedInUser, userInfo.data));
        }).catch(err => {
            handleToastOpen('error', err.response.data.message);
        });
    };
    /**
     * Component did mount
     */
    Object(react["useEffect"])(() => {
        fetchLoggedInUser();
    }, []);
    return (react_default.a.createElement(ErrorBoundary_ErrorBoundary, null, Object.keys(loggedInUser).length ?
        react_default.a.createElement("div", { className: classes.root },
            react_default.a.createElement(Toast, { open: notification.toastOpen, variant: notification.toastVariant, message: notification.toastMessage, handleToastClose: handleToastClose }),
            react_default.a.createElement(CssBaseline["a" /* default */], null),
            react_default.a.createElement(Navbar, { handleDrawerOpen: handleDrawerOpen, drawerOpen: drawerOpen, history: props.history, userInfo: loggedInUser }),
            react_default.a.createElement(Sidebar_Sidebar, { handleDrawerClose: handleDrawerClose, drawerOpen: drawerOpen, routes: src_routes }),
            react_default.a.createElement("main", { className: classes.content },
                react_default.a.createElement("div", { className: classes.toolbar }),
                switchRoutes(props)))
        :
            null));
};
const AdminLayout = Object(react_router["g" /* withRouter */])(Admin);
/* harmony default export */ var layouts_Admin = (AdminLayout);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/LockOutlined.js
var LockOutlined = __webpack_require__(141);
var LockOutlined_default = /*#__PURE__*/__webpack_require__.n(LockOutlined);

// CONCATENATED MODULE: ./src/views/Login/Login.tsx








// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';








const { SimplusAuthRobin: Login_SimplusAuthRobin } = robins;
const MadeWithLove = () => {
    return (react_default.a.createElement(Typography["a" /* default */], { variant: 'body2', color: 'textSecondary', align: 'center' },
        'Built with love by the ',
        react_default.a.createElement("a", { href: 'https://fourasol.com/', style: { color: 'rgba(0, 0, 0, 0.54)', textDecoration: 'none' } },
            react_default.a.createElement("b", null, "Fourasol")),
        ' team.'));
};
const Login_useStyles = Object(makeStyles["a" /* default */])(theme => ({
    root: {
        height: '100vh',
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        backgroundImage: 'url(/src/assets/img/login-banner.jpeg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
const Login = () => {
    const classes = Login_useStyles();
    const [values, setValues] = react_default.a.useState({
        email: '',
        password: '',
        toastOpen: false,
        toastVariant: undefined,
        toastMessage: undefined
    });
    const handleToastClose = (_event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setValues(Object.assign({}, values, { toastOpen: false, toastMessage: undefined }));
    };
    const handleToastOpen = (toastVariant, toastMessage) => {
        setValues(Object.assign({}, values, { toastOpen: true, toastVariant: toastVariant, toastMessage: toastMessage }));
    };
    const handleChange = (prop) => (event) => {
        setValues(Object.assign({}, values, { [prop]: event.target.value }));
    };
    const login = (event) => {
        event.preventDefault();
        const user = {
            'email': `${values.email}`,
            'password': `${values.password}`,
            'user_type': 'admin'
        };
        Login_SimplusAuthRobin.when(Login_SimplusAuthRobin.post('login', `/auth/login`, user)).then(() => {
            const loggedInUser = Login_SimplusAuthRobin.getResult('login');
            handleToastOpen('success', loggedInUser.message);
            const cookies = new es6["a" /* default */]();
            cookies.set('token', loggedInUser.token, { path: '/', maxAge: 86400 });
            window.location.replace('/admin/dashboard');
        }).catch(err => {
            handleToastOpen('error', err.response.data.message);
        });
    };
    return (react_default.a.createElement(ErrorBoundary_ErrorBoundary, null,
        react_default.a.createElement(Container["a" /* default */], { component: "main", maxWidth: "xs" },
            react_default.a.createElement(Toast, { open: values.toastOpen, variant: values.toastVariant, message: values.toastMessage, handleToastClose: handleToastClose }),
            react_default.a.createElement(CssBaseline["a" /* default */], null),
            react_default.a.createElement("div", { className: classes.paper },
                react_default.a.createElement(Avatar["a" /* default */], { className: classes.avatar },
                    react_default.a.createElement(LockOutlined_default.a, null)),
                react_default.a.createElement(Typography["a" /* default */], { component: "h1", variant: "h5" }, "Sign in"),
                react_default.a.createElement("form", { className: classes.form, noValidate: true, onSubmit: login },
                    react_default.a.createElement(TextField["a" /* default */], { variant: 'outlined', margin: 'normal', required: true, fullWidth: true, id: 'email', label: 'Email Address', type: 'email', name: 'email', autoComplete: 'email', autoFocus: true, onChange: handleChange('email') }),
                    react_default.a.createElement(TextField["a" /* default */], { variant: 'outlined', margin: 'normal', required: true, fullWidth: true, name: 'password', label: 'Password', type: 'password', id: 'password', autoComplete: 'current-password', onChange: handleChange('password') }),
                    react_default.a.createElement(Button["a" /* default */], { type: 'submit', fullWidth: true, variant: 'contained', color: 'secondary', className: classes.submit }, "Sign In"),
                    react_default.a.createElement(Grid["a" /* default */], { container: true },
                        react_default.a.createElement(Grid["a" /* default */], { item: true, xs: true }),
                        react_default.a.createElement(Grid["a" /* default */], { item: true },
                            react_default.a.createElement(react_router_dom["b" /* Link */], { to: "/signup", style: { color: '#f50057', textDecoration: 'none' } }, 'Dont have an account? Sign Up'))))),
            react_default.a.createElement(Box["a" /* default */], { mt: 8 },
                react_default.a.createElement(MadeWithLove, null)))));
};
/* harmony default export */ var Login_Login = (Login);

// CONCATENATED MODULE: ./src/views/Register/Register.tsx






// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';









const { SimplusAuthRobin: Register_SimplusAuthRobin } = robins;
const Register_MadeWithLove = () => {
    return (react_default.a.createElement(Typography["a" /* default */], { variant: 'body2', color: 'textSecondary', align: 'center' },
        'Built with love by the ',
        react_default.a.createElement(Link["a" /* default */], { color: 'inherit', href: 'https://fourasol.com/' },
            react_default.a.createElement("b", null, "Fourasol")),
        ' team.'));
};
const Register_useStyles = Object(makeStyles["a" /* default */])(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(/src/assets/img/login-banner.jpeg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
const Register = () => {
    const classes = Register_useStyles();
    const [values, setValues] = react_default.a.useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        toastOpen: false,
        toastVariant: undefined,
        toastMessage: undefined
    });
    const handleToastClose = (_event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setValues(Object.assign({}, values, { toastOpen: false, toastMessage: undefined }));
    };
    const handleToastOpen = (toastVariant, toastMessage) => {
        setValues(Object.assign({}, values, { toastOpen: true, toastVariant: toastVariant, toastMessage: toastMessage }));
    };
    const handleChange = (prop) => (event) => {
        setValues(Object.assign({}, values, { [prop]: event.target.value }));
    };
    const register = (event) => {
        event.preventDefault();
        const user = {
            'name': `${values.name}`,
            'email': `${values.email}`,
            'password': `${values.password}`,
            'repeat_password': `${values.confirmPassword}`,
            'user_type': `admin`
        };
        Register_SimplusAuthRobin.when(Register_SimplusAuthRobin.post('register', `/auth/register`, user)).then(() => {
            const registeredUser = Register_SimplusAuthRobin.getResult('register');
            handleToastOpen('success', registeredUser.message);
            // redirect to login view
        }).catch(err => {
            if (err.response.data.error && Object.keys(err.response.data.error).length) {
                handleToastOpen('error', err.response.data.error.detail);
            }
            else {
                handleToastOpen('error', err.response.data.message);
            }
        });
    };
    return (react_default.a.createElement(ErrorBoundary_ErrorBoundary, null,
        react_default.a.createElement(Container["a" /* default */], { component: "main", maxWidth: "xs" },
            react_default.a.createElement(Toast, { open: values.toastOpen, variant: values.toastVariant, message: values.toastMessage, handleToastClose: handleToastClose }),
            react_default.a.createElement(CssBaseline["a" /* default */], null),
            react_default.a.createElement("div", { className: classes.paper },
                react_default.a.createElement(Avatar["a" /* default */], { className: classes.avatar },
                    react_default.a.createElement(LockOutlined_default.a, null)),
                react_default.a.createElement(Typography["a" /* default */], { component: "h1", variant: "h5" }, "Sign up"),
                react_default.a.createElement("form", { className: classes.form, noValidate: true, onSubmit: register },
                    react_default.a.createElement(Grid["a" /* default */], { container: true, spacing: 2 },
                        react_default.a.createElement(Grid["a" /* default */], { item: true, xs: 12 },
                            react_default.a.createElement(TextField["a" /* default */], { autoComplete: 'name', name: 'Name', variant: 'outlined', required: true, fullWidth: true, id: 'Name', type: 'text', label: 'Name', autoFocus: true, onChange: handleChange('name') })),
                        react_default.a.createElement(Grid["a" /* default */], { item: true, xs: 12 },
                            react_default.a.createElement(TextField["a" /* default */], { variant: 'outlined', required: true, fullWidth: true, id: 'email', type: 'email', label: 'Email Address', name: 'email', autoComplete: 'email', onChange: handleChange('email') })),
                        react_default.a.createElement(Grid["a" /* default */], { item: true, xs: 12 },
                            react_default.a.createElement(TextField["a" /* default */], { variant: 'outlined', required: true, fullWidth: true, name: 'password', label: 'Password', type: 'password', id: 'password', autoComplete: 'current-password', onChange: handleChange('password') })),
                        react_default.a.createElement(Grid["a" /* default */], { item: true, xs: 12 },
                            react_default.a.createElement(TextField["a" /* default */], { variant: 'outlined', required: true, fullWidth: true, name: 'confirmPassword', label: 'Confirm Password', type: 'password', id: 'confirmPassword', autoComplete: 'confirm-password', onChange: handleChange('confirmPassword') }))),
                    react_default.a.createElement(Button["a" /* default */], { type: 'submit', fullWidth: true, variant: 'contained', color: 'secondary', className: classes.submit }, "Sign Up"),
                    react_default.a.createElement(Grid["a" /* default */], { container: true },
                        react_default.a.createElement(Grid["a" /* default */], { item: true, xs: true }),
                        react_default.a.createElement(Grid["a" /* default */], { item: true },
                            react_default.a.createElement(Link["a" /* default */], { href: '/#/login', variant: 'body2', color: 'secondary' }, "Already have an account? Sign in"))))),
            react_default.a.createElement(Box["a" /* default */], { mt: 5 },
                react_default.a.createElement(Register_MadeWithLove, null)))));
};
/* harmony default export */ var Register_Register = (Register);

// EXTERNAL MODULE: ./node_modules/@simplus/robin-react/build/index.js
var robin_react_build = __webpack_require__(140);
var robin_react_build_default = /*#__PURE__*/__webpack_require__.n(robin_react_build);

// CONCATENATED MODULE: ./src/index.tsx








// Robin methods




const provider = new build["RobinProvider"](robins);
robin_react_build_default.a.setProvider(provider);
const src_cookies = new es6["a" /* default */]();
// Axios request interceptor : Set headers for authentication
axios_default.a.interceptors.request.use((request) => {
    if (src_cookies.get('token')) {
        const token = src_cookies.get('token');
        if (token !== null && token !== undefined && token !== '') {
            request.headers.token = `${token}`;
        }
    }
    return request;
}, function (error) {
    return Promise.reject(error);
});
// Axios response interceptor : Remove cookie and redirect to login
axios_default.a.interceptors.response.use((response) => {
    return response;
}, function (error) {
    if (error.response.status === 401) {
        src_cookies.remove('token', { path: '/' });
        setTimeout(() => {
            window.location.replace(`${window.location.origin}/login`);
        }, 3000);
        return Promise.reject(error);
    }
    else {
        return Promise.reject(error);
    }
});
const checkUserSession = () => {
    if (src_cookies.get('token')) {
        return true;
    }
    else {
        return false;
    }
};
react_dom_default.a.render(react_default.a.createElement(ErrorBoundary_ErrorBoundary, null,
    react_default.a.createElement(react_router_dom["a" /* BrowserRouter */], null, checkUserSession() ?
        react_default.a.createElement(react_router["d" /* Switch */], null,
            react_default.a.createElement(react_router["b" /* Route */], { path: '/admin', component: layouts_Admin }),
            react_default.a.createElement(react_router["a" /* Redirect */], { from: '/', to: '/admin/dashboard' }))
        :
            react_default.a.createElement(react_router["d" /* Switch */], null,
                react_default.a.createElement(react_router["b" /* Route */], { exact: true, path: '/login', component: Login_Login }),
                react_default.a.createElement(react_router["b" /* Route */], { exact: true, path: '/signup', component: Register_Register }),
                react_default.a.createElement(react_router["a" /* Redirect */], { from: '/', to: '/login' })))), document.getElementById('my-awesome-app'));


/***/ })

/******/ });