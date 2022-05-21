import {ThemeType} from "../HW12";

type InitStateType ={
    theme: ThemeType
}

const initState:InitStateType = {theme:'some'};

export const themeReducer = (state = initState, action: changeThemeActionType): InitStateType => { // fix any
    switch (action.type) {
        case 'CHANGE_THEME': {
            return {...state, theme: action.theme}
        }
        default:
            return state;
    }
};

type changeThemeActionType = ReturnType<typeof changeThemeC>
export const changeThemeC = (theme: ThemeType) => {
    return {
        type: 'CHANGE_THEME', theme
    } as const
}; // fix any