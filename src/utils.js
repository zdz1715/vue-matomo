export function getMatomo () {
  return window.Piwik.getAsyncTracker()
}

export function loadScript (trackerScript) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.async = true
    script.defer = true
    script.src = trackerScript

    const head = document.head || document.getElementsByTagName('head')[0]
    head.appendChild(script)

    script.onload = resolve
    script.onerror = reject
  })
}

export function getResolvedHref (router, path) {
  // hash模式下也能正常追踪路由
  return window.location.origin  + path
}
