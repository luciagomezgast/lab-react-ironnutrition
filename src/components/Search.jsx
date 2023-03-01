import { Divider, Input } from 'antd';
import { useState } from 'react';


// Iteration 5
function Search({searchMeal}) {

    const [searchs, setSearchs] = useState("")

     const searchHandler = (e) =>{
        setSearchs(e.target.value)
        searchMeal(e.target.value)
     } 


  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchs} type="text" onChange={searchHandler} />
    </>
  );
}

export default Search;
