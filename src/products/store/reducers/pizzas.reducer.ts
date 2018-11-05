import {Pizza} from "../../models/pizza.model";
import * as fromPizzaActions from '../actions/pizzas.action';

export interface PizzaState {
  data: Pizza[],
  loaded: boolean,
  loading: boolean
}
export const initialState: PizzaState = {
  data: [ ],
  loaded: false,
  loading: false
};

export function reducer(state = initialState, action: fromPizzaActions.PizzasAction): PizzaState {

  switch (action.type) {
    case fromPizzaActions.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true
      }
    }
    case fromPizzaActions.LOAD_PIZZAS_SUCCESS: {
      return {
        ...state,
        // ...action.payload,
        loading: false,
        loaded: true
      }
    }
    case fromPizzaActions.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      }
    }
  }
  return state;
}

export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzas = (state: PizzaState) => state.data;
