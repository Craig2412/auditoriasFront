export const validarEmpty = (object) => {
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            if (object[key] === "" || object[key] === 0) {
                return false
            }
        }
    }
    return true
}