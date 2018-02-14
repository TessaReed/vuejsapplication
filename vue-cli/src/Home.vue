<template>
  <!-- you need one root element -->
  <div>
    <!-- create a loop -->
    <app-server-status v-for="server in 5"></app-server-status>
    <!-- <p>Server status: {{ status }}</p>
    <hr>
    <button @click="changeStatus">change Status</button> -->
</div>
</template>

<script>
  import ServerStatus from './ServerStatus.vue';
  export default {
    components: {
      'app-server-status': ServerStatus
    }
  }
  // export default {
  //   data: function() {
  //     return {
  //       status: 'Critical'
  //     }
  //   },
  //   methods: {
  //     changeStatus(){
  //       this.status = 'Normal';
  //     }
  //   }
  // }
</script>
