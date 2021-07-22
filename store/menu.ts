type Menu = {
  isOpen: Boolean
}

export const state = () => {
  return {
    isOpen: false
  }
}

export const mutations = {
  toggle (state: Menu) {
    state.isOpen = !state.isOpen
  }
}
