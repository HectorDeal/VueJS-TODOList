new Vue({
    el : '#app',
    data : {
        title : "",
        desc : "",
        tasks : [],
    },

    methods : {
        addElement : function(){
            let array = [{
                title : this.title,
                desc : this.desc,
                statut: false
            },
            ...this.tasks]
            this.tasks = array
        },
        remove : function(){
            this.tasks = [];
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
    }
})
