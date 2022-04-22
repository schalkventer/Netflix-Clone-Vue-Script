const landing = new Vue({

    // Element Where you mounting the app
    el: '#app-landing',

    //  Memebers - Variables
    data: {
        test: 'hello',

        greeted: false,

        greetingMessage:

            "Welcome to the Vue Racing League system. Please use the form provided to register a new driver into our "
            + "championships.",

        helpMessage:

            "We have three championships in total (go-karting, N400 road cars tuned, and GT3 Race Cars) "
            + "We have a Nations cup where racers from different countries go head to head, and we have a Manufacturers cup "
            + "where drivers from different teams compete in a circuit race. For more information or help please contact "
            + "the organisers or your team managers.",

<<<<<<< Updated upstream
        movie: {
            // id : '#' + Math.floor(Math.random() * 9000) + 1000,
            Title: "",
            Poster: "",
            Description: "",
            CommingSoon: "",
            Reminder: "",
            ReleaseDate: "",
            Genre: "",
            Actors: "",
=======
        newDriver: {
            // id : '#' + Math.floor(Math.random() * 9000) + 1000,
            name: "",
            age: "",
            team: "",
            nationality: "",
            league: "",
            carColor: "",
            number: '',
            points: 0
>>>>>>> Stashed changes
        }
    },

    // Functions of an object
    methods: {

        greet() {
            this.greeted = !this.greeted
        },

        createNewDriver() {

<<<<<<< Updated upstream
=======
            //Only need to use local storge for Watchlist? Will have to check LMS...
            if (!localStorage.getItem("vrl-app-key")) {
>>>>>>> Stashed changes

            if (!localStorage.getItem("vrl-app-key")) {

                let watchList = []
                watchList.push(this.movie)

<<<<<<< Updated upstream
                localStorage.setItem("vrl-app-key", JSON.stringify(watchList))
                console.log('not working')

            } else {
=======
                localStorage.setItem("vrl-app-key", JSON.stringify(driversList))
                alert('not working')

            } else {

                let driversList = JSON.parse(localStorage.getItem("vrl-app-key"))
                console.log(driversList)
>>>>>>> Stashed changes

                let watchList = JSON.parse(localStorage.getItem("vrl-app-key"))
                console.log(watchList)

                watchList.push(this.movie)
                console.log(watchList)

                // watchList = JSON.stringify(watchList)
                localStorage.setItem("vrl-app-key", JSON.stringify(watchList))
                console.log(localStorage.getItem('vrl-app-key'))
            }
        }
    }

})