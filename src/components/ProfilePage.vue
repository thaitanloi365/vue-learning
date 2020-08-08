// ProfilePage
<template>
  <div class="profile-page">
    <div class="avatar">
      <ContactInfo
        :count.sync="count"
        :emailAddress="user.emailAddress"
        :twitterHandle="user.twitterHandle"
      ></ContactInfo>
      {{ user.name }}
    </div>
    <input v-model="user.name" />
    <button @click="count = 0">Reset count</button>
  </div>
</template>
<script lang="ts">
import ContactInfo from "@/components/ContactInfo.vue";
import { Vue, Component, Watch } from "vue-property-decorator";
@Component({
  components: {
    ContactInfo,
  },
})
export default class Profile extends Vue {
  count = 122;

  user = {
    name: "John Smith",
    profilePicture: "./profile-pic.jpg",
    emailAddress: "john@smith.com",
    twitterHandle: "johnsmith",
    instagram: "johnsmith345",
  };

  @Watch("count")
  onCountChanged(value: number, oldvalue: number) {
    console.log("*** value = ", value, "----- old value = ", oldvalue);
  }
}
</script>