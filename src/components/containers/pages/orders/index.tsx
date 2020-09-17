import React, { useContext,useEffect } from "react";
import { MealsContext } from "App";
import Meal, { IMeal } from "components/ui-components/meal";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Trash2 } from "react-bootstrap-icons";

export default function OrdersPage() {
  const [state, dispach] = useContext(MealsContext);
  const { orders } = state;

    
  function getTotalCal() {
    console.log(orders)
    const total = orders.reduce((total: number, order: any) => {
      console.log(parseInt(order.calories));
      if (isNaN(parseInt(order.calories))) return total;
      return total + parseInt(order.calories);
    }, 0);
    return total;
  }
  
  return (
    <div>
      <h1 className="jumbotron"> Orders </h1>

      <div className="row">
        <div className="col-lg-3">
          <h2>
            Total Price: <Badge variant="secondary">{getTotalCal()} Cal</Badge>
          </h2>
        </div>
        <div className="col-lg-3 float-right pull-right">
          <Button
            className={"pull-right"}
            onClick={() => {
              dispach({type:"deleteAll"})
            }}
            variant="danger"
            size="lg"
            active
          >
            Clear Orders
          </Button>
        </div>
      </div>
      <div className="row">
        {orders.map((meal: any) => {
          return (
            <Meal
              {...meal}
              
              actionComponent={<RemoveFromCartButton meal={meal} cls="danger"/>}
            />
          );
        })}
      </div>
    </div>
  );
}


function RemoveFromCartButton(props: any) {
  const [state , dispach] = useContext(MealsContext);
  const {orders} = state
  function removeMeal(meal: IMeal) {
    const ordersWithoutDeleteMeal = orders.filter(
      (order: IMeal) => order.name !== meal.name
    );
    dispach({type:"delteMeal",payload:{orders:ordersWithoutDeleteMeal}})
  }
  return (
    <Button variant={props.cls || "primary"} onClick={()=>removeMeal(props.meal)}>
      <Trash2 />
    </Button>
  );
}
