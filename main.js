new Vue({
    el:"#app",
    data: {
        'message': "Vue Example",
        'cards':[
            {
                "id":0,
                "title":"Card1",
                "text":"Soem Card Description here",
                "priority":"high",
            },

            {
                "id":1,
                "title":"Card2",
                "text":"Another Card Description here",
                "priority":"low",
            }
        ],
        'current_card':-1,

    },

    methods: {
        buttonClick:function()
        {
            var title = this.$refs.title.value;
            var text = this.$refs.text.value;
            var priority = this.$refs.priority.value;

            var new_card_id = this.cards[this.cards.length-1].id+1;
          
            this.cards.push({
                "id":new_card_id,
                "title":title,
                "text":text,
                "priority":priority,
            });

            this.$refs.title.value ="";
            this.$refs.text.value ="";
            this.$refs.priority.value ="high";

        },

        editCard:function(card_id)
        {
            this.current_card = card_id;
        },

        deleteCard()
        {
            for( var i = 0; i< this.cards.length; i++)
            {
                if ( this.cards[i].id == this.current_card)
                {
                    console.log("yey");
                    this.cards.splice(i, 1);
                } 
            }

            this.current_card = -1;

        }


    }

});