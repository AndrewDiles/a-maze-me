import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
// TODO: animate this component
// I'm not going to make this responsive to window resizes after this has begun
const fixedStarSize = 10; // [px]
const widthRangeMultiplier = 5; // allows for one star per widthRangeMultiplier*fixedStarSize px less the gap of fixedStarSize

const ProduceStar = ({starObject})=>{
	const [starNumber, setStarNumber] = useState(1);

	useEffect(()=>{

	},[starNumber])

	// set a timeout that updates starNumber after the random wait / animation takes place.

	console.log(starObject);
	const {left, width, distToTravel} = starObject;
	return <Star left={left} width={width}>⭐</Star>
}

const Star = styled.span`
position: absolute;
left: ${({left})=>left}px;
width: ${({width})=>width}px;
text-align: center;
font-size: ${fixedStarSize}px;
`










export default ({children}) => {
	const header = useRef(null);
	const [stars , setStars] = useState([])
	useEffect(()=>{
		if (!header.current) return
		const rect = header.current.getBoundingClientRect();
		console.log(rect);
		const width = rect.width;
		const distToTravel = rect.top + rect.height;
		const maxStars = Math.floor((width - fixedStarSize) / (fixedStarSize + (fixedStarSize*widthRangeMultiplier)));
		const gap =(width - (maxStars*(fixedStarSize*widthRangeMultiplier)))/maxStars
		const starsArray = [];
		for (let star = 0; star < maxStars; star++) {
			const newStar = {
				left: star*(gap+(fixedStarSize*widthRangeMultiplier)) + gap,
				width: fixedStarSize*widthRangeMultiplier,
				distToTravel,
			}
			starsArray.push(newStar)
		}
		setStars(starsArray)
	}, [])

	return <SparklyHeader ref={header}>{stars.map(star => <ProduceStar starObject = {star} key = {star.left}/>)}{children}</SparklyHeader>
}

const SparklyHeader = styled.h3`
	position: relative;
	width: fit-content;
	margin-left: auto;
	margin-right: auto;

	/////////// remove this
	margin-top:100px;
`