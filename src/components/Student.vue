<template>
  <div class="m-2 ">
    <label :for="uid" class=" w-64 h-20 py-2 px-4 bg-white shadow-md rounded block cursor-pointer" :class="{'shadow-outline':checked}">
      <div class="flex flex-row justify-between">
        <router-link :to="'/user/' + uid" class="text-teal-600 font-semi-bold">
          {{data.firstName}} {{data.lastName[0]}}
        </router-link>
        <div class="text-gray-800">{{data.current.status}}</div>
      </div>
      <div class="mt-2 flex flex-row justify-between text-gray-700">
        <div>{{data.current.statusInfo}}</div>
        <div v-if="data.current.returnTime">{{data.current.returnTime}}</div>
        {{data.current.timestamp}}
      </div>
    </label>
    <input type="checkbox" v-model="checked" :id="uid" class="hidden">
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      checked: false,
    };
  },
  props: {
    data: Object,
    uid: String,
  },
};
</script>
