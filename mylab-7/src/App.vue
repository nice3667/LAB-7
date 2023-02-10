<script setup>

</script>

<template>
  <div>
    <!-- ปุ่มสำหรับกำหนดค่า Router ตอนนี้เป็น header เรียบร้อย -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand mr-auto">ห้องเรียน</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navContent"
        aria-controls="navContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navContent">
        <ul class="navbar-nav ml-auto">
          <!-- ส่วนเรียก Router -->
          <li class="nav-item">
            <router-link :to="{name: 'CheckList'}" class="nav-link">รายชื่อนักศึกษา</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'StudentList'}" class="nav-link">เพิ่มรายชื่อนักศึกษา</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- ส่วนแสดงผลของ Router ที่เลือก หรือก็คือ body นั้นเอง -->
    <router-view></router-view>
  </div>
</template>