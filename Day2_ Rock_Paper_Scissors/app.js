let options = document.getElementsByClassName("option")

for (let i = 0; i< options.length; i++){
    let option = options[i];
    option.addEventListener('click', function(){
        this.classList.add("selected");
    })

}