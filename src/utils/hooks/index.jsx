
import { useState, useEffect} from 'react'
import axios from 'axios' 

export function useFetch(url) {

    const [Error, setError] = useState(false)
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
    
        if (!url) return
        setLoading(true)
        async function fetchData() {
            
            await  axios.get(url)
            .then(({data})=>{
                setData(data)
            })
            .catch((err) =>{
                setError(true) 
            })
            .finally(() =>{
                setLoading(false)  
            })
        }
        fetchData()
    
    }, [url])

    return { data, Error , isLoading }
}

export function useAllFetch(Url1 , Url2){
    const [Error, setError] = useState(false)
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
    
        if (!Url1 && !Url2) return
        setLoading(true)
        async function fetchData() {
            const promise_1 = await axios.get(Url1);
            const promise_2 = await axios.get(Url2)
            Promise.all([promise_1 , promise_2])
            .then((data)=>{
                setData(data)
            })
            .catch((err) =>{
                setError(true) 
            })
            .finally(() =>{
                setLoading(false)  
            })
        }
        fetchData()
    
    }, [Url1 , Url2])
 
    return { data, Error , isLoading }

}

