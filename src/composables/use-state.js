import { readonly, ref } from 'vue'

export const useState = (initialState) => {
  const state = ref(initialState)
  const previous = ref(initialState)

  const setState = (newState) => {
    previous.value = state.value
    state.value = newState;
  }

  return [readonly(previous), readonly(state), setState]
}