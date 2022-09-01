<template>
    <nav class="navbar bg-primary">
        <a class="navbar-brand text-white">
            <img src="@/assets/logo2.png"
                    alt="Contacts Logo"
                    height="25"
                    class="d-inline-block align-text-top mx-2">
            DIRECTORIO DE CONTACTOS 
        </a> 

        <div class="mt-1 d-flex flex-column">
            <button class="btn btn-danger mx-3"
                    @click="$router.push({ name: 'addNewContact', params: {id: 'new'}})">
                    <i class="fa fa-plus-circle"></i>
                Nuevo Contacto
            </button>
        </div>


        <div class="d-flex">
            <button class="btn btn-outline-light mx-2"
            @click="onLogout">
                <i class="fas fa-sign-out-alt"></i>
            </button> 
        </div>



    </nav>
</template>

<script>
import { useRouter } from 'vue-router'
import useAuth from '@/modules/auth/composables/useAuth'

export default {
    setup(){

        const router = useRouter()
        const { logout } = useAuth()


        return {
            onLogout: () => {
                router.push({ name: 'login' })
                logout()
            }
        }
    }
}
</script>