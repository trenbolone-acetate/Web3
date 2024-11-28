import { useState } from "react";

const useStatus = (initialStatus) => {
  const [status, setStatus] = useState(initialStatus);

  const updateStatus = (newStatus) => {
    setStatus(newStatus);
  };

  return [status, updateStatus];
};

export default useStatus;
