const app = {
    data() {
        return {
            images: "images/11.jpg",
            name: "Chutipa Jatujinda",
            topic1:"Article",
            topic2:"Followers",
            topic3:"Rating",
            job: "Student",
            article: "34",
            follower: "940",
            rating: "8.9"
            
        }
    }
}
mountedApp = Vue.createApp(app).mount('#app')