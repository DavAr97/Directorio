

export default {
    name: 'contacts',
    component: () => import(/* webpackChunkName: "contacts" */ '@/modules/contacts/layouts/ContactsLayout.vue'),
    children: [

        {   
            path: 'new',
            name: 'addNewContact',
        
            component: () => import(/* webpackChunkName: "agregar" */ '@/modules/contacts/views/CrearContactView.vue')
        },

        {   
            path: 'edit/:id',
            name: 'editContact',
        
            component: () => import(/* webpackChunkName: "agregar" */ '@/modules/contacts/views/EditarContactView.vue'),
            
            props: (route) => {
                return {
                    id: route.params.id 
                }
            }
        },

    ]

}   