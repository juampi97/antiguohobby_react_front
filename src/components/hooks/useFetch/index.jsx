import { useState, useEffect } from 'react';

export default function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading]=useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
      setLoading(true)
      fetch(url)
              .then(res=>res.json())
              .then(data=>setData(data))
              .catch((error) => setError(error))
              .finally(()=>setLoading(false))
    },[])

    return { data, loading , error }
}