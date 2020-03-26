import { ADD_FEATURE,REMOVE_FEATURE} from '../Actions/ShopActions'

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

export default (state = initialState, { type, payload }) => {
  const itemFilter = () => {
    const newItem = state.additionalFeatures.find(item => item.id === payload)
    return newItem
  }
  switch (type) {
    case ADD_FEATURE:
      const newItemPrice = itemFilter()
      return {
        ...state,
        additionalPrice: state.additionalPrice + newItemPrice.price,
        car: {
          ...state.car,
          features: [ 
            ...state.car.features,
            itemFilter()
          ]
        }
      }
      case REMOVE_FEATURE:
        const removedItemPrice = itemFilter();
        return {
          ...state,
          additionalPrice: state.additionalPrice - removedItemPrice.price,
          car: {
            ...state.car,
            features: [
              ...state.car.features.filter( item => item.id !== payload)
            ]
          }
        }
    default:
      return state
  }
}
