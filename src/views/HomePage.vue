<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar square color="text-white">
            <img src="../assets/logo-header.png">
          </q-avatar>
          
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" side="left" content-class="bg-blue-grey-1" :width="200">
      <q-item clickable active v-ripple >
        <q-item-section avatar>
          <q-icon name="settings" />
        </q-item-section>
        <q-item-section>
          Admin
        </q-item-section>
      </q-item>

      <q-item clickable active v-ripple>
        <q-item-section avatar>
          <q-icon name="web" />
        </q-item-section>
        <q-item-section>
          Crawler
        </q-item-section>
      </q-item>

       <q-item to="/processos" clickable active v-ripple>
        <q-item-section avatar>
          <q-icon name="archive" />
        </q-item-section>
        <q-item-section>
          Processos
        </q-item-section>
      </q-item>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: true,
      drawer: true
    }
  }
}
</script>