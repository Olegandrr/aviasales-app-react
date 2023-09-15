function showMoreTicketsAction() {
  return {
    type: 'SHOW_MORE_TICKETS',
    meta: {
      delayMS: 500,
    },
  }
}

export default showMoreTicketsAction
