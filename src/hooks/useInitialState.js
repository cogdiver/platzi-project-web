import { useState, useEffect } from "react";

const LS_TOKEN = 'platzi_token'

const useInitialState = () => {
	const [login, setLogin] = useState(false);
    const token = localStorage.getItem(LS_TOKEN)

    useEffect(() => {
        async function fetchData() {
            if (token) {
                const url = "http://localhost:8000/verify/token"
                var myHeaders = new Headers();
                myHeaders.append("Authorization", "Bearer " + token);
                const requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    redirect: 'follow'
                };
                
                const response = await fetch(url, requestOptions)
                if (response.status == 200) {
                    setLogin(true)
                } else {
                    localStorage.clear(LS_TOKEN)
                }
            }
        }
        fetchData()
    }, []);

	return {
		login,
		setLogin
	}
}

export { useInitialState };
