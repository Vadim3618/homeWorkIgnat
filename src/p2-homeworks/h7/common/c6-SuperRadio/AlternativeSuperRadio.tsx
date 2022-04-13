import React from 'react'
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, SelectChangeEvent} from "@mui/material";

type AlternativeSuperRadioType = {
    options: any[]
    value: string
    onChangeOption: (option: any) => void
}

function AlternativeSuperRadio(props: AlternativeSuperRadioType) {

    const onChangeCallback = (event: SelectChangeEvent<string>) => {
        if (props.onChangeOption) {
            props.onChangeOption(event.target.value)
        }
    }

    return (
      <FormControl >
          <FormLabel>Skills</FormLabel>
          <RadioGroup
            value={props.value}
            onChange={onChangeCallback}>
              {props.options.map((el,i)=>
                <FormControlLabel key={i} value={el} control={<Radio />} label={el} />)}
          </RadioGroup>
      </FormControl>
    )
}

export default AlternativeSuperRadio
