<template>
  <article id="bio__card">
    <div class="user__stats">
      <div class="user__img">
        <img :src="store.image" alt="">
      </div>

      <div class="user__info">
        <div>
          <h2 class="[ text-clr-light-800 dark:text-clr-dark-100 ]">{{ store.name }}</h2>
          <h3 class="[ text-clr-base hover:text-clr-light-600 ]"><a :href="store.url" target="_blank">{{ store.handle }}</a></h3>
        </div>
        <div class="[ text-clr-light-400 dark:text-clr-dark-100 ]">
          <p>Joined {{ formatDate() }}</p>
        </div>
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
  $gap: 5rem;

  .user__img {
    max-width: 7rem;
    max-height: 7rem;
    border-radius: 50%;
    overflow: hidden;
  }

  .user__stats {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    gap: 2rem;

    > div {
      flex: 1 0 calc(50% - $gap)
    }

    p {
      white-space: nowrap;
      margin-top: 0.5rem;
    }
    h3 {
      font-weight: $font-regular;
    }

    a {
      transition: $base;
    }
  }

  .user__bio {
    margin-top: 3.2rem;
  }

  @media screen and (min-width: 768px) {
    .user__stats {
      gap: 3.6rem;

      a {
        font-size: 1.6rem;
      }
    }
    .user__img {
      max-width: 11.7rem;
      max-height: 11.7rem;
    }

    .user__bio {
      margin-top: 2.4rem;
    }
  }

  @media screen and (min-width: 932px) {
    .user__info {
      display: flex;
      justify-content: space-between;
    }

    .user__bio {
      width: calc(100% - (11.7rem + 3.6rem));
      margin-left: auto;
      margin-top: -2.4rem;
    }
  }
</style>