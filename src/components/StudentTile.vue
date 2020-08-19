<template>
  <div class="m-2 ">
    <label :for="uid" class=" w-72 h-20 py-2 px-4 bg-white shadow-md rounded block cursor-pointer" :class="{'shadow-outline':checked}">
      <div class="flex flex-row justify-between">
        <router-link :to="'/user/' + uid" class="text-teal-600 font-semi-bold text-xl">
          {{data.firstName}} {{data.lastName[0]}}
        </router-link>
        <div class="text-gray-800 text-xl">{{data.current.status}}</div>
      </div>
      <div class="mt-2 flex flex-row justify-between text-gray-700">
        <div class="">{{data.current.statusInfo}}</div>
        <div v-if="data.current.returnTime">Back {{data.current.returnTime}}</div>
        {{data.current.timestamp}}
      </div>
    </label>
    <input type="checkbox" @change="$emit('toggle-student',uid)" :id="uid" class="hidden">
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
    };
  },
  props: {
    data: Object,
    uid: String,
    checked: Boolean,
  },
};
</script>
