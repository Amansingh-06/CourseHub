import { apiurl , filterData } from "./component/data";
import { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Filter from "./component/Filter";
import Cards from "./component/Cards";
import Spinner from "./component/Spinner";
import "./App.css"


function App() {
  const [courses, setcourse] = useState({});
  const [category, setcategory] = useState(filterData[0].title);
  const [loading,setloading] = useState(true)

  async function fetchdata() {
    setloading(true)
    try {
      let response = await fetch(apiurl);
      let output = await response.json();
      setcourse(output.data)
      console.log(output)
    } catch (error) {
      console.log("error")
    }
    setloading(false)
  }
  

  useEffect(() => {
    fetchdata();

  }, []);

  return (
    <>
      <Navbar />
      <Filter filterData={filterData}
        category={category}
        setcategory = {setcategory}
      />
      {loading ? <Spinner /> : <Cards courses={courses} category={category} />}
      
      
      
      
    </>
  )
}

export default App;