/**
 * version: 0.0.1
 * */

!(function () {

    var UA = window.navigator.userAgent.toLocaleLowerCase();

    // platform 平台
    var PLATFORM = {
        windows: 'windows',
        ios: 'ios',
        android: 'android'
    };

    // container 容器
    var CONTAINER = {
        wx:'weixin',// 微信
        browser:'browser'
    };

    // 设备
    var DEVICE = {
        phone:'phone', // 手机
        pad:'pad', // 平板
        pc:'pc' // 电脑
    };


    // platform
    var isWindows = false;
    var isIOS = false;
    var isAndroid = false;

    // container
    var isWX = false;
    var isWindowsWX = false;
    var isApp = false;
    var isBrowser = false;

    // device
    var isPhone = false;
    var isPad = false;
    var isPc = false;


    function ua() {
        var result = {};
        var platform;
        if (UA.match(/(iphone|ipod|ipad);?/i)) {
            platform = PLATFORM.ios;
            isIOS = true;
        } else if (UA.match(/android/i)) {
            platform = PLATFORM.android;
            isAndroid = true;
        }
        else {
            platform = PLATFORM.windows;
            isWindows = true;
        }

        var container;
        //
        if(UA.indexOf("micromessenger") !== -1){
            container = CONTAINER.wx;
            isWX = true;
            // window wx
            if(UA.indexOf('windowswechat') !== -1){
                isWindowsWX = true;
            }
        }

        else {
            container = CONTAINER.browser;
            isBrowser = true;
        }

        var device = '';
        if (UA.match(/(ipad);?/i)) {
            device = DEVICE.pad;
            isPad = true;
        }
        else if(!!UA.match(/applewebkit.*mobile.*/)){
            device = DEVICE.phone;
            isPhone = true;
        }
        else {
            device = DEVICE.pc;
            isPc = true;
        }


        result = {
            // 平台
            platform:platform,
            // 平台boolean
            isAndroid:isAndroid,
            isWindows:isWindows,
            isIOS:isIOS,

            // 容器
            container:container,

            // contains boolean
            isWX:isWX,
            isWindowsWX:isWindowsWX,
            isApp:isApp,
            isBrowser:isBrowser,

            // 设备
            device:device,
            isPad:isPad,
            isPhone:isPhone,
            isPc:isPc

        };

        return result;
    }

    if (typeof define === 'function') {
        define(function () {
            return ua;
        });
    }
    else if (typeof exports !== 'undefined') {
        module.exports = ua;
    }
    else {
        window._ua = ua;
    }

})();
