<template>
<div  
    class="container">
    <div class="row">
        <div class="col-md-6">

            <h2>Crear Contacto</h2>
              <div class="card card-body">
                <form>
                  <div class="form-group">
                    <input v-model="entry.nombre" type="text" class="form-control" placeholder="Nombre" minlength="1" maxlength="50" required>

                  </div>
                  <div class="form-group">
                    <input v-model="entry.correo" type="email" class="form-control" placeholder="Correo" minlength="7" maxlength="50" required>              
                  </div>
                  <div class="form-group">
                    <input v-model="entry.telefono" type="tel" class="form-control" placeholder="Telefono" minlength="10" maxlength="10" required>              
                  </div>
                  <div class="form-group">
                    <input @click="guardarContact()" type="button" value="Guardar Contacto" class="btn btn-success btn-block text-dark" >              
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
import { mapActions} from 'vuex'  //se asocia a computed

export default {


    components:{

    }, 
 
    data() {
      return{
         entry: null
      }

    }, 



    methods:{
      ...mapActions('directorio',['createContact']),

     
      newEntry(){

        let entry
        
        entry= {
            nombre:'',
            correo:'',
            telefono:'',
          }

        this.entry = entry
      },

      async guardarContact(){     

        await this.createContact(this.entry)        
        this.$router.push({name:'contacts'})
        
      }

    },

    
    created (){
        this.newEntry()
    }, 


}
</script>
