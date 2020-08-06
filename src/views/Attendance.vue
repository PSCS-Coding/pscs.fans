<template>
  <!-- container  -->
  <div class="mx-auto">

    <!-- header text  -->
    <h1 class="text-teal-700 text-3xl mb-4 text-center">pscs.fans</h1>

    <!-- view button -->
    <div class="text-center mb-4">
      <label for="view" class="p-2 m-2 cursor-pointer bg-teal-500 text-white rounded-full mx-auto">Change View</label>
      <input id="view" type="checkbox" v-model="tiles" class="mx-4 hidden">
    </div>

    <!-- main column container  -->
    <div class="w-5/6 mx-auto flex flex-row">

      <!-- student container (v-if is to change the view between rows and tiles) -->
      <div v-if="tiles === true" class="flex flex-row justify-center flex-wrap w-full">
        <StudentTile v-for="student in filteredStudents" :key="student.uid" :data="student.data" :uid="student.uid" @toggle-student="updateList" />
      </div>
      <div v-else class="w-full">
        <StudentRow v-for="student in filteredStudents" :key="student.uid" :data="student.data" :uid="student.uid" @toggle-student="updateList" />
      </div>

      <!-- form column -->
      <div class="w-96 static">
        <!-- form container  -->
        <div class="bg-white rounded shadow m-2 p-2 px-4">
          <h2 class="text-teal-600 text-xl">Change status for: </h2>

          <!-- list of currently selected student names  -->
          <div>
            <p v-for="name in namesOfSelected" :key="name">{{name}}</p>
          </div>

          <!-- example present button  -->
          <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline">
            Present
          </button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StudentTile from '@/components/StudentTile.vue';
import StudentRow from '@/components/StudentRow.vue';
import 'firebase/database';
import * as firebase from 'firebase/app';

export default {
  name: 'home',
  components: {
    StudentTile,
    StudentRow,
  },
  data() {
    return {
      students: [], // stores all student data from db
      selectedstudents: [], // stores uids of selected students
      tiles: true, // toggle for tile vs list views
    };
  },
  computed: {
    filteredStudents() { // TODO: filters and sorts students by things, right now just sorts by first name
      const { students } = this;
      return students.sort((a, b) => {
        if (a.data.firstName.toUpperCase() < b.data.firstName.toUpperCase()) {
          return -1;
        }
        return 1;
      });
    },
    namesOfSelected() { // converts the uids in selected students to _Andy S_ format for display
      const studentNames = this.students.filter(s => this.selectedstudents.includes(s.uid)).map(s => `${s.data.firstName} ${s.data.lastName[0]}`);
      return studentNames;
    },
  },
  methods: {
    updateList(uid) { // when a student tile is checked or unchecked, adds / removes their uid from the selected students array
      if (this.selectedstudents.includes(uid)) {
        this.selectedstudents = this.selectedstudents.filter(s => s !== uid);
      } else {
        this.selectedstudents.push(uid);
      }
    },
  },
  mounted() {
    // student query
    firebase.database().ref('/students/').orderByChild('active').equalTo(true)
      .on('value', (studentSnapshot) => {
        const formattedStudents = [];

        // convert the object returned by the db into a nice array
        Object.keys(studentSnapshot.val()).forEach((student) => {
          formattedStudents.push({
            uid: student,
            data: studentSnapshot.val()[student],
          });
        });
        this.students = formattedStudents;
      });
  },
};
</script>
