<template>
  <!-- container  -->
  <div class="mx-auto">
    <!-- header text  -->
    <h1 class="text-teal-700 text-3xl mb-4 text-center">pscs.fans</h1>
    <!-- body grid -->
    <div class="w-4/5 mx-auto flex flex-row">
      <!-- student container  -->
      <div class="flex flex-row justify-center flex-wrap w-full">
        <Student v-for="student in students" :key="student.uid" :data="student.data" :uid="student.uid"/>
      </div>
      <!-- form column -->
      <div class="w-96 static">
        <div class="bg-white rounded shadow m-2 p-2 px-4">
          <h2 class="text-teal-600 text-xl">Change Status</h2>
          <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline">
            Present
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Student from '@/components/Student.vue';
import 'firebase/database';
import * as firebase from 'firebase/app';

export default {
  name: 'home',
  components: {
    Student,
  },
  data() {
    return {
      students: [],
    };
  },
  mounted() {
    firebase.database().ref('/students/').orderByChild('active').equalTo(true)
      .on('value', (studentSnapshot) => {
        this.students = [];
        Object.keys(studentSnapshot.val()).forEach((student) => {
          this.students.push({
            uid: student,
            data: studentSnapshot.val()[student],
          });
        });
      });
  },
};
</script>
