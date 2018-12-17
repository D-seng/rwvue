<template>
  <div>
    <span>@{{ event.time }} on {{ event.date }}</span>
    <h4>{{ title }}</h4>
    <p>Attending:</p>
    <ul v-for="attendee in event.attendees" :key="attendee.id">
      <li>{{ attendee.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      event: {
        id: 1,
        title: 'Park Cleanup',
        date: 'Monday, December 17, 2018',
        time: '6:00 a.m.',
        attendees: [
          { id: 'abc123', name: 'joe' },
          { id: 'def456', name: 'julie' }
        ]
      }
    };
  }
};
</script>

<style scoped>
h4 {
  color: green;
}
</style>
