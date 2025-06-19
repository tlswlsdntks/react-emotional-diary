import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    const $title = document.getElementsByTagName("title")[0];
    $title.textContent = title;
  }, [title]);
};

export default usePageTitle;
