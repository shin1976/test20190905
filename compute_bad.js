var app = new Vue({
  el:'#app',
  data: {
    email:'info@shinito.net'
  },
  computed:{
    localEmail:function() {
      return this.email.split('@')[0].toLowerCase();
    }
  }
});
