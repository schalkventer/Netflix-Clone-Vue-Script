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
    el: '#root',
});

new Vue({
    el: '#newRoot',

    data: function () {
        return {
            showModal: false
        };
    }
});