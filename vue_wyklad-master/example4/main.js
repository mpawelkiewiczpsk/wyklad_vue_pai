new Vue({
    el: '#app',
    data: {
        lessonsStart: [
            '7:10',
            '8:00',
            '8:55',
            '9:50',
            '10:40',
            '11:50',
            '12:50'
        ],
        schedule: {
            'Poniedziałek': {
                startsAt: 0,
                lessons: [
                    'Religia',
                    'Matematyka',
                    'Język angielski'
                ]
            },
            'Wtorek': {
                startsAt: 2,
                lessons: [
                    'Matematyka',
                    'Język polski',
                    'Geografia',
                    'WOS'
                ]
            },
            'Środa': {
                startsAt: 1,
                lessons: [
                    'Sztuka nowoczesna',
                    'Matematyka',
                    'Historia'
                ]
            },
            'Czwartek': {
                startsAt: 1,
                lessons: [
                    'Sztuka nowoczesna',
                    'Matematyka',
                    'Matematyka',
                    'Matematyka'
                ]
            },
            'Piątek': {
                startsAt: 4,
                lessons: [
                    'Religia',
                    'Wychowanie fizyczne'
                ]
            }
        }
    },
    computed: {
        lessonsEnd: function () {
            return this.lessonsStart.map(function (v) {
                var times = v.split(':').map(Number);
                times[1] += 45;
                if(times[1] >= 60){
                    times[0]++;
                    times[1] %= 60
                }

                return times.join(':');
            })
        }
    }
})
