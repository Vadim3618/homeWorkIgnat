import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'SORT-UP', payload: 'up'})
    const result = [1, 3, 4, 5, 2, 0].filter((el, i) => el === newState[i]._id)
    expect(newState[0].name).toBe('Александр')
    expect(newState[5].name).toBe('Кот')
    expect(newState.length).toBe(6)
    expect(result.length).toBe(newState.length)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'SORT-DOWN', payload: 'down'})
    expect(newState[0].name).toBe('Koт')
    expect(newState[6].name).toBe('Александр')
    expect(newState.length).toBe(6)

})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'CHECK', payload: 18})
    expect(newState[0].age).toBe(3)
    expect(newState[3].age).toBe(44)

})
