// ==UserScript==
// @name         Piptime
// @namespace    https://github.com/Ponkhy/Piptime
// @version      1.0.0
// @description  TBA
// @author       Ponkhy
// @match        https://www.youtube.com/watch?v=*
// @match        https://www.youtube.com/live/*
// @icon         https://www.youtube.com/favicon.ico
// @downloadURL  https://github.com/Ponkhy/Piptime/raw/main/piptime.user.js
// @updateURL    https://github.com/Ponkhy/Piptime/raw/main/piptime.user.js
// ==/UserScript==

(function() {
    'use strict';

    function formatTime(seconds) {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = Math.floor(seconds % 60);
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }

    function displayRuntime() {
        const video = document.querySelector('video')
        const liveBadge = document.querySelector('.ytp-live-badge')

        if (video && liveBadge) liveBadge.innerText = `Live - ${formatTime(video.currentTime)}`
    }

    setInterval(displayRuntime, 1000);
})();
