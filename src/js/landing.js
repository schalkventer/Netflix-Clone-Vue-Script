const landing = new Vue({

    // Element Where you mounting the app
    el: '#app-landing',

    //  Memebers - Variables
    data: {
        searchInput: {
            searchText: "",
        },

        searched: false,

        movies: [
            {
                // id : '#' + Math.floor(Math.random() * 9000) + 1000,
                Title: "Charlie and the Chocolate Factory",
                Poster: "https://m.media-amazon.com/images/M/MV5BNjcxMjg1Njg2NF5BMl5BanBnXkFtZTcwMjQ4NzMzMw@@._V1_SX300.jpg",
                Description:
                    "When Willy Wonka decides to let five children into his chocolate factory, he decides to release five"
                    + "golden tickets in five separate chocolate bars, causing complete mayhem. The tickets start to be found,"
                    + "with the fifth going to a very special boy, called Charlie Bucket. With his Grandpa, Charlie joins the"
                    + "rest of the children to experience the most amazing factory ever. But not everything goes to plan within"
                    + "the factory.",
                CommingSoon: "0",
                Reminder: "0",
                ReleaseDate: "2005",
                Genre: "6",
                Actors: "7",
            },

            {
                // id : '#' + Math.floor(Math.random() * 9000) + 1000,
                Title: "Cruella",
                Poster: "https://m.media-amazon.com/images/M/MV5BOWI5YTUxOWEtZmRiZS00ZmQxLWE2NzctYTRiODA2NzE1ZjczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
                Description:
                    "Before she becomes Cruella de Vil, teenage Estella has a dream. She wishes to become a fashion designer,"
                    + "having been gifted with talent, innovation, and ambition all in equal measures. But life seems intent on"
                    + "making sure her dreams never come true. Having wound up penniless and orphaned in London at 12, 10 years"
                    + "later Estella runs wild through the city streets with her best friends and partners-in-(petty)-crime,"
                    + "Horace and Jasper, two amateur thieves. When a chance encounter vaults Estella into the world of the young"
                    + "rich and famous, however, she begins to question the existence she's built for herself in London and wonders"
                    + "whether she might, indeed, be destined for more after all.",
                CommingSoon: "0",
                Reminder: "0",
                ReleaseDate: "2021",
                Genre: "6",
                Actors: "7",
            },
            {
                // id : '#' + Math.floor(Math.random() * 9000) + 1000,
                Title: "Interstellar",
                Poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
                Description:
                    "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival:"
                    + "Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to"
                    + "go where no man has gone before, a planet that may have the right environment to sustain human life.",
                CommingSoon: "3",
                Reminder: "4",
                ReleaseDate: "2014",
                Genre: "6",
                Actors: "7",
            },
            {
                // id : '#' + Math.floor(Math.random() * 9000) + 1000,
                Title: "Sunshine",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTU5Nzg2OTk2NF5BMl5BanBnXkFtZTYwNTc1ODM3._V1_SX300.jpg",
                Description:
                    "50 years into the future, the Sun begins to die, and Earth is dying as a result. A team of astronauts is sent"
                    + "to revive the Sun - but the mission fails. Seven years later, a new team is sent to finish the mission"
                    + "as mankind's last hope.",
                CommingSoon: "3",
                Reminder: "4",
                ReleaseDate: "2007",
                Genre: "6",
                Actors: "7",
            },
            {
                // id : '#' + Math.floor(Math.random() * 9000) + 1000,
                Title: "James and the Giant Peach",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTNkNWIwNGUtNTJlOC00NDU3LTk0NWEtNjNjNDM4NzRiNThkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
                Description:
                    "James' happy life at the English seaside is rudely ended when his parents are killed by a rhinoceros"
                    + "and he goes to live with his two horrid aunts. Daringly saving the life of a spider he comes"
                    + "into possession of magic boiled crocodile tongues, after which an enormous peach starts to grow in the garden."
                    + "Venturing inside, he meets not only the spider but a number of new friends including a ladybug and a centipede"
                    + "who help him with his plan to try to get to New York.",
                CommingSoon: "3",
                Reminder: "4",
                ReleaseDate: "1996",
                Genre: "6",
                Actors: "7",
            },
            {
                // id : '#' + Math.floor(Math.random() * 9000) + 1000,
                Title: "Chicken Run",
                Poster: "https://m.media-amazon.com/images/M/MV5BNDgxNjZlZDYtZGJmZC00Mjg0LWEwYzctYWQ0MWFjNTM3ZmM4XkEyXkFqcGdeQXVyNTM5NzI0NDY@._V1_SX300.jpg",
                Description:
                    "Having been hopelessly repressed and facing eventual certain death at the chicken farm where they are held,"
                    + "Rocky the rooster and Ginger the chicken decide to rebel against the evil Mr. and Ms. Tweedy, the farm's owners."
                    + "Rocky and Ginger lead their fellow chickens in a great escape from the murderous farmers and their farm of doom.",
                CommingSoon: "3",
                Reminder: "4",
                ReleaseDate: "2000",
                Genre: "6",
                Actors: "7",
            },
            {
                // id : '#' + Math.floor(Math.random() * 9000) + 1000,
                Title: "A.I. Artificial Intelligence",
                Poster: "https://m.media-amazon.com/images/M/MV5BNWU2NzEyMDYtM2MyOS00OGM3LWFkNzAtMzRiNzE2ZjU5ZTljXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
                Description:
                    "In the not-so-far future the polar ice caps have melted and the resulting rise of the ocean waters has drowned all"
                    + "the coastal cities of the world. Withdrawn to the interior of the continents, the human race keeps advancing,"
                    + "reaching the point of creating realistic robots (called mechas) to serve them. One of the mecha-producing companies"
                    + "builds David, an artificial kid which is the first to have real feelings, especially a never-ending love for his 'mother',"
                    + "Monica. Monica is the woman who adopted him as a substitute for her real son, who remains in cryo-stasis, stricken by an"
                    + "incurable disease. David is living happily with Monica and her husband, but when their real son returns home after a cure"
                    + "is discovered, his life changes dramatically.",
                CommingSoon: "3",
                Reminder: "4",
                ReleaseDate: "2001",
                Genre: "6",
                Actors: "7",
            },
            {
                // id : '#' + Math.floor(Math.random() * 9000) + 1000,
                Title: "Grave of the Fireflies",
                Poster: "https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
                Description:
                    "The story of Seita and Setsuko, two young Japanese siblings, living in the declining days of World War II."
                    + "When an American firebombing separates the two children from their parents, the two siblings must rely completely"
                    + "on one another while they struggle to fight for their survival.",
                CommingSoon: "3",
                Reminder: "4",
                ReleaseDate: "1988",
                Genre: "6",
                Actors: "7",
            },
            {
                // id : '#' + Math.floor(Math.random() * 9000) + 1000,
                Title: "The Gods Must Be Crazy",
                Poster: "https://m.media-amazon.com/images/M/MV5BMzVhZDE2N2UtMjEyZi00ODkyLWJhMTctM2NhZWNkNGE4NWYyXkEyXkFqcGdeQXVyMzg1ODEwNQ@@._V1_SX300.jpg",
                Description:
                    "A Sho in the Kalahari desert encounters technology for the first time--in the shape of a Coke bottle."
                    + "He takes it back to his people, and they use it for many tasks. The people start to fight over it,"
                    + "so he decides to return it to the God--where he thinks it came from. Meanwhile, we are introduced to"
                    + "a clumsy biologist, a schoolteacher assigned to a small village, and a despotic revolutionary.",
                CommingSoon: "3",
                Reminder: "4",
                ReleaseDate: "1980",
                Genre: "6",
                Actors: "7",
            },
            {
                // id : '#' + Math.floor(Math.random() * 9000) + 1000,
                Title: "Ant-Man",
                Poster: "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg",
                Description:
                    "Armed with the astonishing ability to shrink in scale but increase in strength, con-man Scott Lang must embrace"
                    + "his inner-hero and help his mentor, Dr. Hank Pym, protect the secret behind his spectacular Ant-Man suit from"
                    + "a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull"
                    + "off a heist that will save the world.",
                CommingSoon: "3",
                Reminder: "4",
                ReleaseDate: "2015",
                Genre: "6",
                Actors: "7",
            },

            {
                // id : '#' + Math.floor(Math.random() * 9000) + 1000,
                Title: "1",
                Poster: "2",
                Description:
                    "We have three championships in total (go-karting, N400 road cars tuned, and GT3 Race Cars) "
                    + "We have a Nations cup where racers from different countries go head to head, and we have a Manufacturers cup "
                    + "where drivers from different teams compete in a circuit race. For more information or help please contact "
                    + "the organisers or your team managers.",
                CommingSoon: "3",
                Reminder: "4",
                ReleaseDate: "5",
                Genre: "6",
                Actors: "7",
            },
            {
                // id : '#' + Math.floor(Math.random() * 9000) + 1000,
                Title: "1",
                Poster: "2",
                Description:
                    "We have three championships in total (go-karting, N400 road cars tuned, and GT3 Race Cars) "
                    + "We have a Nations cup where racers from different countries go head to head, and we have a Manufacturers cup "
                    + "where drivers from different teams compete in a circuit race. For more information or help please contact "
                    + "the organisers or your team managers.",
                CommingSoon: "3",
                Reminder: "4",
                ReleaseDate: "5",
                Genre: "6",
                Actors: "7",
            },
            {
                // id : '#' + Math.floor(Math.random() * 9000) + 1000,
                Title: "1",
                Poster: "2",
                Description:
                    "We have three championships in total (go-karting, N400 road cars tuned, and GT3 Race Cars) "
                    + "We have a Nations cup where racers from different countries go head to head, and we have a Manufacturers cup "
                    + "where drivers from different teams compete in a circuit race. For more information or help please contact "
                    + "the organisers or your team managers.",
                CommingSoon: "3",
                Reminder: "4",
                ReleaseDate: "5",
                Genre: "6",
                Actors: "7",
            },
            {
                // id : '#' + Math.floor(Math.random() * 9000) + 1000,
                Title: "1",
                Poster: "2",
                Description:
                    "We have three championships in total (go-karting, N400 road cars tuned, and GT3 Race Cars) "
                    + "We have a Nations cup where racers from different countries go head to head, and we have a Manufacturers cup "
                    + "where drivers from different teams compete in a circuit race. For more information or help please contact "
                    + "the organisers or your team managers.",
                CommingSoon: "3",
                Reminder: "4",
                ReleaseDate: "5",
                Genre: "6",
                Actors: "7",
            },
            {
                // id : '#' + Math.floor(Math.random() * 9000) + 1000,
                Title: "1",
                Poster: "2",
                Description:
                    "We have three championships in total (go-karting, N400 road cars tuned, and GT3 Race Cars) "
                    + "We have a Nations cup where racers from different countries go head to head, and we have a Manufacturers cup "
                    + "where drivers from different teams compete in a circuit race. For more information or help please contact "
                    + "the organisers or your team managers.",
                CommingSoon: "3",
                Reminder: "4",
                ReleaseDate: "5",
                Genre: "6",
                Actors: "7",
            },
            {
                // id : '#' + Math.floor(Math.random() * 9000) + 1000,
                Title: "1",
                Poster: "2",
                Description:
                    "We have three championships in total (go-karting, N400 road cars tuned, and GT3 Race Cars) "
                    + "We have a Nations cup where racers from different countries go head to head, and we have a Manufacturers cup "
                    + "where drivers from different teams compete in a circuit race. For more information or help please contact "
                    + "the organisers or your team managers.",
                CommingSoon: "3",
                Reminder: "4",
                ReleaseDate: "5",
                Genre: "6",
                Actors: "7",
            },
            {
                // id : '#' + Math.floor(Math.random() * 9000) + 1000,
                Title: "1",
                Poster: "2",
                Description:
                    "We have three championships in total (go-karting, N400 road cars tuned, and GT3 Race Cars) "
                    + "We have a Nations cup where racers from different countries go head to head, and we have a Manufacturers cup "
                    + "where drivers from different teams compete in a circuit race. For more information or help please contact "
                    + "the organisers or your team managers.",
                CommingSoon: "3",
                Reminder: "4",
                ReleaseDate: "5",
                Genre: "6",
                Actors: "7",
            },
            {
                // id : '#' + Math.floor(Math.random() * 9000) + 1000,
                Title: "1",
                Poster: "2",
                Description:
                    "We have three championships in total (go-karting, N400 road cars tuned, and GT3 Race Cars) "
                    + "We have a Nations cup where racers from different countries go head to head, and we have a Manufacturers cup "
                    + "where drivers from different teams compete in a circuit race. For more information or help please contact "
                    + "the organisers or your team managers.",
                CommingSoon: "3",
                Reminder: "4",
                ReleaseDate: "5",
                Genre: "6",
                Actors: "7",
            },
            {
                // id : '#' + Math.floor(Math.random() * 9000) + 1000,
                Title: "1",
                Poster: "2",
                Description:
                    "We have three championships in total (go-karting, N400 road cars tuned, and GT3 Race Cars) "
                    + "We have a Nations cup where racers from different countries go head to head, and we have a Manufacturers cup "
                    + "where drivers from different teams compete in a circuit race. For more information or help please contact "
                    + "the organisers or your team managers.",
                CommingSoon: "3",
                Reminder: "4",
                ReleaseDate: "5",
                Genre: "6",
                Actors: "7",
            },
            {
                // id : '#' + Math.floor(Math.random() * 9000) + 1000,
                Title: "1",
                Poster: "2",
                Description:
                    "We have three championships in total (go-karting, N400 road cars tuned, and GT3 Race Cars) "
                    + "We have a Nations cup where racers from different countries go head to head, and we have a Manufacturers cup "
                    + "where drivers from different teams compete in a circuit race. For more information or help please contact "
                    + "the organisers or your team managers.",
                CommingSoon: "3",
                Reminder: "4",
                ReleaseDate: "5",
                Genre: "6",
                Actors: "7",
            },
        ]
    },

    // Functions of an object
    methods: {

        theSearch() {
            this.searched = !this.searched;
            for (let i = 0; i < 11; i++) {
                switch (this.searchInput.searchText) {

                    case this.movies[i].Title:
                        alert("1");
                        break;

                    case this.movies[i].Poster:
                        alert("2");
                        break;

                    case this.movies[i].Description:
                        alert("3");
                        break;

                    case this.movies[i].CommingSoon:
                        alert("4");
                        break;

                    case this.movies[i].Reminder:
                        alert("5");
                        break;

                    case this.movies[i].ReleaseDate:
                        alert("6");
                        break;

                    case this.movies[i].Genre:
                        alert("7");
                        break;

                    case this.movies[i].Actors:
                        alert("8");
                        break;

                    default:
                        ;
                }
            }
        },

        addToWatchList() {


            if (!localStorage.getItem("vrl-app-key")) {

                let watchList = []
                watchList.push(this.movies[0])

                localStorage.setItem("vrl-app-key", JSON.stringify(watchList))
                console.log('not working')

            } else {

                let watchList = JSON.parse(localStorage.getItem("vrl-app-key"))
                console.log(watchList)

                watchList.push(this.movies[0])
                console.log(watchList)

                // watchList = JSON.stringify(watchList)
                localStorage.setItem("vrl-app-key", JSON.stringify(watchList))
                console.log(localStorage.getItem('vrl-app-key'))
            }
        }
    }

})