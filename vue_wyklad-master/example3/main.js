new Vue({
    el: '#app',
    data: {
        hp: 100
    },
    computed: {
        barColor: function () {
            if(this.hp >= 75)
                return 'green';
            else if(this.hp >= 50)
                return 'yellow';
            else if(this.hp >= 30)
                return 'orange';
            else
                return 'red'
        }
    },
    watch: {
        hp: function (newValue, oldValue) {
            if(newValue < 0){
                this.hp = 100;
            }
        }
    }
})
