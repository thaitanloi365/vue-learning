<template>
  <div class="container">
    <div class="row">Count: {{ syncedCount }}</div>
    <div class="row">Email: {{ emailAddress }}</div>
    <div class="row">Twitter: {{ twitterHandle }}</div>
    <div class="row">Instagram: {{ instagram }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, PropSync } from 'vue-property-decorator';
@Component
export default class ContactInfo extends Vue {
  @PropSync('count', { type: Number, default: 0 })
  syncedCount!: number;

  @Prop()
  emailAddress!: string;

  @Prop()
  twitterHandle!: string;

  @Prop()
  instagram!: string;

  created() {
    this.syncedCount = 0;
    setInterval(() => {
      this.syncedCount += 1;
    }, 1000);
  }
}
</script>
