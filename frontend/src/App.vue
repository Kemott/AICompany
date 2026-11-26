<script setup lang="ts">
import type { MenuNode } from '@adminlte/vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const menuItems: MenuNode[] = [
  { type: 'header', text: 'MENU' },
  { type: 'item', text: 'Strona startowa', href: '/', icon: 'bi-house-door' },
  { type: 'header', text: 'INFORMACJE' },
  { type: 'item', text: 'Frontend', href: '#frontend', icon: 'bi-window' },
  { type: 'item', text: 'API', href: '#api', icon: 'bi-braces' },
  { type: 'item', text: 'Aplikacje Django', href: '#django-apps', icon: 'bi-grid' },
]
</script>

<template>
  <LteDashboardLayout
    :menu-items="menuItems"
    :current-path="route.path"
    footer-right-text="Panel administracyjny"
  >
    <template #logo>
      <span class="fw-semibold">AI Company</span>
    </template>

    <LteAppContent
      title="Strona startowa"
      :breadcrumbs="[{ label: 'Strona startowa' }]"
    >
      <section id="frontend" class="card border-0 shadow-sm mb-4">
        <div class="card-body p-4">
          <p class="text-uppercase text-primary fw-semibold mb-2">Witaj w panelu</p>
          <h1 class="h3 mb-3">AI Company</h1>
          <p class="text-body-secondary mb-0">
            To jest strona startowa aplikacji. Z tego miejsca możesz rozwijać panel
            i dodawać kolejne widoki.
          </p>
        </div>
      </section>

      <div class="row g-4">
        <div class="col-md-6 col-xl-4">
          <section id="api" class="card h-100">
            <div class="card-body">
              <h2 class="h5 card-title">Backend API</h2>
              <p class="card-text text-body-secondary mb-0">
                Endpointy komunikacji z frontendem będą dostępne pod adresem
                <code>/api/</code>.
              </p>
            </div>
          </section>
        </div>

        <div class="col-md-6 col-xl-4">
          <section id="django-apps" class="card h-100">
            <div class="card-body">
              <h2 class="h5 card-title">Aplikacje Django</h2>
              <p class="card-text text-body-secondary mb-0">
                Kolejne aplikacje backendowe można podłączać pod wspólną przestrzenią
                adresów API.
              </p>
            </div>
          </section>
        </div>

        <div class="col-md-6 col-xl-4">
          <section class="card h-100">
            <div class="card-body">
              <h2 class="h5 card-title">Frontend</h2>
              <p class="card-text text-body-secondary mb-0">
                Panel korzysta z Vue 3, Vue Router i komponentów AdminLTE.
              </p>
            </div>
          </section>
        </div>
      </div>
    </LteAppContent>
  </LteDashboardLayout>
</template>
