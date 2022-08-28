//EL state es ractivo y cuando se cambie vamos a notificar a todos los lugares donde se use

 export default () => ({
    isLoading: true,
    entries: [
         {
            id: new Date().getTime(),
            nombre: 'David',
            correo: 'dave@gmail.com',
            telefono: '5535241880',
         }, 
         {
            id: new Date().getTime()+1000,
            nombre: 'Pedro',
            correo: 'pedro@gmail.com',
            telefono: '5589920376',
         }, 
         {
            id: new Date().getTime()+2000,
            nombre: 'Arce',
            correo: 'arce@gmail.com',
            telefono: '5558775058',
         }, 
    ]   
 })
