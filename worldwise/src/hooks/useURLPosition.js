import { useSearchParams } from "react-router-dom";

const useURLPosition = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  if(!searchParams) return 
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return [lat,lng]
};

export default useURLPosition


