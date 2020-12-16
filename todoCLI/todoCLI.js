
const fs=require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log('Welcome to Todo CLI!');
function todo() {
    let list = []
    function prompt() {
        rl.question('(v) View - (n) New - (cX) Complete - (dX) Delete - (q) Quit\n>', input => {
            if(input === 'v'){
                    if(list.length !== 0){
                        for(let i=0;i<list.length;i++){
                        console.log(`${i} ${list[i]}`);
                        }
                    }
                    else{
                        console.log('List is empty...')
                    }
                
                prompt();
            } else if(input === 'n'){
                rl.question('What? \n', answer =>{
                    list.push('[] ' + answer);
                    prompt();
                })
            } else if(input[0] === 'c'){
                let itemNum = parseInt(input.slice(1,input.length));
                let item = list[itemNum];
                if(itemNum<list.length){
                    let itemName = item.slice(3,item.length);
                    list[itemNum]= '[X]'+ itemName;
                    console.log(`completed "${itemName}"`)
                }    
                else{
                    console.log("item number does not exist")
                }
                prompt();
            } else if(input[0] === 'd'){
                let itemNum = parseInt(input.slice(1,input.length));
                let item = list[itemNum]
                if(itemNum<list.length){
                    let itemName = item.slice(3,item.length);
                    list.splice(itemNum,1);
                    console.log(`Successfully deleted "${itemName}"`);
                }
                else{
                    console.log("item number does not exist")
                }
                prompt();
            } 
            else if(input === 'q'){
                console.log('See you Soon!')
                rl.close();
                } 
                else {
                console.log('That is not a valid input');
                prompt();
                 }
             })
            }
    prompt();
}
todo();

   