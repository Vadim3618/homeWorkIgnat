import React from 'react'
import {AffairType} from "./HW2";
import s from './Affair.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
  // key не нужно типизировать
  affair: AffairType
  deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
  const deleteCallback = (_id: number) => {
    props.deleteAffairCallback(_id)
  }
  return (
    <div  className={s.main}>
      <div className={s.name}>{props.affair.name}</div>
      <div className={s.priority}>{props.affair.priority}</div>
      <SuperButton onClick={() => deleteCallback(props.affair._id)}>X</SuperButton>
    </div>
  )
}

export default Affair;
