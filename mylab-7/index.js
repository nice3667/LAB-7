var app = new Vue({
    el: '#app',
    data: {
      text: 'ทดสอบการทำงาน'
    },
    methods: {
      reverseText: function () {
        this.text = this.text.split('').reverse().join('')
      }
    }
  })