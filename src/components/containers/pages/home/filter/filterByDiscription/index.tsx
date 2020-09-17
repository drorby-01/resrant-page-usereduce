import React,{useContext, useState} from 'react'
import Form from "react-bootstrap/Form"
import {MealsContext} from "App"

export default function FilterByName() {

    const [state,dispatch] = useContext(MealsContext)
    const {meals} = state
    
    function GetMeals(event:any){
        
       const FilterMealsArray = meals.filter((element:any)=>element.description.includes(event.target.value))
       dispatch({type:"getMealsByDiscription",payload:{meals:FilterMealsArray}})
    }



    return (
        <>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Filter By Discription</Form.Label>
                <Form.Control type="text" placeholder="Enter meal discription" onChange={GetMeals} />  
            </Form.Group>
         </Form>
        </>
    )
}
