const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log('Welcome to Todo CLI!');
function todo() {
    let list = []
    function prompt() {
        rl.question('(v) View - (n) New - (cX) Complete - (dX) Delete - (s) Save - (q) Quit\n>', input => {
            if(input === 'v'){
                // WRITE CODE TO SHOW LIST
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
                // WRITE CODE TO PROMPT USER FOR NEW ITEM
                rl.question('What? \n', answer =>{
                    //console.log(`${answer}`);
                    list.push('[] ' + answer);
                    //console.log(list);
                    prompt();
                })
                
                
                //rl.close();
            } else if(input[0] === 'c'){
                // WRITE CODE TO PROMPT USER TO CHOOSE WHICH ITEM TO MARK AS COMPLETE
                let itemNum = parseInt(input.slice(1,input.length));
                let item = list[itemNum]
                let itemName = item.slice(3,item.length);
                list[itemNum]= '[X]'+ itemName;
                console.log(`completed ${itemName}`)
                prompt();
            } else if(input[0] === 'd'){
                // WRITE CODE TO PROMPT USER TO CHOOSE WHICH ITEM TO DELETE
                let itemNum = parseInt(input.slice(1,input.length));
                let item = list[itemNum]
                let itemName = item.slice(3,item.length);
                list.splice(itemNum,1);
                console.log(`Successfully deleted "${itemName}"`);
                prompt();
            } 
            else if(input === 's'){
                // WRITE CODE TO PROMPT USER FOR NEW ITEM
                rl.question('Where? \n', answer =>{
                    //WRITE CODE TO SAVE 
                    //console.log(`${answer}`);
                    //list.push('[] ' + answer);
                    //console.log(list);
                    prompt();
                })
                
                
            }else if(input === 'q'){
                // WRITE CODE TO QUIT PROGRAM
                console.log('See you Soon!')
                rl.close();
            } else {
                console.log('That is not a valid input');
                prompt();
            }
           
        })
    }
    prompt();
}
todo();
