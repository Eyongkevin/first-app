import { useState, useEffect } from 'react'

const Geolocation = () => {
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

  return (
    <div>
      <h1>Geolocation</h1>
      <div>Latitude: {lat}</div>
      <div>Longitude: {long}</div>
    </div>
  )
}

export default Geolocation
