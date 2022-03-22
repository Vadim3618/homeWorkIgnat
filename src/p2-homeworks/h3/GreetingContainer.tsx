import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value)
    }
    const addUser = () => {
        if (name) {
            addUserCallback(name)
            alert(`Hello ${name}!`)
            setName('')
            setError('')
        } else {
            setError('Пустая строка не может быть именем')
        }
    }

    const totalUsers = users.length

    return (
      <Greeting
        name={name}
        setNameCallback={setNameCallback}
        addUser={addUser}
        error={error}
        totalUsers={totalUsers}
      />
    )
}

export default GreetingContainer
