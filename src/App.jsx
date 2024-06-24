import { useEffect, useState } from "react";
import { supabase } from "./supabase";

function App() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    getPostData();
  }, []);

  async function getPostData() {
    const { data } = await supabase.from("page").select("*");
    setPostData(data);
    console.log(postData);
  }
  return <></>;
}

export default App;
