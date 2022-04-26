import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {


    const inputClass = error ? s.error : ''// need to fix with (?:)


    return (
      <div className={s.wrapper}>
          <input value={name} onChange={setNameCallback} className={inputClass}
                 onKeyPress={(e) => {
                     if (e.key === "Enter") addUser()
                 }}
          />
          <SuperButton onClick={addUser}>add</SuperButton>
          <span> {totalUsers}</span>
          <div className={s.errorMessage}>{error}</div>
      </div>
    )
}

export default Greeting
