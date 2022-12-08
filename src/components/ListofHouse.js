import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

export default function ListofHouse(props) {
  return (
    <div className='listHouse'>
      <Grid container spacing={2}>
        {props.dataPlace.map(data => {
          return (
            <Grid lg={4}>
            <Card 
              className='card' 
              onMouseEnter={() => {props.setIsShown(true); props.setHoverId(data.location_id)}}
              onMouseLeave={() => props.setIsShown(false)}
              onClick={() => props.handleClickOpen(data)}
            >
              <CardContent>
                <img src={data.photo?.images.medium.url} alt="hotel" className="houseImg"/>
                <Typography variant='h6' >{data.price}</Typography>
                <Typography variant='subtitle2' className='hotelname'>{data.name}</Typography>
              </CardContent>
            </Card>
        </Grid>
          )
        })}
        
      </Grid>
    </div>
  )
}


