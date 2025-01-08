const app = Vue.createApp({
    // data, function
    // template: '<h2>I am the template</h2>',
    data() {
        return {
            url: "https://google.com",
            showBooks: true,
            title: 'The Final Empire',
            author: 'Ho Van Thien',
            age: 27,
            x: 0,
            y: 0,
            books: [
                {title: 'title book 1', author: 'author book 1', age: 25, image: 'assets/1.jpg', isFav: true},
                {title: 'title book 2', author: 'author book 2', age: 26, image: 'assets/1.jpg', isFav: false},
                {title: 'title book 3', author: 'author book 3', age: 27, image: 'assets/1.jpg', isFav: true},
            ]
        }
    },
    methods: {
        changeTitle() {
            this.title = 'TEST AAA'
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        handleEvent(e) {
            console.log(e, e.type);
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')