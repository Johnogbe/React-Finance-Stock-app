// Autocomplete.jsx
import { useState,useEffect } from "react";
import finnHub from "../api/finHub"
const Stocklist = () => {
    const [watchlist,setWatchlist] = useState(['GOOGLE','MSFT','AMZN'])
    const [stock,setStock] = useState()
    useEffect(()=>{
        const fetchData = async()=>{
           const isMounted =true
            try {
                const response = await finnHub.get('/quote',{
                    params:{
                        symbol:'MSFT'
                    }
                })
                console.log(response);

                isMounted && setStock(response.data)
            } catch (error) {
                
            }
        }
        fetchData()
        return ()=>{isMounted = false}
    },[])
    return <h1>Stock List Page</h1>;
};
export default Stocklist;
