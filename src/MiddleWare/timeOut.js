/* eslint-disable no-unused-vars */
const timeOut = (store) => (next) => (action) => {
  const delayMS = action?.meta?.delayMS
  if (!delayMS) {
    return next(action)
  }

  const timerID = setTimeout(() => next(action), delayMS)

  return () => clearTimeout(timerID)
}

export default timeOut
