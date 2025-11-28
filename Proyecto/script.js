$(document).ready(function () {
    const btnAgregarContacto= $("#btnAgregarContacto");
    const checkbox=$("#checkbox").prop("checked");

    btnAgregarContacto.on("click", function(){
        const nombre= $("#name").val()
        const phone= $("#telefono").val()
        const email= $("#email").val()


        let contacto= {nombre,phone,email}
        MostrarContacto(contacto)
    })


    function MostrarContacto(contacto){
        const log=$("#log");
        if(checkbox === true){
            log.append(`<p style="color: orange">
            <strong>Nombre:</strong> ${contacto.nombre} | 
            <strong>Teléfono:</strong> ${contacto.phone} |
            <strong>Email:</strong> ${contacto.email} |
        </p>`);
        }else{
            log.append(`<p style="color: orange">
            <strong>Nombre:</strong> ${contacto.nombre} | 
            <strong>Teléfono:</strong> ${contacto.phone} |
            <strong>Email:</strong> ${contacto.email} |
        </p>`);
        }


    }
})