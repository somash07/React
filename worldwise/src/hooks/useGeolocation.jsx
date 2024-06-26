import { useState } from "react";

export default function useGeolocation(defaultPosition = null) {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState(defaultPosition); //lat lng
  const [error, setError] = useState(null);

  function getPosition() {
    if (!navigator.geolocation) {
      return setError("pleace enable location");
    }
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return {isLoading, position , error, getPosition}
}
