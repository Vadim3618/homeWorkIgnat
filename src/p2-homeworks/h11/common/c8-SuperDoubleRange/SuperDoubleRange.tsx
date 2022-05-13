import React, {ChangeEvent} from 'react';
import {Slider} from '@material-ui/core';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number | number[]) => void
    value?: number | number[],
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
  {
      onChangeRange, value,
      // min, max, step, disable, ...
  }
) => {
    const onChangeCallback = (e: ChangeEvent<{}>, value: number | number[]) => {
        onChangeRange && onChangeRange(value)
    }

    return (
      <>
          <Slider  value={value}
                   style={{width:'200px', marginLeft:'10px'}}
                   onChange={onChangeCallback}
                   valueLabelDisplay="auto"
          />
      </>
    );
}

export default SuperDoubleRange;
