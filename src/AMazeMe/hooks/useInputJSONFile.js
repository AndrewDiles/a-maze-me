import { useState, useEffect } from "react"

const getBase64 = (file) => {
  return new Promise((resolve) => {
    let fileInfo;
    let baseURL = "";
    // Make new FileReader
    let reader = new FileReader();

    // Convert the file to base64 text
    // reader.readAsDataURL(file);
    reader.readAsText(file);
    // console.log(reader);

    // on reader load somthing...
    reader.onload = () => {
      // Make a fileInfo Object
      baseURL = reader.result;
      // console.log(baseURL);
      resolve(baseURL);
    };
  });
};

const useInputJSONFile = (file) => {
	const [error, setError] = useState(null);
	const [value, setValue] = useState(null);
	useEffect(() => {
    const manageFile = async (file) => {
      try {
        if (file) {
          if (file.type !== "application/json") {
            setError("file type must be json");
          } else {
            const result = await getBase64(file);
            setValue(JSON.parse(result));
          }
        } else {
          setError(null);
        }
      } catch (err) {
        setError(err);
      }
    };
    manageFile(file);
  }, [file]);
	return [value, setValue, error, setError ]
}

export default useInputJSONFile