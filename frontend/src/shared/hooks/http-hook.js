import { useState, useEffect, useCallback, useRef } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const activeHttpRequest = useRef([]);

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);

      const httpAbortControll = new AbortController();
      activeHttpRequest.current.push(httpAbortControll);

      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortControll.signal
        });

        const responseData = await response.json();

        activeHttpRequest.current = activeHttpRequest.current.filter(
          reqCtrl => reqCtrl !== httpAbortControll
        );

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setIsLoading(false);

        return responseData;
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  const clearError = () => setError(null);

  useEffect(() => {
    activeHttpRequest.current.forEach(abortCtrl => abortCtrl.abort());
  }, []);

  return { isLoading, error, sendRequest, clearError };
};
