export function saveData(name, username) {
    localStorage.setItem('name', name)
    localStorage.setItem('username', username)
}

export function recallData() {
    return {
        name: localStorage.getItem('name'),
        username: localStorage.getItem('username')
    }

}

export function clearData() {
    localStorage.removeItem('name')
    localStorage.removeItem('username')
}