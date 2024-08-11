function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);  //function to generate random number
}
const { spawn } = require('child_process');
// for(let i=1;i<=10;i++){
let user =randomIntFromInterval(1,10); //generating random number within given interval

switch(user){
    case 1:
        const call1= spawn('python', ['disarium.py']);
        call1.stdout.on('data', (data) => {
            console.log(`stdout: \n${data}`);
        })

        call1.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        })

        call1.on('close', (status) => {
            console.log(`Executed with status ${status}`);
        })
        break;
    case 2:
        const call2= spawn('python', ['palindrome.py']);
        call2.stdout.on('data', (data) => {
            console.log(`stdout: \n${data}`);
        })

        call2.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        })

        call2.on('close', (status) => {
            console.log(`Executed with status ${status}`);
        })
        break;
    case 3:
        const call3= spawn('php', ['charFrequency.php']);
        call3.stdout.on('data', (data) => {
            console.log(`stdout: \n${data}`);
        })

        call3.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        })
        call3.on('error', (error) =>{
            console.error(`Error executing PHP script: ${error.message}`);
        })
        call3.on('close', (status) => {
            console.log(`Executed with status ${status}`);
        })
        break;
    case 4:
        const call4= spawn('python', ['prime.py']);
        call4.stdout.on('data', (data) => {
            console.log(`stdout: \n${data}`);
        })

        call4.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        })

        call4.on('close', (status) => {
            console.log(`Executed with status ${status}`);
        })
        break;
    case 5:
        const call5= spawn('php', ['factorial.php']);
        call5.stdout.on('data', (data) => {
            console.log(`stdout: \n${data}`);
        })

        call5.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        })
        call5.on('error', (error) =>{
            console.error(`Error executing PHP script: ${error.message}`);
        })
        call5.on('close', (status) => {
            console.log(`\nExecuted with status ${status}`);
        })
        break;
    case 6:
        const call6= spawn('php', ['perfect.php']);
        call6.stdout.on('data', (data) => {
            console.log(`stdout: \n${data}`);
        })

        call6.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        })
        call6.on('error', (error) =>{
            console.error(`Error executing PHP script: ${error.message}`);
        })
        call6.on('close', (status) => {
            console.log(`\nExecuted with status ${status}`);
        })
        break;
    case 7:
        const call7= spawn('java', ['slab_1.java']);
        call7.stdout.on('data', (data) => {
            console.log(`stdout: \n${data}`);
        })

        call7.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        })
        call7.on('error', (error) =>{
            console.error(`Error executing PHP script: ${error.message}`);
        })
        call7.on('close', (status) => {
            console.log(`Executed with status ${status}`);
        })
        break;
    case 8:
        const call8= spawn('java', ['fibonacci.java']);
        call8.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        })

        call8.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        })
        call8.on('error', (error) =>{
            console.error(`Error executing PHP script: ${error.message}`);
        })
        call8.on('close', (status) => {
            console.log(`Executed with status ${status}`);
        })
        break;
    case 9:
        const call9 = spawn('./anagram');
        call9.stdout.on('data', (data) => {
            console.log(`stdout: \n${data}`);
        })

        call9.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        })

        call9.on('close', (status) => {
            console.log(`Executed with status ${status}`);
        })
        break;
    case 10:
        const call10 = spawn('./hashed');
        call10.stdout.on('data', (data) => {
            console.log(`stdout: \n${data}`);
        })

        call10.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        })

        call10.on('close', (status) => {
            console.log(`\nExecuted with status ${status}`);
        })
        break;
    default:
        console.log("Invalid day");
        break;
}
// }

