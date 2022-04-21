<template>
  <section
    id="user__card"
    :class="[
      props.classnames,
      mode === false ? 'shadowed' : ''
    ]"
  >
    <Bio :store="store"/>
    <Stats :store="store"/>
    <Links :store="store"/>
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
    padding-block: 3.2rem;
    padding-inline: 2.4rem;
    margin-top: 2.4rem;
  }

  @media screen and (min-width: 932px) {
    #user__card {
      padding-inline: 4.8rem;
      padding-block: 4.8rem;
    }
  }
</style>