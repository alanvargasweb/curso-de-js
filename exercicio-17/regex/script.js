const form = document.querySelector('form');
const username = document.getElementsByName('name');
const phone = document.getElementsByName('phone');
const pattern = /^[0-9]{6,}$/;

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const result = pattern.test(username[0].value);
    const search = username[0].value.search(pattern);


    const resultPhone = pattern.test(phone[0].value)
    
    if(!result) {
        console.log("O nome deve ter pelo meno 6 caracteres")
        
    } else {
        console.log(username[0].value)
    }

    if(resultPhone) {
        console.log(`O telefone e ${phone[0].value}`)
    }

    console.log(search)

    
})