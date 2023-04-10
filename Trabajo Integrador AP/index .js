var imputs = document.getElementsByClassName('formulario__imput');
for (var i = 0; i < imputs.length; i++){
    imputs[i].addEventListener('keyup',function(){
        if (this.value.length >= 1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remover('fijar');  
        }
});
}