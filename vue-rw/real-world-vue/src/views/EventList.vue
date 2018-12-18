<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard/>
    <BaseIcon/>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';

export default {
  // could also use module.exports and require
  components: {
    EventCard
  }
};
</script>

<style scoped>
</style>
