//form consulta Adri
const nextBtn = document.querySelector("#next-btn");
const backBtn = document.querySelector("#back-btn");
const step1 = document.querySelector("#step-1");
const step2 = document.querySelector("#step-2");
const summary = document.querySelector("#summary");

//agregar evento onclick al botón siguiente
nextBtn.addEventListener("click", function() {
  // recopilar datos del primer paso
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let tel = document.querySelector("#tel").value;
  let text = document.querySelector("#text").value;
  // mostrar resumen en el segundo paso
  summary.innerHTML = `Nombre: ${name}<br>Email: ${email}<br>Tel: ${tel}<br>Consulta: ${text}`;
  
  // ocultar el primer paso y mostrar el segundo paso
  step1.style.display = "none";
  step2.style.display = "block";
});



//form contacto Seba
const form1 = document.getElementById("step1");
const form2 = document.getElementById("step2");
const btnForm = document.getElementsByClassName("btn-form");


const email = document.getElementById("email");
const locationInput = document.getElementById("locationInput");
const fullName = document.getElementById("fullName");
const photoFile = document.getElementById("photoFile");
const extraInfo = document.getElementById("extraInfo");


for (let i = 0; i < btnForm.length; i++) {
    btnForm[i].addEventListener("click", handleMultiStep)
    
}

function handleMultiStep(e) {
e.preventDefault()
    switch(e.target.id){
    case 'btn0':
				step1.style.display = "none";
				step2.style.display = "block";
				break;
    case 'btn1':
				step1.style.display = "block";
				step2.style.display = "none";
				break;
    case 'btn2':
				handleSubmit();
				break;				
	default:
				// break;  
    }
}
  
function handleSubmit() { 
    console.log(
		"Correo Electrónico: " + email.value,
		"Dirección: " + locationInput.value, 
		"Nombre completo: " + fullName.value, 
		"Foto " + photoFile.value, 
		"Información extra: " + extraInfo.value, 

	);
        
}

console.log("Hola, su reclamo ha sido enviado a Mottai, a la brevedad responderemos." );