const { createApp } = Vue;

createApp({
    data() {
        return {
            toDoList: [
                {
                    text: "Controllare offerte black friday",
                    done: true,
                },
                {
                    text: "Controllare se sono arrivati soldi sul conto ",
                    done: false,
                },
                {
                    text: "Chiamare zio Pino",
                    done: true,
                }, 
                {
                    text: "Portare Pelo a fare la pipì",
                    done: true,
                },
                {
                    text: "Comprare guida per studiare HTML",
                    done: false,
                },
            ],
            
        }
    },
    methods: {

        onClickRemoveItem (indexItem){
           
            // console.log("Click", i);

            this.toDoList.splice(indexItem, 1)

        }

    }
}).mount('#app')