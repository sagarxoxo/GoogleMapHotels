import { Dialog, DialogContent, Grid, Rating, Typography } from '@mui/material'
import React from 'react'

export default function PopupModal(props) {
  return (
    <Dialog
        open={props.open}
        onClose={props.handleClose}
        fullWidth
        maxWidth="sm"
        >
          <DialogContent>
            <Grid container spacing={2}>
                  <Grid item lg={12} >
                    <img src={props.singleData?.photo.images.medium.url} alt="hotel" className="houseImgPop"/>
                  </Grid>
                  <Grid item lg={6}>
                    <Typography variant='h4'  sx={{ fontWeight: "500"}}>{props.singleData?.name} 
                    </Typography>
                    <Rating name="read-only" size="medium" value={props.singleData?.rating} readOnly />
                  </Grid>
                  <Grid item lg={6}>
                    <Typography variant='h5' sx={{ fontWeight: "700", float: "right"}}>{props.singleData?.price}</Typography>
                  </Grid>
            </Grid>
              <Typography variant='subtitle'>{props.singleData?.ranking}</Typography>
          </DialogContent>
        </Dialog>
  )
}
