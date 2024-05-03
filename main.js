// const colorSelect = document.getElementById('colorSelect');
// const colorDisplay = document.getElementById('colorDisplay');

// colorSelect.addEventListener('change', function name() {
//     const selectedcolor = colorSelect.value;
//     colorDisplay.style.color = selectedcolor;
// })






// const myInput = document.querySelector("#test");
// const myForm = document.querySelector('#myForm');
// const bodyColor = document.querySelector('body');

// myForm.addEventListener("submit", function test(event) {
//     event.preventDefault();
//     const valueGet = myInput.value;
//     bodyColor.style.backgroundColor = valueGet;
//     console.log(valueGet);
// })


document.getElementById('forma').addEventListener('submit', function(event) {
    event.preventDefault();

    var modmeId = document.getElementById('modmeId').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    if (modmeId === '123456' && password === '78900') {
        window.location.href = 'https://space.marsit.uz/';
    } else {
        errorMessage.textContent = 'Modme ID yoki parol notogri.';
    }
});


const good = document.getElementById('modmeId');

good.style.marginLeft = '200px';
good.style.paddingLeft = '15px';
good.style.background = 'palegoldenrod';
good.style.border = '0px';
good.style.width = '200px';
good.style.height = '30px';
good.style.borderRadius = '3px'
good.active.border = '2px solid orange';


