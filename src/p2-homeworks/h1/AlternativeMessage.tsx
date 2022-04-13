import React, {ChangeEvent, FC, useState, KeyboardEvent} from 'react'
import s from './Message.module.css'


type AlternativeMessageType = {
    addMessage: (message: string) => void
}

export const AlternativeMessage: FC<AlternativeMessageType> = ({addMessage}) => {
    const [message, setMessage] = useState('')//как применить стиль?
    const [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.currentTarget.value)
        setError(null)

    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && message.trim() !== '') {
            addMessage(message)
            setMessage('')
        } else{
            setError("Title is required")
        }
    }

    return (
      <div><input
        className={error ? s.error : ""}
        placeholder={'write text and click "Enter"'}
        value={message}
        onChange={onChangeHandler}
        onKeyPress={onKeyPressHandler}/>
          {error && <div className={s.errorMessage}>{error}</div>}
      </div>
    )
}

