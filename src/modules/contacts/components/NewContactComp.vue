<template>
            <tr v-for="item in 5" :key="item">
                        
               <td>1</td>
               <td>pedro</td>
               <td>dave@dsd.com</td>
               <td>5535241880</td>
               <td><button @click="$router.push({name: 'editContact', params:{id:2 }})" class="btn btn-info btn-block">
                    <i class="fa fa-user-edit"></i>
                   </button>
               </td>
               <td><button @click="DeleteContact(contact.id, $event)" class="btn btn-danger btn-block">
                    <i class="fa fa-trash-alt"></i>
                   </button>
               </td>  
            </tr>            


</template>

<script>
export default {


}
</script>
