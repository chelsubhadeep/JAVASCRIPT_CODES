new Vue({
  el: '#vue-app',
  data: {
    available: true,
    nearby: true
  },
  methods:{

  },
  computed:{
    compClasses: function(){
      return{
        available: this.available,
        nearby: this.nearby
      }
    }
  }
});
