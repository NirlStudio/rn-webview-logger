'use strict';
(function () {
  var msgType = 'rn-webview-logger/logging'
  window.rnWebViewLogger = {
    info: function () {
      var payload = ['[WebView] ']
      Array.prototype.push.apply(payload, arguments)
      window.postJsonMessage && window.postJsonMessage({
        type: msgType,
        logType: 'info',
        payload: payload
      })
    },
    warn: function () {
      var payload = ['[WebView] ']
      Array.prototype.push.apply(payload, arguments)
      window.postJsonMessage && window.postJsonMessage({
        type: msgType,
        logType: 'warn',
        payload: payload
      })
    },
    error: function () {
      var payload = ['[WebView] ']
      Array.prototype.push.apply(payload, arguments)
      window.postJsonMessage && window.postJsonMessage({
        type: msgType,
        logType: 'error',
        payload: payload
      })
    }
  }
  if (typeof window.log === 'undefined') {
    window.log = window.rnWebViewLogger
  }
})()
