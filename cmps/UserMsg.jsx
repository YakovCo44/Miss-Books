import { useState, useEffect } from "react"
import { eventService } from "../services/event.service"

export function UserMsg() {
    const [msg, setMsg] = useState(null)

    useEffect(() => {
        eventBusService.on("show-msg", newMsg => {
            setMsg(newMsg)
            setTimeout(() => setMsg(null), 3000) // Auto-hide after 3 sec
        })
    }, [])

    if (!msg) return null

    return (
        <div className={`user-msg ${msg.type}`}>
            {msg.txt}
            <button onClick={() => setMsg(null)}>✖</button>
        </div>
    )
}
