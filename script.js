 let input = document.getElementById('inputbox');
 let btn = document.querySelectorAll('button')

 let string = "";
 let arr = Array.from(btn);
 arr.forEach(btn =>{

    btn.addEventListener('click',
    (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        elif (e.target.innerHTML == 'AC'){
            string.valueOf = "";
            input.string = string;
        }
        elif (e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length -1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
 })
