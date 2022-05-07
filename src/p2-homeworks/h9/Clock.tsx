import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import moment from "moment";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = +setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = moment().format('hh:mm:ss')
    const stringDate = moment().format('DD/MM/YYYY')

    return (
      <div>
          <div style={{display: 'inline-block'}}
               onMouseEnter={onMouseEnter}
               onMouseLeave={onMouseLeave}>
              {stringTime}
          </div>

          {show && (
            <div style={{display: 'inline-block'}}>
                ; date: {stringDate}
            </div>
          )}

          <div>
              <SuperButton onClick={start}>start</SuperButton>
              <SuperButton onClick={stop}>stop</SuperButton>
          </div>

      </div>
    )
}

export default Clock
