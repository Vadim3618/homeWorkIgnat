import React from 'react'
import s from './Message.module.css'

type MessageType = {
  avatar: string
  name: string
  message: string
  time: string
}

export function Message(props: MessageType) {
  return (
    <div className={s.message}>
      <div className={s.photo}>
        <img src={props.avatar}/>
      </div>
      <div className={s.content}>
        <div className={s.name}>{props.name}</div>
        <div>{props.message}</div>
        <div className={s.time}>{props.time}</div>
      </div>
    </div>
  );

}