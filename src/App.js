import logo from './logo.svg';
import './App.css';
import { Dialog, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@mui/material';
import Map from './components/Map';
import ListofHouse from './components/ListofHouse';
import {getHotelsDetail} from "./api/index"
import { useEffect, useState } from 'react';
import PopupModal from './components/PopupModal';

function App() {

  const [dataPlace, setDataPlace] = useState([])
  const [coords, setCoords] = useState({lat: 19.0748, lng: 72.8856});
  const [bounds, setBounds] = useState(null);

  const [isShown, setIsShown] = useState(false);
  const [hoverId, setHoverId] = useState();

  const [open, setOpen] = useState(false);
  const [singleData, setSingleData] = useState();

  const handleClickOpen = (sData) => {
    setSingleData(sData)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log("jh",bounds)
    if (bounds) {
      getHotelsDetail(bounds.sw, bounds.ne)
      .then((data) => {
        console.log(data)
        setDataPlace(data)
      })
    }
  },[coords, bounds])

  console.log("ss",singleData)
  return (
    <div>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Map 
              setBounds={setBounds}
              setCoords={setCoords}
              coords={coords}
              dataPlace={dataPlace}
              isShown={isShown}
              setIsShown={setIsShown}
              hoverId={hoverId}
              setHoverId={setHoverId}
              open={open}
              setOpen={setOpen}
              handleClickOpen={handleClickOpen}
              handleClose={handleClose}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <ListofHouse 
            dataPlace={dataPlace}
            isShown={isShown}
            setIsShown={setIsShown}
            hoverId={hoverId}
            setHoverId={setHoverId}
            open={open}
            setOpen={setOpen}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            />
          </Grid>
        </Grid>

        <div>
          <PopupModal 
            open={open}
            singleData={singleData}
            handleClose={handleClose}
          />
        </div>
    </div>
  );
}

export default App;
