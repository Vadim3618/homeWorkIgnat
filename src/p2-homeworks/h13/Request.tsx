import React, {ChangeEvent, useState} from 'react';
import {requestAPI} from "./RequestAPI";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";

export const Request = () => {

	const [checked, setChecked] = useState<boolean>(false)
	const [requestResult, setRequestResult] = useState<string>('')

	const onClickHandler = () => {
		requestAPI.createPost(checked)
			.then((res) => {
				console.log(res)
				setRequestResult(res.data.info)
			})
			.catch((err) => {
				console.log(err);
				console.warn(JSON.stringify(err))
				err.response ? setRequestResult(err.response.data.errorText) : setRequestResult(err.message);
			})
	}

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setChecked(e.currentTarget.checked)
	}

	return (
		<div>
			<h4>HomeWork 13</h4>
			<SuperButton onClick={onClickHandler}>get request</SuperButton>
			<div style={{fontSize: "14px"}}>check the box for positive request :)</div>
			<div><SuperCheckbox checked={checked} onChange={onChangeHandler}/></div>
			<div>{requestResult}</div>
		</div>
	)
}


