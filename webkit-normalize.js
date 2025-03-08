(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        // AMD (Asynchronous Module Definition)
        define([], factory);
    } else if (typeof exports === "object" && typeof module !== "undefined") {
        // CommonJS (Node.js and other environments supporting require/export)
        module.exports = factory();
    } else if (typeof exports === "object") {
        // CommonJS without `module` (e.g., ES modules in Node.js)
        exports.PolyfillLibrary = factory();
    } else {
        // Global context (browser or web worker environment)
        global.PolyfillLibrary = factory();
    }
})(typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : global, function runner() {
    "use strict";

    var globalScope; // Determine the global scope (window, self, global)
    try {
        if (typeof window === 'object' && window.window === window) {
            globalScope = window; // Browser environment
        } else if (typeof self === 'object' && self.self === self) {
            globalScope = self; // Web Worker environment
        } else if (typeof global === 'object' && global.global === global) {
            globalScope = global; // Node.js or other global scope
        } else {
            globalScope = {}; // Fallback if no global scope is found
        }
    } catch (e) {
        console.error("Error determining global scope:", e);
    }

    var webKits = {}; // Store polyfilled values for reference

    // Polyfill for URL and webkitURL
    try {
        if (typeof globalScope.URL === 'undefined') {
            globalScope.URL = globalScope.webkitURL;
            webKits.URL = globalScope.webkitURL;
        }
    } catch (e) {
        console.error("Error polyfilling URL:", e);
    }

    // Polyfill for AudioContext
    try {
        if (typeof globalScope.AudioContext === 'undefined') {
            globalScope.AudioContext = globalScope.webkitAudioContext;
            webKits.webkitAudioContext = globalScope.webkitAudioContext;
        }
    } catch (e) {
        console.error("Error polyfilling AudioContext:", e);
    }

    // Polyfill for SpeechRecognition
    try {
        if (typeof globalScope.SpeechRecognition === 'undefined') {
            globalScope.SpeechRecognition = globalScope.webkitSpeechRecognition;
            webKits.webkitSpeechRecognition = globalScope.webkitSpeechRecognition;
        }
    } catch (e) {
        console.error("Error polyfilling SpeechRecognition:", e);
    }

    // Polyfill for getUserMedia
    try {
        if (typeof globalScope.navigator !== "undefined") {
            if (typeof globalScope.navigator.mediaDevices === 'undefined' || typeof globalScope.navigator.mediaDevices.getUserMedia === 'undefined') {
                if (typeof globalScope.navigator.webkitGetUserMedia !== 'undefined') {
                    globalScope.getUserMedia = globalScope.navigator.webkitGetUserMedia;
                    webKits.getUserMedia = globalScope.navigator.webkitGetUserMedia;
                }
            } else {
                globalScope.getUserMedia = globalScope.navigator.mediaDevices.getUserMedia;
                webKits.getUserMedia = globalScope.navigator.mediaDevices.getUserMedia;
            }
        }
    } catch (e) {
        console.error("Error polyfilling getUserMedia:", e);
    }

    // Polyfill for requestAnimationFrame
    try {
        if (typeof globalScope.requestAnimationFrame === 'undefined') {
            globalScope.requestAnimationFrame = globalScope.webkitRequestAnimationFrame;
            webKits.requestAnimationFrame = globalScope.webkitRequestAnimationFrame;
        }
    } catch (e) {
        console.error("Error polyfilling requestAnimationFrame:", e);
    }

    // Polyfill for webkitTransitionEnd event
    try {
        if (typeof globalScope.transitionEnd === 'undefined') {
            if (typeof globalScope.transitionend !== 'undefined') {
                globalScope.transitionEnd = 'transitionend';
                webKits.transitionEnd = 'transitionend';
            } else {
                globalScope.transitionEnd = 'webkitTransitionEnd';
                webKits.transitionEnd = 'webkitTransitionEnd';
            }
        }
    } catch (e) {
        console.error("Error polyfilling transitionEnd:", e);
    }

    // Polyfill for webkitDevicePixelRatio
    try {
        if (typeof globalScope.devicePixelRatio === 'undefined') {
            globalScope.devicePixelRatio = globalScope.webkitDevicePixelRatio || 1;
            webKits.devicePixelRatio = globalScope.webkitDevicePixelRatio || 1;
        }
    } catch (e) {
        console.error("Error polyfilling devicePixelRatio:", e);
    }

    // Polyfill for webkitTransform (CSS property)
    try {
        if (typeof globalScope.transform === 'undefined') {
            if (typeof globalScope.document !== 'undefined') {
                if (typeof globalScope.document.body.style.transform !== 'undefined') {
                    globalScope.transform = 'transform';
                    webKits.transform = 'transform';
                } else {
                    globalScope.transform = 'webkitTransform';
                    webKits.transform = 'webkitTransform';
                }
            }
        }
    } catch (e) {
        console.error("Error polyfilling transform:", e);
    }

    // Polyfill for webkitBackfaceVisibility (CSS property)
    try {
        if (typeof globalScope.backfaceVisibility === 'undefined') {
            if (typeof globalScope.document !== 'undefined') {
                if (typeof globalScope.document.body.style.backfaceVisibility !== 'undefined') {
                    globalScope.backfaceVisibility = 'backfaceVisibility';
                    webKits.backfaceVisibility = 'backfaceVisibility';
                } else {
                    globalScope.backfaceVisibility = 'webkitBackfaceVisibility';
                    webKits.backfaceVisibility = 'webkitBackfaceVisibility';
                }
            }
        }
    } catch (e) {
        console.error("Error polyfilling backfaceVisibility:", e);
    }

    // Polyfill for webkitRequestFullScreen
    try {
        if (typeof globalScope.requestFullScreen === 'undefined') {
            if (typeof globalScope.document !== 'undefined') {
                var element = globalScope.document.documentElement; // Only check in browser environments
                if (typeof element.requestFullscreen !== 'undefined') {
                    globalScope.requestFullScreen = element.requestFullscreen;
                    webKits.requestFullScreen = element.requestFullscreen;
                } else if (typeof element.webkitRequestFullscreen !== 'undefined') {
                    globalScope.requestFullScreen = element.webkitRequestFullscreen;
                    webKits.requestFullScreen = element.webkitRequestFullscreen;
                }
            }
        }
    } catch (e) {
        console.error("Error polyfilling requestFullScreen:", e);
    }

    // Polyfill for webkitDatabase (deprecated)
    try {
        if (typeof globalScope.webkitDatabase === 'undefined') {
            globalScope.webkitDatabase = globalScope.openDatabase;
            webKits.webkitDatabase = globalScope.openDatabase;
        }
    } catch (e) {
        console.error("Error polyfilling webkitDatabase:", e);
    }

    // Polyfill for webkitWillChange (CSS property)
    try {
        if (typeof globalScope.willChange === 'undefined') {
            if (typeof globalScope.document !== 'undefined') {
                if (typeof globalScope.document.body.style.willChange !== 'undefined') {
                    globalScope.willChange = 'will-change';
                    webKits.willChange = 'will-change';
                } else {
                    globalScope.willChange = 'webkitWillChange';
                    webKits.willChange = 'webkitWillChange';
                }
            }
        }
    } catch (e) {
        console.error("Error polyfilling willChange:", e);
    }

    // Polyfill for webkitRequestFileSystem
    try {
        if (typeof globalScope.requestFileSystem === 'undefined') {
            globalScope.requestFileSystem = globalScope.webkitRequestFileSystem;
            webKits.requestFileSystem = globalScope.webkitRequestFileSystem;
        }
    } catch (e) {
        console.error("Error polyfilling requestFileSystem:", e);
    }

    // Polyfill for requestFullscreen
    try {
        if (typeof globalScope.requestFullscreen === 'undefined') {
            if (typeof globalScope.document !== 'undefined') {
                var element = globalScope.document.documentElement; // Only check in browser environments
                if (typeof element.requestFullscreen !== 'undefined') {
                    globalScope.requestFullscreen = element.requestFullscreen;
                    webKits.requestFullscreen = element.requestFullscreen;
                } else if (typeof element.webkitRequestFullscreen !== 'undefined') {
                    globalScope.requestFullscreen = element.webkitRequestFullscreen;
                    webKits.requestFullscreen = element.webkitRequestFullscreen;
                }
            }
        }
    } catch (e) {
        console.error("Error polyfilling requestFullscreen:", e);
    }

    globalScope.webKits = webKits;

    // Return the polyfilled library and webKits object
    return webKits;
});