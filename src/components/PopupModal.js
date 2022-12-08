import { Dialog, DialogContent, Grid, Typography } from '@mui/material'
import React from 'react'

export default function PopupModal(props) {
  return (
    <Dialog
        open={props.open}
        onClose={props.handleClose}
        fullWidth
        maxWidth="md"
        >
          <DialogContent>
            <Grid container spacing={2}>
                  <Grid item lg={6} >
                    <img src={props.singleData?.photo.images.medium.url} alt="hotel" className="houseImgPop"/>
                  </Grid>
                  <Grid item lg={6} >
                    <img src={props.singleData?.photo.images.large.url} alt="hotel" className="houseImgPop"/>
                  </Grid>
              </Grid>
              <Typography variant='h3'>{props.singleData?.name}</Typography>
              <Typography variant='subtitle'>{props.singleData?.ranking}</Typography>
          </DialogContent>
        </Dialog>
  )
}
