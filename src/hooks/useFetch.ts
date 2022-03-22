import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../services/api";

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    axios.get(url).then(response => {
      setData(response.data)
    }).catch(error => {
      console.error(error)
    });

  }, []);

  return { data };
}