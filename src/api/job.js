import {url} from "../constants"

export const create = async(job,token)=>{
    const request = new Request(
        `${url}/jobs`,
        {
            method: 'POST', headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
            body: JSON.stringify(job)
        }
    )

    return await fetch(request)
}

export const update = async(job,token)=>{
    const request = new Request(
        `${url}/jobs/${job._id}`,
        {
            method: 'PATCH', headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
            body: JSON.stringify(job)
        }
    )

    return await fetch(request)
}

export const eliminate = async(job,token)=>{
    const request = new Request(
        `${url}/jobs/${job._id}`,
        {
            method: 'DELETE', headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
            body: JSON.stringify(job)
        }
    )

    return await fetch(request)
}

export const getAll = async(token)=>{
    const request = new Request(
        `${url}/jobs`,
        {
            method: 'GET', headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
        }
    )

    return await fetch(request)
}

export const getById = async(id,token)=>{
    const request = new Request(
        `${url}/jobs/${id}`,
        {
            method: 'GET', headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
        }
    )

    return await fetch(request)
}