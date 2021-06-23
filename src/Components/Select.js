import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SimpleSelect({age,setAge,value }) {
    const classes = useStyles();
    

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            {
                value === "Beach" ?
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">{value}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value="Goa">Goa</MenuItem>
                            <MenuItem value="Pondicherry">Pondicherry</MenuItem>
                            <MenuItem value="Kerela">Kerela</MenuItem>
                        </Select>
                    </FormControl> :
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">{value}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value="Nainital">Nainital</MenuItem>
                            <MenuItem value="Manali">Manali</MenuItem>
                            <MenuItem value="Shimla">Shimla</MenuItem>
                        </Select>
                    </FormControl>
            }




        </div>
    )
}