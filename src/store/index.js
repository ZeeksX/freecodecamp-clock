import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ 
    break: 5,
    session: 25,
    state: "Session"
  }),
  getters: {
    
  },
  actions: {
    
  },
})
