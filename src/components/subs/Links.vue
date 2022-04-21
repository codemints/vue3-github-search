<template>
  <article id="links__card">
    <div class="[ text-clr-light-600 dark:text-clr-dark-100 ]" :class="!store.location ? styles.doesNotExist.block : ''">
      <i class="[ fa-solid fa-location-dot ] [ text-icon-sm ]"></i>
      <p>{{ store.location ? store.location : 'Not Available' }}</p>
    </div>

    <div
      class="[ text-clr-light-600 dark:text-clr-dark-100 ]" :class="!store.twitter ? styles.doesNotExist.block : ''"
    >
      <i class="[ fa-brands fa-twitter ] [ text-icon-sm ]"></i>
      <p>
        {{ store.twitter ? store.twitter : 'Not Available' }}
      </p>
    </div>

    <div class="[ text-clr-light-600 dark:text-clr-dark-100 ]"  :class="!store.blog ? styles.doesNotExist.block : ''">
      <i class="[ fa-solid fa-link ] [ text-icon-sm ]"></i>
      <a :href="store.blog ? `https://www.${store.blog}` : '#'" :class="[ store.blog ? styles.doesExist.link : styles.doesNotExist.link ]" target="_blank">{{ store.blog ? store.blog : 'Not Available' }}</a>
    </div>

    <div class="[ text-clr-light-600 dark:text-clr-dark-100 ]"  :class="!store.company ? styles.doesNotExist.block : ''">
      <i class="[ fa-solid fa-building ] [ text-icon-sm ]"></i>
      <p>{{ store.company ? store.company : 'Not Available' }}</p>
    </div>
  </article>
</template>

<script>

  export default {
    name: 'Links',
    props: ['store'],

    setup (props) {
      const styles = {
        doesExist: {
          block: [
          'hover:text-clr-light-800',
          'hover:dark:text-clr-light-400',
          ],
          link: ['hover:underline']
        },
        doesNotExist: {
          block: ['opacity-50'],
          link: [
            'hover:no-underline',
            'hover:cursor-text'
          ]
        }
      }

      const store = props.store
      
      return {
        styles,
        store,
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use '@scss/abstracts/variables' as *;

  #links__card {
    $gap: 5rem;
    display: flex;
    flex-flow: row wrap;
    column-gap: $gap;

    margin-top: 2.4rem;

    p, a {
      white-space: nowrap;
    }

    i {
      width: 2.4rem;
    }

    i, a {
      transition: $base;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 1.6rem;

      flex: 1 0 calc(50% - $gap);

      margin-top: 1.6rem;
    }
  }

  @media screen and (min-width: 932px) {
    #links__card {
      width: calc(100% - (11.7rem + 3.6rem));
      margin-left: auto;
    }
  }

</style>