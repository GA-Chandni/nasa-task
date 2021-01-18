import Axios from "axios"

export const getAllAsteroidIdServices = async()=>{
    return (
        Axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY`)
    )
}