const app = Vue.createApp({
    data: function() {
        return {
            count: 5,
            message: "Hover description...",
            isActive: true,
            itemList: ['Milk', 'Eggs','Bread' ]
        }
    }
})

const vm = app.mount('#app')

































// const app = Vue.createApp({
//     data: function () {
//         return { count: 3 }
//     },
//     mounted: function () {
//         setInterval(() => { this.count++ }, 1000)
//     }
// })
// const vm = app.mount('#app')




  