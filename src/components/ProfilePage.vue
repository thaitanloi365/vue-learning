// ProfilePage
<template>
  <div class="profile-page">
    <div class="avatar">
      <ContactInfo :EmailAddress="user.emailAddress" :TwitterHandle="user.twitterHandle"></ContactInfo>
      {{ user.name }}
    </div>
    <input v-model="user.name" />
  </div>
</template>
<script lang="ts">
import ContactInfo from "@/components/ContactInfo.vue";
import { Vue, Component } from "vue-property-decorator";
@Component({
  components: {
    ContactInfo,
  },
})
export default class Profile extends Vue {
  data() {
    return {
      // In a real app we would get this data from a server
      user: {
        name: "John Smith",
        profilePicture: "./profile-pic.jpg",
        emailAddress: "john@smith.com",
        twitterHandle: "johnsmith",
        instagram: "johnsmith345",
      },
    };
  }
}
</script>