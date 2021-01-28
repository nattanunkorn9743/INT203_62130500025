    const app = {
        data() {
            return {
                msg: 'Hello, Vue3'
            }
        }

    }
    Vue.createApp(app).mount('#app')

    module.exports = {
        theme: {
         textColor: theme => theme('colors'),
         textColor: {
           'primary': '#3490dc',
           'secondary': '#ffed4a',
           'danger': '#e3342f',
         }
        }
      }