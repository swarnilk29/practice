const sendJoke = new Promise((resolve, reject) => {
    let joke = false;
    setTimeout(() => {
    if(joke){
        resolve("you have yo laugh")
    }else{
        reject("you have to cry")
    }    
    },2000)
        
});

sendJoke
.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
console.log("Fetching data...");
