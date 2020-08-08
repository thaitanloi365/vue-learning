<template>
  <div class="container">
    <div class="row">Count: {{ syncedCount }}</div>
    <div class="row">Email: {{ EmailAddress }}</div>
    <div class="row">Twitter: {{ TwitterHandle }}</div>
    <div class="row">Instagram: {{ Instagram }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, PropSync } from "vue-property-decorator";
@Component
export default class ContactInfo extends Vue {
  @PropSync("Count", { type: Number, default: 0 })
  SyncedCount!: number;

  @Prop()
  EmailAddress!: string;

  @Prop()
  TwitterHandle!: string;

  @Prop()
  Instagram!: string;

  data() {
    console.log(this.SyncedCount);
    return {
      syncedCount: this.SyncedCount ?? 0,
    };
  }
  @Watch("EmailAddress")
  onEmailAddressChanged(value: string, oldValue: string) {
    console.log("oldValue", oldValue, "---", "value", value);
  }

  @Watch("TwitterHandle")
  onTwitterHandleChanged(value: string, oldValue: string) {
    console.log("oldValue", oldValue, "---", "value", value);
  }

  @Watch("Instagram")
  onInstagramChanged(value: string, oldValue: string) {
    console.log("oldValue", oldValue, "---", "value", value);
  }

  @Watch("syncedCount")
  onChange(value: string, oldValue: string) {
    console.log("oldValue", oldValue, "---", "value", value);
  }
  created() {
    console.log("created");
    setInterval(() => {
      this.$data.syncedCount += 1;
    }, 1000);
  }
}
</script>