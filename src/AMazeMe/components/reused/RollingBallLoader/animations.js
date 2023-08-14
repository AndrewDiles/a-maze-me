import { keyframes } from "styled-components";

// ${MAX - STEP - PADDING}
const produceAnimations = () => {
	
	const rotate = keyframes`
	0% { transform: rotate(0deg);}
	100% { transform: rotate(360deg);}
	`

	const ballAnimation = keyframes`
	/* stationary */
	0% {transform: translate(50%, 400%)   rotate(0deg)}
	2% {transform: translate(50%, 400%)   rotate(0deg)}

	/* acceleration, movement on one axis */
	4% {transform: translate(56%, 400%)   rotate(3deg)}
	6% {transform: translate(64%, 400%)   rotate(10deg)}
	8% {transform: translate(80%, 400%)   rotate(25deg)}
	10% {transform: translate(112%, 400%) rotate(50deg)}
	12% {transform: translate(165%, 400%) rotate(85deg)}
	14% {transform: translate(290%, 400%) rotate(120deg)  scaleX(1)}
	
	/* Impacts, dribble, recoil*/
	16% {transform: translate(410%, 400%) rotate(155deg)  scaleX(.85)}
	18% {transform: translate(380%, 385%) rotate(165deg)  scaleX(1)}
	20% {transform: translate(400%, 370%) rotate(175deg)  scaleX(.95)}
	22% {transform: translate(390%, 360%) rotate(178deg)  scaleX(1)}
	23% {transform: translate(400%, 355%) rotate(180deg)}
	24% {transform: translate(400%, 352%) rotate(180deg)}

	/* stationary */
	25% {transform: translate(400%, 350%) rotate(180deg)}
	27% {transform: translate(400%, 350%) rotate(180deg)}

	/* acceleration, movement on one axis */
	29% {transform: translate(400%, 344%) rotate(183deg)}
	31% {transform: translate(400%, 336%) rotate(190deg)}
	33% {transform: translate(400%, 320%) rotate(205deg)}
	35% {transform: translate(400%, 288%) rotate(230deg)}
	37% {transform: translate(400%, 235%) rotate(265deg)}
	39% {transform: translate(400%, 110%) rotate(300deg)  scaleY(1)}
	/* Impacts, dribble, recoil*/
	
	41% {transform: translate(400%, -10%) rotate(335deg)  scaleY(.85)}
	43% {transform: translate(385%, 20%)  rotate(345deg)  scaleY(1)}
	45% {transform: translate(370%, 0)    rotate(355deg)  scaleY(.95)}
	47% {transform: translate(360%, 10%)  rotate(358deg)  scaleY(1)}
	48% {transform: translate(355%, 0)    rotate(360deg)}
	49% {transform: translate(352%, 0)    rotate(360deg)}

	/* stationary */
	50% {transform: translate(350%, 0)    rotate(360deg)}
	52% {transform: translate(350%, 0)    rotate(360deg)}

	/* acceleration, movement on one axis */
	54% {transform: translate(344%, 0)    rotate(363deg)}
	56% {transform: translate(336%, 0)    rotate(370deg)}
	58% {transform: translate(320%, 0)    rotate(385deg)}
	60% {transform: translate(288%, 0)    rotate(410deg)}
	62% {transform: translate(235%, 0)    rotate(445deg)}
	64% {transform: translate(110%, 0)    rotate(480deg)  scaleX(1)}

	/* Impacts, dribble, recoil*/
	66% {transform: translate(-10%, 0)    rotate(515deg)  scaleX(.85)}
	68% {transform: translate(20%, 15%)   rotate(525deg)  scaleX(1)}
	70% {transform: translate(0, 30%)     rotate(535deg)  scaleX(.95)}
	72% {transform: translate(10%, 40%)   rotate(538deg)  scaleX(1)}
	73% {transform: translate(0, 45%)     rotate(540deg)}
	74% {transform: translate(0, 47%)     rotate(540deg)}

	/* stationary */
	75% {transform: translate(0, 50%)     rotate(540deg)}
	77% {transform: translate(0, 50%)     rotate(540deg)}

	/* acceleration, movement on one axis */
	79% {transform: translate(0, 56%)     rotate(543deg)}
	81% {transform: translate(0, 64%)     rotate(550deg)}
	83% {transform: translate(0, 80%)     rotate(565deg)}
	85% {transform: translate(0, 112%)    rotate(590deg)}
	87% {transform: translate(0, 165%)    rotate(625deg)}
	89% {transform: translate(0, 290%)    rotate(660deg)  scaleY(1)}

	/* Impacts, dribble, recoil*/
	91% {transform: translate(0, 410%)     rotate(695deg) scaleY(.85)}
	93% {transform: translate(15%, 380%)   rotate(705deg) scaleY(1)}
	95% {transform: translate(30%, 400%)   rotate(715deg) scaleY(.95)}
	97% {transform: translate(40%, 390%)   rotate(718deg) scaleY(1)}
	98% {transform: translate(45%, 400%)   rotate(720deg)}
	99% {transform: translate(48%, 400%)   rotate(720deg)}
	100% {transform: translate(50%, 400%)  rotate(720deg)}
	`

return { rotate, ballAnimation }
}

export default produceAnimations