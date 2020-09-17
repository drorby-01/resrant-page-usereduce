export const reducer: any = (state: any, action: any) => {
    if (action.type === "add") {
      return { ...state, meals: [...action.payload.meals] };
    }
    else if(action.type ==="deleteAll"){
      return {...state,orders:[]}
    }
    else if (action.type === "addOrder") {
      return {...state,orders:[...state.orders,...action.payload.orders]}
    }
    else if (action.type === "delteMeal")
      return {...state,orders:[...action.payload.orders]}
    else if(action.type === "getMealsByName")
      return {...state,meals:[...action.payload.meals]}
    else if(action.type === "getMealsByDiscription")
      return {...state,meals:[...action.payload.meals]}
  };
