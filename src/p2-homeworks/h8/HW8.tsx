import React, {useState} from 'react'
import {checkAC, homeWorkReducer, sortDownAC, sortUpAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import './HW8.css'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
      <div key={p._id}>
          <table className={'table'}>
              <tr className={'tr'}>
                  <td >{p.name}</td>
                  <td>{p.age}</td>
              </tr>
          </table>
      </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortUpAC()))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortDownAC()))
    const check = () => setPeople(homeWorkReducer(initialPeople, checkAC(18)))

    return (
      <div>
          homeworks 8
          <div>
              <SuperButton className={'button'} onClick={sortUp}>sort up</SuperButton>
              <SuperButton className={'button'} onClick={sortDown}>sort down</SuperButton>
              <SuperButton className={'button'} onClick={check}>check 18</SuperButton>
          </div>



          {/*should work (должно работать)*/}
          {finalPeople}



          <hr/>
          {/*для личного творчества, могу проверить*/}
          {/*<AlternativePeople/>*/}
          <hr/>
      </div>
    )
}

export default HW8
