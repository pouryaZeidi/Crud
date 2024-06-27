import axios from "axios"

export const getData = async (url,setLoading,setError) =>{
    setLoading(tru)
    try {
        const response = await axios.get(url)
        return response
    } catch (error) {
        setError(true)
    }finally{
        setLoading(false)
    }

}
export const getData2 = async (url,setLoading,setError,setData) =>{
    setLoading(tru)
    try {
        const response = await axios.get(url)
        setData(response) 
    } catch (error) {
        setError(true)
    }finally{
        setLoading(false)
    }

}