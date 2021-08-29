import React,{useEffect} from 'react'
import axios from 'axios'

import useStore from '../Stores/SkuConfigStore'
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: '50%',
        marginTop : '50px',
        marginLeft: '10px'
    }
})

const IntensitySlider = ({color}) => {

    const classes = useStyles()

    const intensity = useStore((state) => {
        return state.config
    })

    console.log(intensity)

    return (
        <div>
            <Slider
                className = {classes.root}
                aria-labelledby = "discrete-slider-always"
                step = {1}
                valueLabelDisplay = "on"
                min = {0}
                max = {5}
            />
        </div>
    )
}

export default IntensitySlider 

