import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aboutIcon: [
      {
        id: 0,
        icon: 'bx bx-paint',
        title: 'Web Design',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.'
      }, {
        id: 1,
        icon: 'bx bx-code-block',
        title: 'Development',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.'
      }, {
        id: 2,
        icon: 'bx bx-camera',
        title: 'Photography',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.'
      }, 
    ],
    blogPost: [
      {
        id: 0,
        img: '7e4509294d9c93994b4554a2eb024256.jpeg',
        imgInfo: 'qualquer',
        title: 'Post 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.'
      }, {
        id: 1,
        img: '7e4509294d9c93994b4554a2eb024256.jpeg',
        imgInfo: 'qualquer',
        title: 'Post 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.'
      }, {
        id: 2,
        img: '7e4509294d9c93994b4554a2eb024256.jpeg',
        imgInfo: 'qualquer',
        title: 'Post 3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
