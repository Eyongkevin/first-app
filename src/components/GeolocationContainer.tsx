import { useState, useEffect, FC } from 'react'
import Geolocation from './Geolocation'

const GeolocationContainer: FC = () => {
  const [lat, setLatitude] = useState<number | null>(null)
  const [long, setLongitude] = useState<number | null>(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess)
    }
  }, [])

  const handleSuccess = ({
    coords: { latitude, longitude }
  }: {
    coords: { latitude: number; longitude: number }
  }) => {
    setLatitude(latitude)
    setLongitude(longitude)
  }

  return <Geolocation lat={lat} long={long} />
}

export default GeolocationContainer
