new Vue({
    el: '#root',
    data: {
        userFound: false,
        username: '',
        gravatar: '',
        badges: '',
        javascriptPoints: '',
        user: '',
        error: '',
        searchText: 'Search'
    },
    computed: {
        altString() {
            return this.username + '\'s gravatar';
        },
        profilePage() {
            return 'https://teamtreehouse.com/' + this.user;
        }
    },
    methods: {
        searchForUser() {
            this.searchText = 'Searching...'
            let url = 'https://teamtreehouse.com/' + this.username + '.json';
            this.$http.get(url).then(response => {
                this.userFound = true;
                this.user = response.body.profile_name;
                this.gravatar = response.body.gravatar_url;
                this.badges = response.body.badges.length;
                this.javascriptPoints = response.body.points.JavaScript;
            }, response => {
                if (response.status === 404) {
                    this.error = `Could not find a user with that name (${response.statusText}).`;
                }
                if (response.body === null) {
                    this.error = 'Please enter a username to search for.';
                }
                this.searchText = 'Search';
            });
        },
        reset() {
            this.username = '',
            this.userFound = false;
            this.error = '';
            this.searchText = 'Search';
        }
    }
          
})