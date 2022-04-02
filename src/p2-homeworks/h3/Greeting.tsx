import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

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
          <div className={s.errorMessage}>{error}</div>
          <input value={name} onChange={setNameCallback} className={inputClass}
                 onKeyPress={(e) => {
                     if (e.key === "Enter") addUser()
                 }}
          />
          <button onClick={addUser}>add</button>
          <span> {totalUsers}</span>
      </div>
    )
}

export default Greeting
