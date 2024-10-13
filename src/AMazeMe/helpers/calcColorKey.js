export default (letter) => {
  const charCode = letter.charCodeAt();

  //A-O || a-o
  if ((charCode >= 65 && charCode <= 79) || (charCode >= 97 && charCode <= 111))
    return "borderColor";

	//p-t
	if (charCode >= 112 && charCode <= 116) return "barrier1Color";
	//u-y
	if (charCode >= 117 && charCode <= 121) return "barrier2Color";
	//U-Y
	if (charCode >= 85 && charCode <= 89) return "barrier3Color";

	if (letter === "Á" || letter === "À") return "portalSet1Color"
	if (letter === "Ó" || letter === "Ò") return "portalSet2Color"
	if (letter === "Ú" || letter === "Ù") return "portalSet3Color"

  if (letter === "S") return "playerColor";

  if (letter === "Z") return "goalColor";

  if (letter === "0") return "floorColor";

	if (letter === "Q") return "switch onColor";
	if (letter === "R" || letter === "P") return "switch offColor";
};




// barrier1Color: "#800080",	//"purple",
//   barrier2Color: "#008000",	//"green",
//   barrier3Color: "#ffd700",	//gold",
