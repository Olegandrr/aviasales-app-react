/* eslint-disable prefer-const */
const logger = (store) => (next) => (action) => {
  console.log('dispatching = ', action)
  console.log('store до диспатча = ', store.getState())
  let result = next(action)
  console.log('store после диспатча = ', store.getState())
  return result
}

export default logger