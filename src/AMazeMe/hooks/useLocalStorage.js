import { useState, useEffect } from "react";

export default (key, initial) => {

	const [state, setState] = useState(()=>{
		const saved = localStorage.getItem(key);
		return saved ? JSON.parse(saved) : initial
	})
	useEffect(()=>{
		localStorage.setItem(key, JSON.stringify(state))
	},[state])

	return [state, setState]
}