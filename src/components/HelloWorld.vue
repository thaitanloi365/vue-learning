<template>
  <div class="hello">
    <ProfilePage></ProfilePage>
  </div>
</template>

<script lang="ts">
import ProfilePage from '@/components/ProfilePage.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    ProfilePage,
  },
})
export default class HelloWorld extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
