window.Vue = require('vue');
             require ('vue-resource');

new Vue({
    el: '#app',
    data: {
        streamer: '',
        foundStreamer: false,
        streamerIsLive: false,
        displayName: '',
        photo: '',
        error: '',
        status: '',
        game: ''
    },
    computed: {
        photoAltText() {
            return this.displayName + '\'s logo';
        },
        title() {
            if (this.streamerIsLive) {
                return this.displayName + ' ' + status;
            }
            return this.displayName;
        },
        twitchLink() {
            return 'https://twitch.tv/' + this.streamer;
        },
        gotStreamer() {
            return this.foundStreamer;
        }
    },
    methods: {
        searchForStreamer() {
            
            this.error = '';

            this.getStreamerInfo(this.streamer);

            this.getStreamInfo(this.streamer);
        },
        getStreamerInfo(streamer) {
            let uri = 'https://api.twitch.tv/kraken/channels/' + streamer + '?client_id=mwgao3g4gq5d2bavayqm6efzxlw53w';
            this.$http.get(uri).then(response => {
                this.foundStreamer = true;

                let channel = response.body;

                this.status = channel.status;              
                this.game = channel.game;
                this.photo = channel.logo;
                this.displayName = channel.display_name;
            }, response => { 
                if (response.body.status === 404) {
                    this.error = response.body.message;
                }
            });
        },
        getStreamInfo(streamer) {
            let uri = 'https://api.twitch.tv/kraken/streams/' + this.streamer + '?client_id=mwgao3g4gq5d2bavayqm6efzxlw53w';
            this.$http.get(uri).then(response => {
                if (response.body.stream !== null) {
                    this.streamerIsLive = true;
                }
            }, response => {
                this.error = response.body.message;
            });
        },
        resetData() {
            this.streamer = '';
            this.foundStreamer = false;
            this.streamerIsLive = false;
            this.error = '';
            this.status = '';
            this.game = '';
        }
    }
})