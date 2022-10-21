function filterToken(token) {

    return {
        headers: { Authorization: `Bearer ${token}` },
    }

}

export { filterToken }