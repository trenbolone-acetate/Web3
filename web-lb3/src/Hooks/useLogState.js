import { useEffect } from "react";

const useLogState = (state) => {
  useEffect(() => {
    console.log("State changed:", state);
  }, [state]);
};

export default useLogState;
