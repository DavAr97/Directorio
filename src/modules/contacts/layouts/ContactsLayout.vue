<template >
    <Navbar/>

    <div class="d-flex">
        <div class="col 4">
            <EntryContact />
        </div>
        <div class="col">
            <router-view></router-view>
        </div>
    </div>

</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {

        Navbar: defineAsyncComponent(()=> import('../components/navbarComp.vue')),
        EntryContact: defineAsyncComponent(()=> import('../components/entryContactComp.vue'))
    }
}
</script>