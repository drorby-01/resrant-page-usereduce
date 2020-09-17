import React, { useContext, useEffect } from "react";
import { MealsContext } from "App";
import axios from "axios";
import Meal, { IMeal } from "components/ui-components/meal";
import Button from "react-bootstrap/Button";
import { BagFill } from "react-bootstrap-icons";
import FilterByDiscription from "./filter/filterByDiscription"
import FilterByName from "./filter/filterByName" 
export default function HomePage() {

  const [state, dispach] = useContext(MealsContext);//it get a reducer
  

  async function getRecipesApi() {
    try {
      const result = await axios.get("http://localhost:5200/meals");
      const {data} = result 
      console.log(data)
      dispach({type:"add", payload:{...state,meals:[...data]}});
      
    } catch (ex) {}
    finally{
      
    }
  }
  //action(props)

  useEffect(() => {
    getRecipesApi();
  }, []);

  if (!state.meals) return <span> No Meals </span>;
  return (
    <>
    <div>
            <FilterByDiscription/>
            <FilterByName/>
    </div>

  <div className="row">

      {state?.meals.map((meal: any) => {
        return (
          <Meal {...meal} actionComponent={<AddToCartButton meal={meal} />} />
        );
      })}
    </div>
    </>
  );
}

function AddToCartButton(props: any) {
  const [_, dispatch] = useContext(MealsContext);

  function addMeal() {
    dispatch({type:"addOrder",payload:{orders:[props.meal]}})
  }
  
  return (
    <Button variant={props.cls || "primary"} onClick={addMeal}>
      <BagFill />
    </Button>
  );
}
