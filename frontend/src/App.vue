<script setup lang="ts">
  import { LteDashboardLayout, type MenuNode } from '@adminlte/vue';

  const menu: MenuNode[] = [
    { type: 'header', text: 'Rozmowy'},
    { type: 'item', text: 'Zarząd', href: '/', icon: 'bi-speedometer' },
    // {
    //   type: 'group',
    //   text: 'Zarządzanie',
    //   icon: 'bi-briefcase',
    //   children: [
    //     { type: 'item', text: 'Zespoły', href: '/teams' },
    //     { type: 'item', text: 'Projekty', href: '/projects' },
    //   ],
    // },
    // { type: 'item', text: 'Ustawienia', href: '/settings', icon: 'bi-gear' },
  ]
</script>

<template>
  <LteDashboardLayout
    :menu-items="menu"
    brand-text="Futuristic"
    :current-path="$route.path"
  >
    <LteAppContent title="Dashboard">
      <!-- page content -->
    </LteAppContent>
  </LteDashboardLayout>
</template>
