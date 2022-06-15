let hello_result = document.getElementById('hello-result');


function askHello() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response =>response.json())   
    .then(response =>{
       /*  console.log(response.value);
        console.log(response); */
        console.log(response)
        hello_result.innerHTML=`${response.value}`

    }
    )

}
  
  document.addEventListener("click", askHello);