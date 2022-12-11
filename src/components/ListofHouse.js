import { Card, CardContent, Grid, Rating, Typography } from '@mui/material'
import React from 'react'

export default function ListofHouse(props) {
  return (
    <div className='listHouse'>
      <Grid container spacing={2}>
        {props.dataPlace.map(data => {
          return (
            <Grid lg={4} xs={12} sm={12}>
            <Card 
              className='card' 
              onMouseEnter={() => {props.setIsShown(true); props.setHoverId(data.location_id)}}
              onMouseLeave={() => props.setIsShown(false)}
              onClick={() => props.handleClickOpen(data)}
            >
              <CardContent>
                <img src={data.photo?.images.medium.url} alt="hotel" className="houseImg"/>
                <div className='rates'> <Rating name="read-only" size="small"  value={data?.rating} readOnly /></div>
                <Typography variant='h6' >{data.price}</Typography>
                <Typography variant='subtitle2' className='hotelname'>{data.name}</Typography>
                <Typography variant='caption' className='hotelname'>{data?.ranking}</Typography>
              </CardContent>
            </Card>
        </Grid>
          )
        })}
        
      </Grid>
    </div>
  )
}


