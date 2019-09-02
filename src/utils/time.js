export const getCurrentDatetime = () => {
    const date = new Date()
    const y = date.getFullYear()
    const m = date.getMonth() + 1
    const d = date.getDate()
    const hrs = date.getHours()
    const mnts = date.getMinutes()
    const seconds = date.getSeconds()
    return `${y}-${m}-${d}T${hrs}:${mnts}:${seconds}+00:00`
}