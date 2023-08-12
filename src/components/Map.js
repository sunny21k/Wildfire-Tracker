import GoogleMapReact from 'google-map-react'
import { LocationMarker } from './LocationMarker'
import { LocationInfoBox } from './LocationInfoBox'
import { useState } from 'react'

export const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null);

    const markers = eventData.map((ev) => {
        if (ev.categories[0].id == 8) {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
            onClick={() => setLocationInfo({id: ev.id, title: ev.title})}
            />
        }
        return null;
    })

  return (
    <div className='map'>
        <GoogleMapReact
            bootstrapURLKeys={{
                key: "AIzaSyCFtUGCrE_1husKXqnv8O5Dk8DkR7NpJIM"
            }}
            defaultCenter = {center}
            defaultZoom = {zoom}
        >
            {markers}
        </GoogleMapReact>
        {locationInfo && <LocationInfoBox info={locationInfo} /> }
    </div>
  )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}