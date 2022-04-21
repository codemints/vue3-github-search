import axios from "axios"
import { defineStore } from "pinia"
import { ref } from 'vue'


export const defineUser = defineStore('userData', () => {
  const user = ref({
    info: {
      name: null,
      handle: null,
      url: null,
      joined: null,
      image: null,
      bio: null,
      countRepos: null,
      countFollows: null,
      countFollowing: null,
      location: null,
      twitter: null,
      blog: null,
      company: null,
    },
    status: ref(null)
  })

  const updateUserInfo = (data) => {
    user.value.status = 200
    user.value.info.name = data.name
    user.value.info.handle = `@${data.login}`
    user.value.info.url = data.html_url
    user.value.info.joined = data.created_at
    user.value.info.image = data.avatar_url
    user.value.info.bio = data.bio
    user.value.info.countRepos = data.public_repos
    user.value.info.countFollows = data.followers
    user.value.info.countFollowing = data.following
    user.value.info.location = data.location
    user.value.info.twitter = data.twitter_username
    user.value.info.blog = data.blog
    user.value.info.company = data.company
  }
  
  const handleUserRequest = async (username) => {
    const query = `https://api.github.com/users/${username}`

    try {
      const response = await axios.get(query)
      updateUserInfo(response.data)
    } catch (err) {
      const fail = err.toJSON()
      user.value.status = fail.status

      console.log(fail, user.value.status)
      return user.value.status
    }
  }

  return {
    user,
    handleUserRequest,
  }
})