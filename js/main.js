
import { createApp, ref, onBeforeMount, router } from './vue/cli-service'
//import App from './index.html'
//import router from 'env.js'

//createApp(App).use(router).mount('#root'

//import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from './HomeView.html'
//import MovieDetail from './MovieDetail.html'

//import { ref, onBeforeMount } from "vue";
//import { useRoute } from "vue-router";


export default {
    el: '#root',

    data: {
        apikey: "8cedfce",
        movie: ref({}),
        route: useRoute(),
        search: ref(""),
        movies: ref([]),
    },

    methods: {
        SearchMovies() {
            alert("hier");
            if (this.search.value != "") {
                console.log(apikey);
                fetch(`http://www.omdbapi.com/?apikey=${this.apikey}&s=${this.search.value}`)
                    .then((response) => response.json())
                    .then((data) => {
                        this.movies.value = data.Search; //Array of Movies
                        this.search.value = ""; //Reset Search Box
                    });
            }
        }
    },

    data() {
        const { defineConfig } = require('@vue/cli-service')
        module.exports = defineConfig({
            transpileDependencies: true
        })
        const routes = [
            {
                path: '/',
                name: 'home',
                component: HomeView
            },
            {
                path: '/movie/:id',
                name: 'Movie Detail',
                component: MovieDetail
            }
        ]

        const router = createRouter({
            history: createWebHistory(process.env.BASE_URL),
            routes
        })



        onBeforeMount(() => {
            fetch(
                `http://www.omdbapi.com/?apikey=${apikey}&i=${route.params.id}&plot=full`
            )
                .then((response) => response.json())
                .then((data) => {
                    movie.value = data;
                });
        });


        return {
            apikey,
            router,
            movie,
            search,
            movies,
            SearchMovies,
        };
    },
}
