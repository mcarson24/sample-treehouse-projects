var employeeList = new Vue({
    el: '#employeeList',
    data: {
        employees: {}
    },
    ready() {
        this.$http.get('data/employees.json').then(response => {
            this.employees = response.body;
        })
    }
});

var roomList = new Vue({
    el: '#roomList',
    data: {
        rooms: {}
    },
    ready() {
        this.$http.get('data/rooms.json').then(response => {
            this.rooms = response.body;
        })
    }
})

