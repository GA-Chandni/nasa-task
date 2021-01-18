import Axios from "axios"

export const getAllRandomAsteroidIdServices = async(id)=>{
    return (
        Axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=R7trwRQsd2mlQlLSGGPXkcjtPddm1CMie7uPAt6N`)
    )
}