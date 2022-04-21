<template>
  <main id="root" class="bg-clr-light-200 dark:bg-clr-dark-800">
    <section id="components">
      <Title />
      <Search :classnames="classnames" />
      <Card :classnames="classnames" />
    </section>
  </main>
</template>

<script>
  import Title from './components/Title.vue'
  import Search from './components/Search.vue'
  import Card from './components/Card.vue'

  import { watch, onMounted } from 'vue'
  import { mode} from '@/src/composables/mode'
  import { defineUser } from '@/store/user'
  
  export default {
    name: 'App',

    components: {
      Title,
      Search,
      Card,
    },

    setup () {
      const user = defineUser()
      const classnames = [
        'bg-clr-dark-100',
        'dark:bg-clr-dark-600',
        'rounded-3xl'
      ]

      onMounted(() => {
        user.handleUserRequest('codemints')
      })
      
      watch(mode, () => {
        const body = document.body
        mode.value === true ? body.classList.add('dark') : body.classList.remove('dark')
      })

      return {
        classnames,
        mode,
      }
    }
  }
</script>

<style lang="scss" scoped>
  
  #root {
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 100vh;
    width: 100vw;

    padding-block: 5rem;
    padding-inline: 2.4rem;
  }

  #components {
    max-width: 73rem;
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    #root {
      padding-inline: 10rem;
    }
  }

</style>
