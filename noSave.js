// ==UserScript==
// @name         百度网盘免转存播放视频
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Joyin.Lee
// @match        *://pan.baidu.com/*
// @icon         https://pan.baidu.com/m-static/base/static/images/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    window.onload = function() {
        let video = document.querySelectorAll("#html5player_html5_api")[0]
        video.controls = "true"
        video.pause = null
        document.querySelectorAll("#html5player > div.vjs-control-bar")[0].style.display = "none"
        document.querySelectorAll("#video-wrap-outer > div.video-overlay-iframe")[0].style.display = "none"
    }
})();