import { useState, useEffect } from "react";
import api from "../Api/api";

export const ApiHook = () => {
  const [postData, setPostData] = useState([]);
  const [checkCache, setCheckCache] = useState(false);
  const fetchNewApi = async () => {
    try {
      const response = await api.get("/posts");
      const data = response.data;
      setPostData([...data]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (checkCache) {
      fetchNewApi();
      setCheckCache(false);
    } else {
      fetchNewApi();
    }
  }, [checkCache, setCheckCache]);

  return { postData, checkCache, setCheckCache };
};
