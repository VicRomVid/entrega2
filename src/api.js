import axios from "axios";


const searchImages = async ( term )=>{


    const response = await axios.get("https://api.unsplash.com/search/photos" , {
        headers:{
            Authorization:"Client-ID v1Tb3M4x5xNvwv6mu4PpjCu-LEcmXNxSqGbgaVB1vak"
        },
        params:{
            query:term
        }
    })

  
    return response.data.results
}

export default searchImages;