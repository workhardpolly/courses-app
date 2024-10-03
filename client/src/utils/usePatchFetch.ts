import { useState, useEffect } from 'react';

interface UseFetchResult {
  data: any | null;
  isPending: boolean;
  error: any | null;
}

const usePatchFetch = (url: string, data: object): UseFetchResult => {
  // const [data, setData] = useState<any | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<any | null>(null);

  const body: string = JSON.stringify(data);

  useEffect(() => {
    setTimeout(() => {
      fetch(`${url}/${data.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body })
        .then((res) => {
          if (!res.ok) {
            throw Error('Error post');
          }
          return res.json();
        })
        .then((response) => response.json())
        .then((resData) => console.log(resData));
    }, 200);
  }, [url]);

  return { data, isPending, error };
};

export default usePatchFetch;
