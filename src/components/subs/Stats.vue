<template>
  <article id="stats__card" class="[ bg-clr-light-200 dark:bg-clr-dark-800 ]">
    <div>
      <p class="[ text-clr-light-600 dark:text-clr-dark-100 ]">Repos</p>
      <h2 class="[ text-clr-light-800 dark:text-clr-dark-100 ]">{{ store.countRepos }}</h2>
    </div>
    <div>
      <p class="[ text-clr-light-600 dark:text-clr-dark-100 ]">Followers</p>
      <h2 class="[ text-clr-light-800 dark:text-clr-dark-100 ]">{{ store.countFollows }}</h2>
    </div>
    <div>
      <p class="[ text-clr-light-600 dark:text-clr-dark-100 ]">Following</p>
      <h2 class="[ text-clr-light-800 dark:text-clr-dark-100 ]">{{ store.countFollowing }}</h2>
    </div>
  </article>
</template>

<script>
  import { ref } from 'vue'
  import { userData } from '@/src/composables/temp-info'

  export default {
    name: 'Stats',
    props: ['store'],

    setup (props) {
      const store = props.store
      
      return {
        store
      }
    }
  }
</script>

<style lang="scss" scoped>
  #stats__card {
    display: flex;
    border-radius: 1rem;
    padding-inline: 3.2rem;
    padding-block: 1.6rem;
    margin-top: 3.2rem;

    > div {
      flex: 1 0 33%;
    }
  }

</style>