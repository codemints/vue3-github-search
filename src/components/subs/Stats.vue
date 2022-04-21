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
    padding-inline: 1.3rem;
    padding-block: 1.8rem;
    margin-top: 2.4rem;

    > div {
      flex: 1 0 33%;
      text-align: center;

      p {
        font-size: 1.1rem;
      }
    }
  }

  @media screen and (min-width: 768px) {
    #stats__card {
      padding-block: 1.6rem;
      padding-inline: 3.2rem;
      
      > div {
        text-align: start;
        h2 {
          font-size: 2.2rem;
        }
        p {
          font-size: 1.3rem;
        }
      }
    }
  }

  @media screen and (min-width: 932px) {
    #stats__card {
      margin-top: 3.2rem;
      width: calc(100% - (11.7rem + 3.6rem));
      margin-left: auto;
    }
  }
</style>