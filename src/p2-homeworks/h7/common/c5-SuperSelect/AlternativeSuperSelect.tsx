import React, {ChangeEvent} from 'react'
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";

type AlternativeSuperSelectType = {
    options: any[]
    value: string
    onChangeOption: (option: any) => void
}

function AlternativeSuperSelect(props: AlternativeSuperSelectType) {
    const onChangeCallback = (event: SelectChangeEvent<string>) => {
        if (props.onChangeOption) {
            props.onChangeOption(event.target.value)
        }
    }


    return (
      <FormControl style={{width: '130px'}}>
          <InputLabel>Skills</InputLabel>
          <Select
            value={props.value}
            label='Skills'
            onChange={onChangeCallback}>
              {props.options.map((el, i) => <MenuItem key={i} value={el}>{el}</MenuItem>)}
          </Select>
      </FormControl>
    )
}

export default AlternativeSuperSelect
