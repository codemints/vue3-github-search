<template>
  <article id="bio__card">
    <div class="user__stats">
      <div>
        <h1 class="[ text-clr-light-800 dark:text-clr-dark-100 ]">{{ store.name }}</h1>
        <h3 class="[ text-clr-base hover:text-clr-light-600 ]"><a :href="store.url" target="_blank">{{ store.handle }}</a></h3>
      </div>
      <div class="[ text-clr-light-400 dark:text-clr-dark-100 ]">
        <p>Joined {{ formatDate() }}</p>
      </div>
    </div>
    <div class="[ user__bio ] [ text-clr-light-600 dark:text-clr-dark-100 ]">
      <p>{{ store.bio ? store.bio : 'This profile has no bio'}}</p>
    </div>
  </article>
</template>

<script>
  import { onMounted } from 'vue'

  export default {
    name: 'Bio',
    props: ['store'],

    setup (props) {
      const store = props.store

      const formatDate = () => {
        const months = [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
        ]
        const joined = new Date(store.joined)
        const day = joined.getDate()
        const month = months[joined.getMonth()]
        const year = joined.getFullYear()

        return `${day} ${month} ${year}`
      }

      return {
        store,
        formatDate,
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use '@scss/abstracts/variables' as *;
  .user__stats {
    display: flex;
    justify-content: space-between;

    h3 {
      font-weight: $font-regular;
    }

    a {
      font-size: 1.6rem;
      transition: $base;
    }
  }

  .user__bio {
    margin-top: 2rem;
  }
</style>