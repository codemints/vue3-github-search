<template>
  <section
    id="user__card"
    :class="[
      props.classnames,
      mode === false ? 'shadowed' : ''
    ]"
  >
    <div class="user__img">
      <img :src="store.image" alt="">
    </div>
    <div class="user__info">
      <Bio :store="store"/>
      <Stats :store="store"/>
      <Links :store="store"/>
    </div>
  </section>
</template>

<script>

  import Bio from './subs/Bio.vue'
  import Stats from './subs/Stats.vue'
  import Links from './subs/Links.vue'

  import { mode } from '@/src/composables/mode'
  import { defineUser } from '@/store/user'

  export default {
    name: 'Card',

    components: {
      Bio,
      Stats,
      Links
    },

    props: ['classnames'],

    setup (props) {
      const store = defineUser().user.info;

      return {
        props,
        mode,
        store,
      }
    }
  }
</script>

<style lang="scss" scoped>
  #user__card {
    display: flex;
    gap: 3.6rem;

    padding: 4.8rem;
    margin-top: 2.4rem;
  }

  .user__img {
    max-width: 11.7rem;
    max-height: 11.7rem;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
  }

  .user__info {
    width: 100%;
  }
</style>