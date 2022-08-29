<template>

<div class="container">
    <div class="row">
        <div class="col-md-5">

            <h2>Crear Contacto</h2>
              <div class="card card-body">
                <form>
                  <div class="form-group">
                    <input  type="text" class="form-control" placeholder="Nombre" minlength="1" maxlength="50" required>

                  </div>
                  <div class="form-group">
                    <input  type="email" class="form-control" placeholder="Correo" minlength="7" maxlength="50" required>              
                  </div>
                  <div class="form-group">
                    <input  type="tel" class="form-control" placeholder="Telefono" minlength="10" maxlength="10" required>              
                  </div>
                  <div class="form-group">
                    <input @click="guardarContact" type="button" value="Guardar Contacto" class="btn btn-success btn-block text-dark" >              
                  </div>  
                  <div class="form-group">
                    <input @click="$router.push({name: 'contacts'})" type="reset" value="Cancelar" class="btn btn-danger btn-block text-dark" >              
                  </div>          
                </form>
              </div>            

        </div>
    </div>
</div>

</template>

<script>
/* import { mapGetters,mapActions} from 'vuex' */ //se asocia a computed

export default {
/* 
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
        console.log('Guardando edicion')

        this.updateContact(this.entry)
      }

    },

    created (){
        this.loadEntry()
    },

    watch: {

      id(){
        this.loadEntry()
      }

    }, */

}
</script>

<style>

</style>