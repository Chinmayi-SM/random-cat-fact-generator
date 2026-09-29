let btn1 = document.querySelector(".b1");
btn1.addEventListener("click", function(){
    let h1 = document.querySelector(".header");
    let url = "https://catfact.ninja/fact";
    fetch(url)
    .then((response)=> {
        response.json().then((data) => {
        let data1 = data.fact;
        console.log(data1);
        if (data1.length < 100){
             h1.innerText = data1;
        }
    })
});


})

let btn2 = document.querySelector(".b2");
btn2.addEventListener("click",function() { 
    let h1 = document.querySelector(".header");
    h1.innerText = "Generate random cat fact";
})