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
