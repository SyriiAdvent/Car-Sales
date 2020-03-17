export const ADD_FEATURE ='ADD_FEATURE'
export const REMOVE_FEATURE ='REMOVE_FEATURE'

export const removeFeature = (payload) => ({
  type: REMOVE_FEATURE,
  payload
})


export const addFeature = (payload) => ({
  type: ADD_FEATURE,
  payload
})
