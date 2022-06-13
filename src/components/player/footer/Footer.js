import React from "react";
import './Footer.css'
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import {Grid, Slider} from "@mui/material";
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function Footer() {
    return(
        <div className="footer">
            <div className="footer__left">
            <img 
            className="footer__albumLogo"
            src="https://cdns-images.dzcdn.net/images/cover/d820af6dceedca3f363320cc3f5be07e/500x500.jpg" 
            alt="Logo" />
            <div className="footer__songInfo">
                <h4>Safe and Sound</h4>
                <p>Capital Cities</p>
            </div>
            </div>

            <div className="footer__center"> 
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleFilledWhiteOutlinedIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>

            <div className="footer__right"> 
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayIcon />
                </Grid>
                <Grid item>
                    <VolumeDownIcon />
                </Grid>
                <Grid item xs>
                    <Slider />
                </Grid>
            </Grid>
            </div>
        </div>
    )
}

export default Footer;
