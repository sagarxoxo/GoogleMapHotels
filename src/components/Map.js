import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react';

export default function Map(props) {

  return (
    <div style={{ height: '100vh', width: '50%', position: 'fixed'}}>
        <GoogleMapReact 
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API }}
        defaultCenter={props.coords}
        cenetr={props.coords}
        margin={[50, 50, 50, 50]}
        defaultZoom={14}
        onChange={(e) => {
            props.setCoords({ lat: e.center.lat, lng: e.center.lng });
            props.setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
        >
           {props.dataPlace.map((data, i) => {
            return (
              <div
                lat={Number(data.latitude)}
                lng={Number(data.longitude)}
                key={i}
              >
                
                <div 
                  className="onMap"
                  onMouseEnter={() => {props.setIsShown(true); props.setHoverId(data.location_id)}}
                  onMouseLeave={() => props.setIsShown(false)}
                  onClick={() => props.handleClickOpen(data)}
                >
                  {data.price?.slice(0, 3)}
                </div>
                { props.isShown && (data.location_id === props.hoverId) && 
                <div className='onMaphover'>
                    <div><img src={data.photo?.images?.medium.url} /> </div>
                    <div className='pr'>{data.price}</div>
                </div>}
              </div>
            )
           })}
        </GoogleMapReact>
    </div>
  )
}
