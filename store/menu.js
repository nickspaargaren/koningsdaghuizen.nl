export const state = () => ({
  isOpen: true
})

export const mutations = {
  toggle (state) {
    state.isOpen = !state.isOpen
  }
}
