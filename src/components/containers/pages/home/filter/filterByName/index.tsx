import React,{useContext} from 'react'
import Form from "react-bootstrap/Form"
import {MealsContext} from "App"

export default function FilterByName() {

    const [state,dispatch] = useContext(MealsContext)
    const {meals} = state

    function GetMeals(event:any){
       
       const FilterMealsArray = meals.filter((element:any)=>element.name.includes(event.target.value))
        console.log(FilterMealsArray)
       dispatch({type:"getMealsByName",payload:{meals:FilterMealsArray}})
    
    }



    return (
        <>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Filter By Name</Form.Label>
                <Form.Control type="text" placeholder="Enter meal name" onChange={GetMeals} />  
            </Form.Group>
         </Form>
        </>
    )
}
