<script setup lang="ts">
import tocab from './tocab.jpeg';
import github from './github-logo.png';
</script>
<template>
  <div class="pt-8">
    <table>
      <tr>
        <td>
          <img
            class="m-0! rounded-full"
            alt="Photo de Tony Cabaye"
            :src="tocab"
            width="100"
          />
        </td>
        <td>Tony Cabaye</td>
      </tr>
      <tr>
        <td>
          <div class="logo-smile">
            <Logo style="width: 100px" />
          </div>
        </td>
        <td>Expert Technique JavaScript chez Smile</td>
      </tr>
      <tr>
        <td>
          <img
            class="m-0!"
            alt="Logo de Github"
            :src="github"
            width="100"
          />
        </td>
        <td>https://github.com/tonai</td>
      </tr>
    </table>
  </div>
</template>
<style scoped>
tr {
  border: 0;
}
tr > td:first-child {
  width: 150px;
}
td {
  padding: 10px;
}
.logo-smile {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  background-color: #ff8054;
}
</style>
