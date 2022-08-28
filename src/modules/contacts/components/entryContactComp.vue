<template>
  <div class="entry-list-container">
      <div class="px-1 pt-2">
          <input 
              type="text"
              class="form-control"
              placeholder="Buscar contacto" 
            />
      </div>
  </div>
  <div class="col-md-13">
  <div class="table-responsive">
      <table class="table table">
        <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>telefono</th>
              <th colspan="1">Opciones</th>
            </tr>
        </thead>
        <tbody>
            <ContactoCuerpo/>
        </tbody>
      </table>
  </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {

  components: {
    ContactoCuerpo: defineAsyncComponent(() => import('./NewContactComp'))
  }
  
}
</script>

