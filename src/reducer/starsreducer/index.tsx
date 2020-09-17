export const starsReducer: any = (state: any, action: any) => {
    console.log(action)
    switch(action){
        case "yellow" :return {starsColor: "yellow"}
        case "red" :return {starsColor : "red"}
        case "green" :return {starsColor : "green"}
        case "blue" :return {starsColor : "blue"}
        case "pink" :return {starsColor : "pink"}
        case "orange" :return {starsColor : "orange"}
        case "salmon" :return {starsColor : "salmon"}
    }

  };
