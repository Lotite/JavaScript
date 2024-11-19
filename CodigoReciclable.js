//Objeto cookie permite guardar y cargar datos de las cookie.
class Cookie {
    constructor() {
        const cookies = document.cookie.replaceAll(" ", "").split(";");
        cookies.forEach(cookie => {
            const [key, value] = cookie.split("=");
            this[key] = value;
        })
    }
    set(key, value) {
        document.cookie = `${key}=${value}`
        this[key] = value;
    }
}