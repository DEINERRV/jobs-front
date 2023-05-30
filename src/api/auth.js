import {url} from "../constants"

export const auth = async(email,password)=>{
    const request = new Request(
        `${url}/auth/login`,
        {
            method: 'POST', headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: email, password: password})
        }
    )

    return await fetch(request)
}
