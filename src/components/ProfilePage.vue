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
    <div>{{ postsState.response.value }}</div>
  </div>
</template>
<script lang="ts">
import ContactInfo from '@/components/ContactInfo.vue';
import { Vue, Component } from 'vue-property-decorator';
import useAxiosVue from '@/composables/useAxios';

@Component({
  components: {
    ContactInfo,
  },
  setup() {
    const postsState = useAxiosVue({
      triggerOnStart: true,
      url: 'https://my-json-server.typicode.com/typicode/demo/posts',
    });

    return {
      postsState,
    };
  },
})
export default class Profile extends Vue {
  count = 122;

  user = {
    name: 'John Smith',
    profilePicture: './profile-pic.jpg',
    emailAddress: 'john@smith.com',
    twitterHandle: 'johnsmith',
    instagram: 'johnsmith345',
  };
}
</script>
