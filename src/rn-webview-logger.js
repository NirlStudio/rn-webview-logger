'use strict';
(function () {
  var MessageTypeLog = 'rn-webview-logger/MSG_TYPE_LOG'
  var logPrefix = '[RN-WebView]'
  // to generate a log writer.
  var write = function (level) {
    var localLog = console && (console[level] || console.log)
    return function () {
      // try to forward to local console if it does exist.
      if (localLog) {
        localLog.apply(console, arguments)
      }
      // try to insert a prefix to indicate the log source.
      var payload = logPrefix ? [logPrefix] : []
      Array.prototype.push.apply(payload, arguments)
      // post logging message.
      window.postJsonMessage && window.postJsonMessage({
        type: MessageTypeLog,
        level: level,
        payload: payload
      })
    }
  }
  // create the logger object.
  var logger = window.rnWebViewLogger = {
    log: write('log'),
    info: write('info'),
    warn: write('warn'),
    error: write('error'),
    prefix: function (prefix) {
      return typeof prefix === 'undefined' ? logPrefix : (logPrefix = prefix)
    }
  }
  // assemble log writers.
  logger.log.info = logger.info
  logger.log.warn = logger.warn
  logger.log.error = logger.error
  logger.log.prefix = logger.prefix
  // provide a shortcut by default
  if (typeof window.log === 'undefined') {
    window.log = logger.log
  }
})()
