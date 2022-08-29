<template>
  <div class="entry-list-container">
      <div class="px-1 pt-2">
          <input 
              type="text"
              class="form-control"
              placeholder="Buscar contacto" 
              v-model="term"
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
            <tr v-for="entry in contactByName" :key="entry.id" :entry="entry">
                        
               <td>{{entry.id}}</td>
               <td>{{entry.nombre}}</td>
               <td>{{entry.correo}}</td>
               <td>{{entry.telefono}}</td>
               <td><button @click="$router.push({name: 'editContact', params:{id:entry.id }})" class="btn btn-info btn-block">
                    <i class="fa fa-user-edit"></i>
                   </button>
               </td>
               <td><button @click="DeleteContact(contact.id, $event)" class="btn btn-danger btn-block">
                    <i class="fa fa-trash-alt"></i>
                   </button>
               </td>  
            </tr>             
        </tbody>
      </table>
  </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {

  props:{
    entry: {
        type: Object,
        requiered: true
    }
  },

  computed: {

    ...mapGetters('directorio',['getContactByName']),

    contactByName(){
      return this.getContactByName(this.term)
    }

  },

  data(){
    return{
      term: ''
    }
  }
  
}
</script>

