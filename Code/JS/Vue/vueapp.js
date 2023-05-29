let test;
let vueApp = Vue.createApp({
    data(){
        return{
            name: `Mohamed`,
            age: this.age,
            test,
            age2: 0,
            isasd: true,
            color: red,
            iii: [
                {id:`h1`,data:`h1h1h1`},
                {id:`h2`,data:`h2h2h2`},
                {id:`h3`,data:`h3h3h3`},
            ],
            value: this.value,
        };
    },

    computed:{
        com1(){
            return `sss`;
        },
    },

    methods:{
        m1(){
            this.age;
        },

        m2(a,b,c){
            return a;
        },

        em_e1({age2}){
            this.age2 = age2;
        },
    },

    provide(){
        return{
            m1(a,b,c){
                this.m2(a,b,c);
            },

            name: this.name,

            c1: this.c1,
        };
    },

    created(){
        this.m1();
    },
});

//! components -------------------
let comp1 = {
    template:`
        <div>
            <slot name="s1"></slot>
            <h1 @click="em_e1()" :contenteditable="is_true">Hello world {{name}}</h1>
            <slot name="s2"></slot>
        </div>
    `,

    emits: [`em-e1`],

    props:{
        name:{
            type: String,
            default(){
                return `soso`;
            },
        },

        is_true: Boolean,
    },

    inject: [`m1()`,`name`],

    data(){
        return{
            age2: 23,
        };
    },

    computed:{},

    methods:{
        em_e1(){
            this.$emit(`em-e1`,{
                age2: this.age2,
            });
        },
    },


};
vueApp.component(`comp-1`,comp1);

let comp2 = {
    template:`
        {{name}}
        <comp-1/>
    `,

    data(){
        return{
            name: this.$route.params.name,
        };
    },
};
vueApp.component(`comp-2`,comp2);

let comp3 = {
    template:`
        <router-link to="/">comp-1</router-link>
        <router-link :to="cc">comp-2</router-link>
    `,

    props:{
        name: String,
    },

    computed:{
        cc(){
            return `/comp2/${this.name}`;
        },
    },
};
vueApp.component(`comp-3`,comp3);
//!--------router
let routes = [
    {path:`/`,component: comp1},
    {path:`/comp2/:name`,component: comp2},
];

let router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

vueApp.use(router);

//!-----------
vueApp.mount(`#vueapp`);