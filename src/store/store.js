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
        id: 1,
        img: '/post-1.jpg',
        imgInfo: 'qualquer',
        title: 'Post 1',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        `
      }, {
        id: 2,
        img: '/post-2.jpg',
        imgInfo: 'qualquer',
        title: 'Post 2',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        `
      }, {
        id: 3,
        img: '/post-3.jpg',
        imgInfo: 'qualquer',
        title: 'Post 3',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        `
      }, {
        id: 4,
        img: '/post-4.jpg',
        imgInfo: 'qualquer',
        title: 'Post 4',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        `
      }, {
        id: 5,
        img: '/post-5.jpg',
        imgInfo: 'qualquer',
        title: 'Post 5',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        `
      }, {
        id: 6,
        img: '/post-6.jpg',
        imgInfo: 'qualquer',
        title: 'Post 6',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        `
      }, {
        id: 7,
        img: '/post-7.jpg',
        imgInfo: 'qualquer',
        title: 'Post 7',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        `
      }, {
        id: 8,
        img: '/post-8.jpg',
        imgInfo: 'qualquer',
        title: 'Post 8',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        `
      }, {
        id: 9,
        img: '/post-9.jpg',
        imgInfo: 'qualquer',
        title: 'Post 9',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quaerat non recusandae natus odit inventore quia quos corrupti tempore amet pariatur fugiat distinctio veritatis, necessitatibus nam ullam esse id dignissimos?
        `
      }
    ],
    showPost: 3
  },
  getters: {
    blogPost(state) {
      return state.blogPost.reverse();
    },
    blogPostItem: state => id => {
      let post = state.blogPost.find(item => {
        return (item.id == id);
      })
      return post;
    }
  },
  mutations: {
    plusShowPost(state) {
      if(state.showPost < state.blogPost.length) {
        state.showPost += 3;
      }
    }
  },
  modules: {
  }
})
