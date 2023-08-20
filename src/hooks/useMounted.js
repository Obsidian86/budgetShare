import { useState, useEffect } from "react";

export default () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    !isMounted && setIsMounted(true);
  }, [isMounted]);

  return isMounted;
};
