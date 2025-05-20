function RecieveMessage(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Message Recieved");
        }, 2000);
    })
}

async function MessageHandler(){
    try{
        const data = await RecieveMessage();
        console.log(data);
    }
    catch(error)  {
        console.log("error", error )
    }
}

MessageHandler();
console.log("After MessageHandler function");