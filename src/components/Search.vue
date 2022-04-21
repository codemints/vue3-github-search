<template>
  <section
    id="user__search"
    :class="[
      '[ cursor-pointer ]',
      props.classnames,
      mode === false ? 'shadowed' : ''
    ]"
  >
    <div class="[ input__group ] [ bg-clr-light-200 dark:bg-clr-dark-800 ]">
      <i class="[ fa-regular fa-magnifying-glass ] [ text-icon text-clr-base ]"></i>
      <input ref="input" @input="updateInput" class="[ cursor-text ] [ text-clr-dark-800 dark:text-clr-dark-100 ]" type="text" placeholder="Search A GitHub username...">
    </div>
    <div v-if="userStatus > 299" class="[ response ]">
      <p class="[ font-bold text-clr-warn whitespace-nowrap ]">{{ response }}</p>
    </div>
    <button @click="fetchUser()">Search</button>
  </section>
</template>

<script>
  import { ref } from 'vue'
  import { mode } from '@/src/composables/mode'

  import { defineUser } from '@/store/user'

  export default {
    name: 'Search',

    props: ['classnames'],

    setup (props) {
      const user = defineUser()
      const getUser = user.handleUserRequest
      const userStatus = ref(user.user.status)
      const response = 'No results'
      const searchTerm = ref('')
      const input = ref('')

      const fetchUser = () => {
        getUser(searchTerm.value)
        input.value.value = ''
      }

      const updateInput = (e) => {
        searchTerm.value += e.data
      }
      
      return {
        props,
        mode,
        response,
        fetchUser,
        userStatus,
        searchTerm,
        updateInput,
        input
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use '@scss/abstracts' as *;

  #user__search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2.4rem;

    padding: 1rem;
    margin-top: 3.6rem;
  }

  .input__group {
    display: flex;
    align-items: center;
    gap: 2.4rem;

    height: 100%;
    width: 100%;
    border-radius: 1rem;
    padding: 1rem;

    input {
      font-size: 1.8rem;
      width: 100%;
      background-color: transparent;

      &:focus {
        outline: none;
      }
    }
  }

  button {
    @include setButtonPadding(1.2rem); 
    color: $clr-dark-100;
    font-size: 1.6rem;
    font-weight: $font-bold;
    background-color: $clr-base;
    border-radius: 1rem;
    transition: $base;

    &:hover {
      background-color: lighten($clr-base, 18%);
    }

    &:focus {
      outline: 2px solid $clr-warn;
    }
  }

</style>