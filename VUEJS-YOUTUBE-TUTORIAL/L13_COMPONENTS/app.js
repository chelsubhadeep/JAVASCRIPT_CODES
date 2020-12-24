   var data = {
  name: 'Yoshi'
}
Vue.component('greeting',{
  template: '<p>Hey there, I am {{name}}<button v-on:click = "changeName">Change Name</button></p>',
  data: function(){
    return data;
  },
  methods:{
    changeName: function(){
      this.name = 'Mario';
    }
  }
});


new Vue({
  el: '#vue-app-one',
  data: {
    title: 'Vue App One'

  },
  methods: {

  },
  computed: {

  }
});

new Vue({
  el: '#vue-app-two',
  data: {
      title: 'Vue App Two'
  },
  methods: {
    changeTitle: function(){
      one.title = 'Title Changed'
    }
  },
  computed: {

  }
});
