import { useEffect, useRef } from "react";

const useInterval = ({cb, delay}) => {
    const cbRef = useRef();

    useEffect(() => {
			cbRef.current = cb;
    }, [cb]);

    useEffect(() => {
        const update = () => {
					cbRef.current();
        }
        if (delay > 0) {
            let interval = setInterval(update, delay);
            return () => clearInterval(interval);
        }
    }, [delay]);
}

export default useInterval;