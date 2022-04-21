<template>
  <header class="[ app__header ]">
    <h1 class="[ text-clr-dark-800 dark:text-clr-dark-100 ]">{{ title }}</h1>
    <div @click="setMode(!mode)" class="[ mode__toggle ] [ cursor-pointer ]">
      <h4 class="[ text-clr-light-400 dark:text-clr-dark-100 uppercase ]">{{ mode === true ? 'light' : 'dark' }}</h4>
      <i v-if="mode === true" class="[ fa-solid fa-sun ] [ text-icon-sm text-clr-dark-100 hover:text-clr-light-400 ]"></i>
      <i v-if="mode === false" class="[ fa-solid fa-moon ] [ text-icon-sm text-clr-light-400 ]"></i>
    </div>
  </header>
</template>

<script>
  import { ref } from 'vue'
  import { prevMode, mode, setMode } from '@/src/composables/mode'

  export default {
    name: 'Title',
    setup () {
      const title = ref('devfinder')
      const cNames = [

      ]
      
      return {
        title,
        mode,
        setMode,
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use '@scss/abstracts/variables' as *;
  .app__header,
  .mode__toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.6rem;
  }

  .mode__toggle {
    &:hover {
      h4, i {
        color: $clr-dark-800;
      }
    }

    h4, i {
      transition: color 0.3s ease-in-out;
    }
  }

  .dark .mode__toggle:hover {
    h4, i {
      color: $clr-light-400;
    }
  }

</style>