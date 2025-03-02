// isTouchDevice
export default () => "ontouchstart" in window || window.navigator.maxTouchPoints

