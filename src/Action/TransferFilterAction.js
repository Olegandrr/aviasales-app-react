function filtersActions(id) {
  if (id === 'noTransfers') {
    return { type: 'NO_TRANSFER_FILTERS' }
  }
  if (id === 'oneTransfer') {
    return { type: 'ONE_TRANSFER_FILTERS' }
  }
  if (id === 'twoTransfer') {
    return { type: 'TWO_TRANSFER_FILTERS' }
  }
  if (id === 'threeTransfer') {
    return { type: 'THREE_TRANSFER_FILTERS' }
  }

  return {
    type: 'ALL_FILTERS',
    meta: {
      delayMS: 100,
    },
  }
}

export default filtersActions
