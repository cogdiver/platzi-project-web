
const signToken = (endpoint, setLogin, setWait, data) => {
    setWait(true)
    localStorage.clear('platzi_token')
    const url = `http://localhost:8000/${endpoint}`
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(data);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    (async () => {
        const response = await fetch(url, requestOptions)
            .then(response => response.json())
            .catch(er => console.error(err))
        const token = response.token
        if (token) {
            localStorage.setItem('platzi_token', token)
            setLogin(true)
        }
        setWait(false)
    })()
}

export { signToken }
