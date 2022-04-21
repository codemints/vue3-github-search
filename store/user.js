import axios from "axios"
import { defineStore } from "pinia"
import { ref } from 'vue'

const updateUserInfo = (data) => {
  const userObj = defineUser().user
  const userInfo = userObj.info

  userObj.status = 200
  userInfo.name = data.name
  userInfo.handle = `@${data.login}`
  userInfo.url = data.html_url
  userInfo.joined = data.created_at
  userInfo.image = data.avatar_url
  userInfo.bio = data.bio
  userInfo.countRepos = data.public_repos
  userInfo.countFollows = data.followers
  userInfo.countFollowing = data.following
  userInfo.location = data.location
  userInfo.twitter = data.twitter_username
  userInfo.blog = data.blog
  userInfo.company = data.company
}

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

  const handleUserRequest = (username) => {
    const query = `https://api.github.com/users/${username}`

    axios.get(query)
      .then(res => {
        const data = res.data
        console.log(data)
        updateUserInfo(data)
      })
      .catch(err => {
        console.log(err.toJSON())
        user.status = err.toJSON().status
      })
  }

  return {
    user,
    handleUserRequest,
  }
})