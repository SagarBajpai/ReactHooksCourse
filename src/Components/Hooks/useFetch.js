//A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.
//Its name should always start with use so that you can tell at a glance that the rules of Hooks apply to it.

const { useEffect, useState } = require("react");

export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: false });

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    setState({ data: null, loading: true });
    const response = await fetch(url);
    const data = await response.text();
    setState({ data, loading: false });
  };
  return state;
};

//try to make useEffect async
//eslint-disable-next-line react-hooks/exhaustive-deps
// try to dependency from the useEffect and check ES Warning
