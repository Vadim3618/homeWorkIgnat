import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

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
      <SuperButton onClick={() => setAll('all')}>All</SuperButton>
      <SuperButton onClick={() => setHigh('high')}>High</SuperButton>
      <SuperButton onClick={() => setMiddle('middle')}>Middle</SuperButton>
      <SuperButton onClick={() => setLow('low')}>Low</SuperButton>
    </div>
  )
}

export default Affairs
