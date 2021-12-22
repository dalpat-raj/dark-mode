const checkbox = document.getElementById('checkbox')
const raj = document.getElementById('infoo')
console.log(raj);
checkbox.addEventListener('change',()=>{
    document.body.classList.toggle('dark')

    if(checkbox.checked){
        raj.innerText = 'dark mode is on'
        raj.style.color = 'white'
    }else{
        raj.innerText = 'ligth mode is on'
        raj.style.color = 'black'
    }
})

