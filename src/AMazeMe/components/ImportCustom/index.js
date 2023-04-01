import { ChangeEvent, useState, useEffect } from "react";
import TopButtons from "./TopButtons";
import Button from "../reused/buttons/Button";
import styled from "styled-components";
import useInputJSONFile from "../../hooks/useInputJSONFile";
import validateCustomLevel from "../../helpers/validateCustomLevel";

export default () => {
  const [file, setFile] = useState("");
	const [validationErrors, setValidationErrors] = useState([]);
	const [valid, setValid] = useState(false);
  const [customLevel, setCustomLevel, baseError, setBaseError] = useInputJSONFile(file);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValid(false);
		setBaseError(null);
    try {
      if (e.target.files) {
        setFile(e.target.files[0]);
      }
    } catch (err) {
			setFile("")
      setBaseError(err);
    }
  };

	useEffect(()=>{
		if (!customLevel) {
			setValidationErrors([])
		} else {
			const newErrors = validateCustomLevel(customLevel);
			setValidationErrors(newErrors)
			if (newErrors.length === 0) {
				setValid(true)
			}
		}
	},[customLevel])

  return (
    <>
      <TopButtons valid={valid} customLevel={customLevel}/>
      <Container>
        {!file ? (
          <input
            type="file"
            accept=".json"
            onChange={!file ? handleFileChange : () => {}}
            disabled={file ? true : false}
          />
        ) : (
          <>
            <span>📜 {file.name}</span>
            <Button
              onClick={() => {
                setFile("");
                setBaseError(null);
                setCustomLevel(null);
								setValid(false);
              }}
            >
              CLEAR
            </Button>

          </>
        )}
				{baseError && <Error>{baseError}</Error>}
				{validationErrors.map(error => <Error key = {error}>{error}</Error>)}
				{valid && <p>Show map and save button</p>}
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-left: 1em;
  margin-top: 0.5em;
  button {
    margin-left: 1em;
  }
`;

const Error = styled.p`
	color: red;
	font-weight: 900;
`