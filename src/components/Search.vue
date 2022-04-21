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
      <i class="[ fa-regular fa-magnifying-glass ] [ text-clr-base ]"></i>
      <input ref="input" @input="updateInput" @keyup.enter="fetchUser" class="[ cursor-text ] [ text-clr-dark-800 dark:text-clr-dark-100 ]" type="text" placeholder="Search A GitHub username...">
    </div>
    <div v-if="userStatus > 399" class="[ response ]">
      <p class="[ font-bold text-clr-warn whitespace-nowrap ]">No Result</p>
    </div>
    <button @click="fetchUser">Search</button>
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
      const userStatus = ref(null)
      const searchTerm = ref('')
      const input = ref('')

      const fetchUser = async () => {
        const response = await getUser(searchTerm.value)
        searchTerm.value = ''
        input.value.value = ''
        input.value .focus()
        userStatus.value = user.user.status
      }

      const updateInput = (e) => {
        searchTerm.value += e.data
        console.log(e)
      }
      
      return {
        props,
        mode,
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
    gap: 1rem;

    padding: 0.5rem;
    margin-top: 3.6rem;
  }

  .input__group {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    height: 100%;
    width: 100%;
    border-radius: 1rem;
    padding: 1rem;

  }

  i {
    font-size: 2rem;
  }

  input {
    font-size: 1.4rem;
    width: 100%;
    background-color: transparent;

    &:focus {
      outline: none;
    }
  }

  button {
    color: $clr-dark-100;
    font-size: 1.6rem;
    font-weight: $font-bold;
    background-color: $clr-base;
    border-radius: 1rem;
    padding-block: 1.2rem;
    padding-inline: 1.6rem;
    transition: $base;

    &:hover {
      background-color: lighten($clr-base, 18%);
    }

    &:focus {
      outline: 2px solid $clr-warn;
    }
  }

  @media screen and (min-width: 768px) {
    #user__search,
    .input__group {
      gap: 2.4rem;
    }
    input {
      font-size: 1.8rem;
    }
    button {
      padding-inline: 2.4rem;
    }
    i {
      font-size: 2.4rem;
    }
  }

</style>