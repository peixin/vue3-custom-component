<template>
  <h2>{{ userAgent }}</h2>
  <custom-element data-text="placed in vue template"></custom-element>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

const userAgent = window.navigator.userAgent;

onMounted(() => {
  const customElement = document.createElement("custom-element");
  customElement.dataset["text"] = "append programmatically using pure JavaScript";

  document.body.appendChild(customElement);
});
</script>
