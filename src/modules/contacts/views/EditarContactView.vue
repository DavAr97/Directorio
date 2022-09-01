
<template>
  <div  v-if="entry"
    class="container">
    <div class="row">
        <div class="col-md-6">
            <h2>Editar Contacto</h2>
              <div class="card card-body">
                <form>
                  <div class="form-group">
                    <input v-model="entry.nombre" type="text" class="form-control" placeholder="Nombre" minlength="1" maxlength="50" required>

                  </div>
                  <div class="form-group">
                    <input  v-model="entry.correo" type="email" class="form-control" placeholder="Correo" minlength="7" maxlength="50" required>              
                  </div>
                  <div class="form-group">
                    <input v-model="entry.telefono" type="tel" class="form-control" placeholder="Telefono" minlength="10" maxlength="10" required>              
                  </div>
                  <div class="form-group">
                    <input @click="guardarEdit"  type="button" value="Guardar Edicion" class="btn btn-success btn-block text-dark" >              
                  </div>  
                  <div class="form-group">
                    <input @click="$router.push({name: 'contacts'})" type="reset" value="Cancelar" class="btn btn-danger btn-block text-dark" >              
                  </div>          
                </form>
              </div> 
        </div>
    </div>
  </div>

  <entryContactComp></entryContactComp>
</template>

<script>


import { mapGetters,mapActions} from 'vuex' //se asocia a computed



export default {
    props:{
        id:{
          type: String,
          requited: true
        }
    },

    components:{

    },

    data() {
      return{
         entry: null
      }

    },


    computed: {

      ...mapGetters('directorio',['getContactById'])

    },

    methods:{

      ...mapActions('directorio',['updateContact']),

      loadEntry(){
   
        const entry = this.getContactById(this.id)
        if ( !entry ) return this.$router.push({name:'contacts'}) 

        this.entry = entry
        
      },

      async guardarEdit(){        

       await this.updateContact(this.entry)      
       this.$router.push({name:'contacts'})
       
      }



    },

    created (){
        this.loadEntry()
    },

    watch: {

      id(){
        this.loadEntry()
      }

    },
}
</script>

