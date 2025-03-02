import { useState } from "react";
import calcTouchDevice from "../helpers/isTouchDevice";

const useTouchDevice = () => {
	const [isTouchDevice, setIsTouchDevice] = useState(calcTouchDevice());
	return isTouchDevice
}

export default useTouchDevice