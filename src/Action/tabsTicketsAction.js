function tabsTicketsAction(name) {
  if (name === 'cheap') {
    return {
      type: 'CHEAP_TAB',
      name,
    }
  }
  if (name === 'fast') {
    return {
      type: 'FAST_TAB',
      name,
    }
  }
  return {
    type: 'OPTIMAL_TAB',
    name,
  }
}

export default tabsTicketsAction
