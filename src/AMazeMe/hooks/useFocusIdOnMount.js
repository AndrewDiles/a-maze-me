import { useEffect } from "react";
export default (id) =>{
	useEffect(()=>{
		const el = document.getElementById(id)
		el && el.focus()
	},[])
}