import { useEffect, useState } from "react";

export default function useFetch(url) {
  //make the structure of what you will return
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(`${url}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false)
      })
      .catch( error => {
        setError(error)
        setLoading(false)
      })
    }, [url]); //Add your url into the dependency array of the useEffect.

  return { data, loading, error };
}
