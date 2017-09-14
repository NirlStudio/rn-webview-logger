'use strict';
(function () {
  var msgType = 'rn-webview-logger/logging'
  window.rnWebViewLogger = {
    info: function () {
      window.postJsonMessage && window.postJsonMessage({
        type: msgType,
        logType: 'info',
        payload: Array.prototype.push.apply(['[WebView] '], arguments)
      })
    },
    warn: function () {
      window.postJsonMessage && window.postJsonMessage({
        type: msgType,
        logType: 'warn',
        payload: Array.prototype.push.apply(['[WebView] '], arguments)
      })
    },
    error: function () {
      window.postJsonMessage && window.postJsonMessage({
        type: msgType,
        logType: 'error',
        payload: Array.prototype.push.apply(['[WebView] '], arguments)
      })
    }
  }
  if (typeof window.log === 'undefined') {
    window.log = window.rnWebViewLogger
  }
})()
