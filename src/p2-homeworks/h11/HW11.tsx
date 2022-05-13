import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import styles from './common/c7-SuperRange/SuperRange.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeRangeHandler = (val: number | number[]) => {
        if (!Array.isArray(val)) {
            setValue1(val)
        } else {
            setValue1(val[0])
            setValue2(val[1])
        }
    }

    return (
      <div>
          <hr/>
          homeworks 11

          {/*should work (должно работать)*/}
          <div>
              <SuperRange
                style={{width:'213px',marginLeft:'5px'}}
                value={value1}
                onChangeRange={onChangeRangeHandler}
                // сделать так чтоб value1 изменялось
              />
              <span>{value1}</span>
          </div>

          <div>
              {/*<span>{value1}</span>*/}
              <SuperDoubleRange

                value={[value1, value2]}
                onChangeRange={onChangeRangeHandler}
                // сделать так чтоб value1 и value2 изменялось
              />
              {/*<span>{value2}</span>*/}
          </div>

          <hr/>
          {/*для личного творчества, могу проверить*/}
          {/*<AlternativeSuperRange/>*/}
          {/*<AlternativeSuperDoubleRange/>*/}
          <hr/>
      </div>
    )
}

export default HW11
