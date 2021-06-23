import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


export default function RadioF({value,setValue}) {


    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (

        <>
            <FormControl component="fieldset">
                <FormLabel component="legend">Scenery</FormLabel>
                <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="Beach" control={<Radio />} label="Beach" />
                    <FormControlLabel value="Mountain" control={<Radio />} label="Mountain" />
                    <br/><br/>

                </RadioGroup>
            </FormControl>
        
            
            
        </>
    );
}