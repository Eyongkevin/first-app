import React, { FC } from 'react'

type TCoords = {
  lat: number | null
  long: number | null
}
const Geolocation: FC<TCoords> = ({ lat, long }) => {
  return (
    <div>
      <h1>Geolocation</h1>
      <div>Latitude: {lat}</div>
      <div>Longitude: {long}</div>
    </div>
  )
}

export default Geolocation
