import {UserType} from "../HW8";

type ActionType = sortUpType | sortDownACType | checkACType
export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'SORT-UP': {
            return [...state.sort((a, b) =>
              a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)]
        }
        case 'SORT-DOWN':
            return [...state.sort((a, b) =>
              a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)]
        case 'CHECK': {
            return [...state.filter(p => p.age > 17)]
        }
        default:
            return state
    }
}

type sortUpType = ReturnType<typeof sortUpAC>
export const sortUpAC = () => {
    return {type: 'SORT-UP', payload: 'up'} as const
}

type sortDownACType = ReturnType<typeof sortDownAC>
export const sortDownAC = () => {
    return {type: 'SORT-DOWN', payload: 'down'} as const
}

type checkACType = ReturnType<typeof checkAC>
export const checkAC = (age: number) => {
    return {type: 'CHECK', payload: age} as const
}
