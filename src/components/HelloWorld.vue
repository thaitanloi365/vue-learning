<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ name }}</h1>
    <ProfilePage></ProfilePage>
    <button @click="onChange('asdfsadf1112312')">Change name</button>
    <button @click="Name='asdfsadf1112312'">Change name2</button>
  </div>
</template>

<script lang="ts">
import ProfilePage from "@/components/ProfilePage.vue";
import { Component, Prop, Vue, PropSync } from "vue-property-decorator";

@Component({
  components: {
    ProfilePage,
  },
})
export default class HelloWorld extends Vue {
  @Prop({ default: "Default Msg" })
  Msg!: string;

  @Prop()
  Title!: string;

  @PropSync("Name", { default: "Default Name" })
  SyncName!: string;

  data() {
    return {
      msg: this.Msg,
      name: this.SyncName,
    };
  }

  onChange(name: string) {
    this.$data.msg = name;
  }
}
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
