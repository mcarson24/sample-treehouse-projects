var jsonFlickrFeed = function(response){
    if (response.items.length === 0) {
        flickr.photos = false;
    }
    else {
        flickr.photos = response.items;
    }
}

var flickr = new Vue({
    el: 'body',
    data: {
        options: [
            {
                item: 'Dog',
            },
            {
                item: 'Cat',
            },
            {
                item: 'Moose',
            },
            {
                item: 'Philadelphia',
            }
        ],
        active: {

        },
        photos: {},
        search: ''
    },
    methods: {
        getPhotos(tag) {
            this.active = tag;
            this.$http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=' + tag.item);
        },
        searchPhotos() {
            this.$http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=' + this.search);
            this.search = '';
        },
        setSelected() {
            console.log('hello');
        }
    }
})