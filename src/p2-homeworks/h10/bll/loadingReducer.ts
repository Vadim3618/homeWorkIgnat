const initState = {
    loading: false
}

type ActionType = ReturnType<typeof loadingAC>

export const loadingReducer = (state = initState, action: ActionType): typeof initState => {
    switch (action.type) {
        case 'CHANGE-LOADING': {
            return {...state, loading: action.loading}
        }
        default:
            return state
    }
}

export const loadingAC = (loading: boolean) => {
    return {type: 'CHANGE-LOADING', loading} as const
}