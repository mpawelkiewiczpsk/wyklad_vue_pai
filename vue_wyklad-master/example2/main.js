new Vue({
    el: '#app',
    data: {
        word: ''
    },
    computed: {
        reverseText: function () {
            return this.word.split('').reverse().join('');
        }
    }
})
