var one = new Vue({
  el: '#vue-app-one',
  data: {
    title: 'Vue App One'

  },
  methods: {

  },
  computed: {
    greet: function(){
      return 'Hello from app1 :)'
    }
  }
});

var two = new Vue({
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
    greet: function(){
      return 'Hello from app2 :)'
    },
  }
});

two.title = "Changed from outside";
