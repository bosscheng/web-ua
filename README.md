# 简介
主要 分析 window.navigator.userAgent 分析出来不同平台，不同浏览器。不同容器

## 平台包括

- ios
- android
- window

## 容器信息

- wx （微信）
- windowwx （桌面微信）

## 设备

- phone 手机
- pad 平板
- pc pc电脑


## 引用


```
// browser
var ua = window._ua();
```


## 返回的数据格式

```
{
"platform":"windows",
"isAndroid":false,
"isWindows":true,
"isIOS":false,
"container":"browser",
"isWX":false,
"isWindowsWX":false,
"isApp":false,
"isBrowser":true,
"device":"pc",
"isPad":false,
"isPhone":false,
"isPc":true
}

```

## 枚举值

```
// platform（平台）
windows,ios,android


// container（容器）
browser,weixin
浏览器，微信，

// device（设备）
phone,pad,pc
手机，平板，电脑

```

