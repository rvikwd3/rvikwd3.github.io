var like_button = new Vue({
    el: '#like_button',
    data: {
        message: 'Hello Vue!'
    }
})

var hover_text_date = new Vue({
    el: '#hover',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

var disappear = new Vue({
    el: '#disappear',
    data: {
        seen: true
    }
})

var list = new Vue({
    el: '#list',
    data: {
        todos: [
            {text: 'Learn JS'},
            {text: 'Learn Vue'},
            {text: 'Build something awesome'}
        ]
    }
})

var reverser = new Vue({
    el: '#reverser',
    data: {
        message: 'Hello Vue.js!'
    },
    methods:{
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
})