new Vue({
    el: '#app',
    data: {
        firstname: 'Jan',
        lastname: 'Kowalski'
    },
    methods: {
        upperFirstName: function () {
            return this.firstname.toUpperCase();
        }
    }
})
