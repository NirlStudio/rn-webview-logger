import { registerMiddleware } from 'rn-webview-messaging'

const EventLogging = 'rn-webview-logger/logging'

var logEnabled = __DEV__

registerMiddleware((webView, next) => (event) => {
  if (event && event.type === EventLogging) {
    if (logEnabled) {
      console[event.logType].apply(console, event.payload)
    }
  } else {
    next && next(event)
  }
})

export function enable () {
  logEnabled = true
}

export function disable () {
  logEnabled = false
}
