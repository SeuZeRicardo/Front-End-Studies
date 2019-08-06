<template>
  <div>
    <!-- store.getter is to access the updated state -->
    <p>You chose ??? {{$store.getters.flavor}}</p>
  </div>
</template>

<script>
export default {
  name: 'Display',
};

</script>
