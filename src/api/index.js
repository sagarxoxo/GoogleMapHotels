import axios from "axios";

const url = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary'

export const getHotelsDetail = async (sw,ne) => {
    try {
          const {data: { data }}  = await axios.get(url, {
            params: {
                bl_latitude: sw?.lat,
                bl_longitude: sw?.lng,
                tr_longitude: ne?.lng,
                tr_latitude: ne?.lat,
            },
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API,
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          })  

        return data
    }
    catch (error){
        console.log(error)
    }
}

