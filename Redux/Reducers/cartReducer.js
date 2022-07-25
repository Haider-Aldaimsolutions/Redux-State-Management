let defaultState = {
    selectedItems: { count:0 },
  };
  
  const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
      // case "ADD_TO_CART": {
      //   let newState = { ...state };
  
      //   if (action.payload.checkboxValue) {
      //     console.log("ADD TO CART");
  
      //     newState.selectedItems = {
      //       items: [...newState.selectedItems.items, action.payload],
      //       restaurantName: action.payload.restaurantName,
      //     };
      //   } else {
      //     console.log("REMOVE FROM CART");
      //     newState.selectedItems = {
      //       items: [
      //         ...newState.selectedItems.items.filter(
      //           (item) => item.title !== action.payload.title
      //         ),
      //       ],
      //       restaurantName: action.payload.restaurantName,
      //     };
      //   }
      //   console.log(newState, "👉");
      //   return newState;
      // }
      case "ADD_COUNT": {
        console.log("ADD_COUNT");
      
        let newState = { ...state };
        //console.log('=====',newState);
        state.selectedItems = {
          count:state.selectedItems.count+1,
          
        };
        console.log(state.selectedItems.count);
        return state;
      }
    
      case "REMOVE_COUNT": {
        console.log("REMOVE_COUNT");
        let newState = { ...state };
        state.selectedItems = {
          
          count:state.selectedItems.count-1,        
        };console.log(state.selectedItems.count);
        return state;

      }
      default:
        return state;
    }
  };
  
  export default cartReducer;
  