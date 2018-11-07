const subs = {}

export function on(type, handler) {
  if (subs[type]) {
    subs[type].push(handler)
  } else {
    subs[type] = [ handler ]
  }

  return {
    unsubscribe: () => subs[type] = subs[type].filter(func => func !== handler)
  }
}

export function publish(type, message) {
  if (subs[type]) {
    for (const handler of subs[type]) {
      handler(message)
    }
  }
}
