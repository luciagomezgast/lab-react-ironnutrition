import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox({name, calories, image, servings, deleteHandler}) {

/*   const deleteMeal = () => {
    const funcionDelete = () => {
        deleteHandler(name);
    }
    return funcionDelete;
} */ 
    let totalCaloties = calories*servings
  return (
    <Col>
      <Card
        title={name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {totalCaloties} </b> kcal
        </p>
        <Button type="primary" onClick={deleteHandler}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;