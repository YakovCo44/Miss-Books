function on(eventName, listener) {
    document.addEventListener(eventName, event => listener(event.detail))
}

function emit(eventName, data) {
    document.dispatchEvent(new CustomEvent(eventName, { detail: data }))
}

export const eventService = { on, emit }

