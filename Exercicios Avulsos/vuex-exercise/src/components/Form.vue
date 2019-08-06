<template>
  <div>
    <label for="flavor">Favorite ice cream flavor?</label>
    <input @input="changed" name="flavor">
  </div>
</template>

<script>
export default {
  name: 'Form',
  methods: {
    changed(event) {
      this.$store.commit('change', event.target.value);
      /** store.commit() is the action to update state  */
    },
  },
};

</script>
