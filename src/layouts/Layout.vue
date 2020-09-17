<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title class="absolute-center">
          Todo App
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :breakpoint="767"
      :width="250"
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label
          header
          class="text-grey-4"
        >
          Navigation
        </q-item-label>
          <q-item
            v-for="nav in navs"
            clickable
            exact
            class="text-grey-4"
            :key="nav.label"
            :to="nav.to"
          >
            <q-item-section
              avatar
            >
              <q-icon :name="nav.icon" />
            </q-item-section>

            <q-item-section>
              <q-item-label>{{nav.label}}</q-item-label>
            </q-item-section>
          </q-item>
      </q-list>
    </q-drawer>

    <q-footer elevated>
      <q-tabs>
        <q-route-tab v-for="nav in navs" :key="nav.label" :to="nav.to" :icon="nav.icon" :label="nav.label" />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

const navs = [
  {
    label: 'Todo',
    icon: 'list',
    to: '/'
  },
  {
    label: 'Settings',
    icon: 'settings',
    to: '/settings'
  }

]

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      navs: navs
    }
  }
}
</script>
<style lang="scss">
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}

.q-drawer {
  .q-router-link--exact-active {
    color: white !important;
  }
}
</style>
