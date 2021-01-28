    const app = {
        data() {
            return {
                msg: 'Hello, Vue3'
            }
        }

    }
    Vue.createApp(app).mount('#app')

    const colors = require('tailwindcss/colors');
    
    module.exports = {
        theme: {
          colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
          }
        }
      }