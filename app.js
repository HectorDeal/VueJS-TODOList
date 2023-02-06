new Vue({
    el : '#app',
    data : {
        title : "",
        desc : "",
        statut : false,
        tasks : [],
    },

    methods : {
        addElement : function(){
            let array = [{
                title : this.title,
                desc : this.desc
            },
            ...this.tasks]
            this.tasks = array
        }
    }
})
