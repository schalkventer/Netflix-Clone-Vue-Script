const standings = new Vue({

    el: '#app-standings',

    data: {
        test: 'hello',

        watchList: []
    },

    mounted() {

        if (!localStorage.getItem("vrl-app-key")) {

            let initArray = []
            localStorage.setItem("vrl-app-key", JSON.stringify(initArray))
        }

        this.watchList = JSON.parse(localStorage.getItem("vrl-app-key"))
    }

})