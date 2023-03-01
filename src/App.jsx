import './App.css';
import {  Row, Divider, Button } from 'antd';
import foodsArray from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddForm';
import Search from './components/Search';

function App() {
  const [meals, setMeals] = useState(foodsArray);
  const [copyMeals, copySetMeals] = useState(foodsArray)

  const addMeal=(meal) =>{
    setMeals([meal, ...meals])
    copySetMeals([meal, ...meals])
  }

  const searchMeal= (text) => {
    if(text === ""){
      setMeals(copyMeals)
    }else{
      setMeals(meals.filter(meal => meal.name.toLowerCase().includes(text.toLowerCase())));
    }  
  }



   const deleteHandler = (name)=> {
     setMeals(meals.filter(meal => meal.name !== name)) 
  }

  return (
    <div className="App">
      {/*    ITERACION 1 */}
      {/* <div>
        {meals.map((meal,k) => {
          return (
            <>
              <p key={k}> {meal.name} </p>
              <img alt="food"src={meal.image} width={80} />
            </>
          );
        })}
      </div> */}

      <Divider>Food List</Divider>
      <br>
      </br>

      <Search searchMeal={searchMeal}/>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {meals.map((meal) => {
          return (
            <>
              <FoodBox
                key={meal.name}
                name={meal.name}
                calories={meal.calories}
                image={meal.image}
                servings={meal.servings}
                deleteHandler={()=>deleteHandler(meal.name)}
              />
            </>
          );
        })}
      </Row>

      <Button> Hide Form / Add New Food </Button>

     <AddFoodForm addMeal={addMeal} />

      

    </div>
  );
}

export default App;
