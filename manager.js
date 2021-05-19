// Task Manager !!

const readline = require ('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let tasks = ['My tasks :\n'];

const menu = () =>{
rl.question(`\n\nWelcome to your task manager, Press:\n
    1. to see all your tasks\n
    2. to add a task\n
    3. to delete a task\n
    4. to mark a task as done\n
    5. to clear the done list\n
    6. to Exit the task manager\n\n`, 
    function
     (userInput) {
        let num = parseInt(userInput);
        

        // 4 mark a task as done
        const taskDone = (i) =>{
             
        };
        switch (num) {
            case 1 : console.log(`${tasks}`);
            menu();
            break ; 
            
            case 2 : rl.question('Write the task you want to add \n', (newtask) => {
                    tasks.push(`\n ${newtask} `);
                    console.log("Your task has been added on the list");
                    menu();});
            break ; 

            case 3 : rl.question('What is the number of the task you want to delete ? \n', (i) =>{
                    tasks.splice(tasks.indexOf(i),1);
                    console.log("This task has been deleted");
                    menu();});
            break ; 
            
            case 4 : rl.question('What is the number of the task you finished ? \n', (i) =>{
                    tasks[i]= "✔️ "+ tasks[i];
                    console.log("Congratulations! This task is finished ! What's next ?!");
                    menu();})
            break ;

            case 6: rl.close();
            break ;

            default : console.log("You must chose form 1 to 6");
            menu();
         }       
        }
)}; 

menu();                                

