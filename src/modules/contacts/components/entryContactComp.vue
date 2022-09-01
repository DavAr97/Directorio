<template>
  <div class="entry-list-container">
      <div class="px-1 pt-2">
          <input 
              type="text"
              class="form-control"
              placeholder="Buscar contacto por su nombre" 
              v-model="term"
            />
      </div>
  </div>
  <div class="col-md-13">
  <div class="table-responsive">
      <table class="table table">
        <thead>
            <tr>
              <!-- <th>#</th> -->
              <th>Nombre</th>
              <th>Email</th>
              <th>Telefono</th>
              <th colspan="1">Opciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="entry in contactByName" :key="entry.id" :entry="entry">
                        
               <!-- <td>{{entry.id}}</td> -->
               <td>{{entry.nombre}}</td>
               <td>{{entry.correo}}</td>
               <td>{{entry.telefono}}</td>
               <td><button @click="$router.push({name: 'editContact', params:{id:entry.id }})" class="btn btn-info btn-block">
                    <i class="fa fa-user-edit"></i>
                   </button>
               </td>
               <td><button @click="ondeleteContact(entry.id, $event)" class="btn btn-danger btn-block">
                
                
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


import { mapGetters,mapActions } from 'vuex';


export default {

 
    data() {
      return{
         term: '',

      }

    }, 

  computed: {

    ...mapGetters('directorio',['getContactByName','getContactById']),

    contactByName(){
      return this.getContactByName(this.term)
    
    },

 },


  methods:{

    ...mapActions('directorio',['deleteContact']),

    async ondeleteContact(id, event){

      const confirmacion = confirm('¿Quieres eliminar este contacto?')
      console.log('eliminando',id)
      if(confirmacion){
      await this.deleteContact(id)
      this.$router.push({name:'contacts'})      
      }else {
        event.preventDefault()
      }
    
    }
    

  },
  
}
</script>

