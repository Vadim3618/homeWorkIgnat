import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

export type ThemeType = 'dark' | 'red' | 'some'|'yellow'|'blue'

const themes = ['dark', 'red', 'some', 'yellow', 'blue']

function HW12() {
    const theme = useSelector<AppStoreType, ThemeType>(
      state => state.themes.theme
    )

    const dispatch = useDispatch()

    const onChangeCallback = (theme: ThemeType) => {
        dispatch(changeThemeC(theme))
    }

    return (
      <div className={s[theme]}>
          <hr/>
          <span className={s[theme + '-text']}>
                homeworks 12
            </span>
          <SuperRadio options={themes} value={theme} onChangeOption={onChangeCallback}/>
          {/*should work (должно работать)*/}
          {/*SuperSelect or SuperRadio*/}

          <hr/>
      </div>
    );
}

export default HW12;
