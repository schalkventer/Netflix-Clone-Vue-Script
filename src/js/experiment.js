Vue.component('task-list', {
    template: '<div><task v-for="task in tasks">{{task.task}}</task></div>',

    data() {
        return {
            tasks: [
                { task: 'Go to the store', complete: true },
                { task: 'Finish screencast', complete: false },
                { task: 'Make donation', complete: false },
                { task: 'Clear inbox', complete: false },
                { task: 'Make dinner', complete: false },
                { task: 'Clean room', complete: true },

            ]
        };
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>',
});



Vue.component('message', {
    data() {
        return {
            isVisible: true
        };
    },

    props: ['title', 'body'],

    template: `
    <article class="message" v-show="isVisible">
    <div class="message-header">
        {{title}}
        <button type="button" @click="hideModal">close</button>
    </div>

    <div class="message-body">
        {{body}}
    </div>
    </article>
    `,

    methods: {
        hideModal() {
            this.isVisible = false;
        }
    }
});

Vue.component('modal', {

    template: `
    <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
        <div class="box">
            <p>
               <slot></slot>
            </p>
        </div>
    </div>
    <button class="modal-close" @click="$emit('close')"></button>
</div>
    `
});

Vue.component('tabs', {
    template: `
    <div>
    <div class="tabs">
        <ul>
            <li v-for="tab in tabs" :class="{'is-active':tab.isActive}">
            <a :href="tab.href" @click="selectTab(tab)">
            {{tab.name}}
            </a>
            </li>
        </ul>
    </div>

    <div class="tabs-details">
    <slot></slot>
    </div>
    </div>
    `,

    data() {
        return { tabs: [] };
    },

    created() {
        this.tabs = this.$children;
    },

    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
});

Vue.component('tab', {

    template: `
    <div v-show="isActive"><slot></slot></div>
    `,

    props: {
        name: { required: true },
        selected: { default: false }
    },

    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },

    data() {

        return {
            isActive: false
        };
    },

    mounted() {
        this.isActive = this.selected;
    }
})

new Vue({
    el: '#newRoot',

    data: function () {
        return {
            showModal: false
        };
    }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Movie object Class
class Movie {
    constructor(title, poster, description, commingSoon, reminder, releaseDate, genre, actors) {
        this._title = title;
        this._poster = poster;
        this._description = description;
        this._commingSoon = commingSoon;
        this._reminder = reminder;
        this._releaseDate = releaseDate;
        this._genre = genre;
        this._actors = actors;
    }

    get movieTitle() {
        return this._title;
    }

    get moviePoster() {
        return this._poster;
    }

    get movieDescription() {
        return this._description;
    }

    get movieCommingSoon() {
        return this._commingSoon;
    }

    get movieReminder() {
        return this._reminder;
    }

    get movieReleaseDate() {
        return this._releaseDate;
    }

    get movieGenre() {
        return this._genre;
    }

    get movieActors() {
        return this._actors;
    }

}

// WatchList Object Class
class WatchList {
    constructor() {
        this._amountOfItems = 20;
        this._watchList = [
            new Movie(
                "Money Heist: The Phenomenon",
                poster,
                "A documentary on why and how 'Money Heist' sparked a wave of enthusiasm around the world for a lovable group of thieves and their professor.",
                1,
                reminder,
                2020,
                genre,
                actors
            )
        ];
    }


    get watchList() {
        return this._watchList;
    }

    get itemAmount() {
        return this._amountOfItems;
    }

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//gets radio button value
var app = new Vue({
    el: '.forVue',

    data: {
        cart: [],
        count: 0,
        countArr: [],
        list_el: document.querySelector("#tasks"),

    },

    methods: {
        onChange(event) {
            var optionText = event.target.value;
            //this.shirt.shirtSize = optionText;
        },

        increment() {
            this.count += 1;
            this.cart.push(new WatchList);
            this.countArr.push(this.count);
        },

        decrement() {
            this.count -= 1;
        },

        displayCart() {
            alert(this.cart[0])
            var n = this.countArr;

            for (let i = 0; i < this.count; i++) {
                const itemType = this.cart[i].movieTitle();
                const itemSize = this.cart[i].movieDescription();



                const itemDiv = document.createElement("div");
                itemDiv.classList.add("task");

                const itemTextDiv = document.createElement("div");
                itemTextDiv.classList.add("content");

                itemDiv.appendChild(itemTextDiv);

                const itemOutputDisplay = document.createElement("td");
                itemOutputDisplay.classList.add("text");
                itemOutputDisplay.innerHTML = '<p>' + itemType + '</p>';

                const itemOutputDisplay2 = document.createElement("td");
                itemOutputDisplay2.classList.add("text");
                itemOutputDisplay2.innerHTML = '<p style="padding-left:1em">' + itemSize + '</p>';

                const itemOutputAmount = document.createElement("input");
                itemOutputAmount.classList.add("text");
                itemOutputAmount.type = "number";
                itemOutputAmount.value = itemType;
                itemOutputAmount.setAttribute("readonly", "readonly");


                itemTextDiv.appendChild(itemOutputDisplay);
                itemTextDiv.appendChild(itemOutputDisplay2);
                itemTextDiv.appendChild(itemOutputAmount);

                const task_actions_el = document.createElement("div");
                task_actions_el.classList.add("actions");

                const task_edit_el = document.createElement("button");
                task_edit_el.classList.add("edit")
                task_edit_el.innerHTML = "Edit";

                const task_delete_el = document.createElement("button");
                task_delete_el.classList.add("delete")
                task_delete_el.innerHTML = "Delete";

                task_actions_el.appendChild(task_edit_el);
                task_actions_el.appendChild(task_delete_el);

                itemDiv.appendChild(task_actions_el);

                this.list_el.appendChild(itemDiv);

                task_edit_el.addEventListener('click', () => {
                    if (task_edit_el.innerText.toLocaleLowerCase() == "edit") {
                        itemOutputAmount.removeAttribute("readonly");
                        itemOutputAmount.focus();
                        task_edit_el.innerText = "Save";
                    } else {
                        itemOutputAmount.setAttribute("readonly", "readonly");
                        task_edit_el.innerText = "Edit";
                    }
                });

                task_delete_el.addEventListener('click', () => {
                    this.list_el.removeChild(itemDiv);
                    this.decrement; // FIX THIS!!
                });

                console.log(this.cart[i].movieTitle());
                console.log(this.cart[i].movieDescription());
                /*
                        this.displayEl.innerHTML += `
                      <tr v-for"shirt in cart">
                      <td>
                        <p> {{this.cart[i].shirtType}} </p>
                      </td>
                      <td>
                        <p> {{this.cart[i].shirtSize}} </p>
                      </td>
                      <td>
                        <button @click="deleteItem" onclick="decrement" class='btn btn-danger'>Delete</button>
                     </td>
                  </tr>
                  `; */
            };
        },
    },
})

var cartItem = Vue.component('cartItem', {

    template: `
  
      <tr v-for"shirt in cart">
        <td>
          <p>{{type}}}</p>
        </td>
        <td>
          <p>{{size}}</p>
        </td>
        <td>
          <button @click="deleteItem" onclick='removeTask()' class='btn btn-danger'>Delete</button>
       </td>
    </tr>
    `,
});