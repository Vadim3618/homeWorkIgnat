import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

type AffairsPropsType = {
  data: Array<AffairType>
  setFilter: (value: FilterType) => void
  deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((a: AffairType) => (
    <Affair
      key={a._id}
      affair={a}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ))

  const setAll = (value: FilterType) => {
    props.setFilter(value)
  }
  const setHigh = (value: FilterType) => {
    props.setFilter(value)
  }
  const setMiddle = (value: FilterType) => {
    props.setFilter(value)
  }
  const setLow = (value: FilterType) => {
    props.setFilter(value)
  }

  return (
    <div>
      {mappedAffairs}
      <button onClick={() => setAll('all')}>All</button>
      <button onClick={() => setHigh('high')}>High</button>
      <button onClick={() => setMiddle('middle')}>Middle</button>
      <button onClick={() => setLow('low')}>Low</button>
    </div>
  )
}

export default Affairs
