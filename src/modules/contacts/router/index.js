

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
            path: ':id/edit',
            name: 'editContact',
        
            component: () => import(/* webpackChunkName: "agregar" */ '@/modules/contacts/views/EditarContactView.vue')
        },
    ]

}   