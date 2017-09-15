'use strict'
const MessageTypeLog = 'rn-webview-logger/MSG_TYPE_LOG'

var logEnabled = __DEV__
if (logEnabled) {
  console.info('RNWebViewLogger: logging is enabled.')
}

export function enableLogging () {
  logEnabled = true
}

export function disableLogging () {
  logEnabled = false
}

export var RNWebViewLogger = (webView, next) => (event) => {
  const message = event && event.data
  if (message && message.type === MessageTypeLog) {
    if (logEnabled) {
      console[message.level].apply(console, message.payload)
    }
  } else {
    next && next(event)
  }
}
