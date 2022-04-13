import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import AlternativeSuperSelect from "./common/c5-SuperSelect/AlternativeSuperSelect";
import AlternativeSuperRadio from "./common/c6-SuperRadio/AlternativeSuperRadio";

const arr = ['React', 'JS', 'HTML', 'CSS']

function HW7() {
    const [value, onChangeOption] = useState(arr[2])

    return (
      <div>
          <hr/>
          homeworks 7

          {/*should work (должно работать)*/}
          <div>
              <SuperSelect
                options={arr}
                value={value}
                onChangeOption={onChangeOption}
              />
          </div>
          <div>
              <SuperRadio
                name={'radio'}
                options={arr}
                value={value}
                onChangeOption={onChangeOption}
              />
          </div>

          <hr/>
          {/*для личного творчества, могу проверить*/}
          <AlternativeSuperSelect
            options={arr}
            value={value}
            onChangeOption={onChangeOption}/>
          <AlternativeSuperRadio
            options={arr}
            value={value}
            onChangeOption={onChangeOption}
          />
          <hr/>
      </div>
    )
}

export default HW7
