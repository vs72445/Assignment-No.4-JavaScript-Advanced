
let Output = document.getElementById('output');
let Input = document.getElementById('input');

let buttons = document.querySelectorAll('button');

let outputScreen = '';
let inputScreen = '';

for(item of buttons){
    item.addEventListener('click', (element)=>{
        buttonText = element.target.innerText;
        // console.log(buttonText);
        if(buttonText == 'x'){
            buttonText = '*';
            // console.log(buttonText);
            inputScreen += buttonText;
            Input.value = inputScreen;
        }
        else if(buttonText == 'AC'){
            outputScreen = '';
            inputScreen = '';
            input.value = '';
            output.value = '';
        }
        else if(buttonText == '='){
            input.value = eval(inputScreen);
            output.value = input.value;
            input.value = inputScreen;
        }
        else{
            inputScreen += buttonText;
            Input.value = inputScreen;
        }

    })
}