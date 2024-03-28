import inquirer from "inquirer";
// initialize user balance and pin code
let mybalance = 15000;
let myPinCode = 9285;
// print welcome message
console.log("\n\tWelcome to Code with Shahzaib - ATM Machine\n");
let pinAnswer =await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin",
        type: "number"
    }
]);
if(pinAnswer.pin === myPinCode){
    console.log("Login Successfully");
    // console.log(`Your current Balance is ${mybalance}`)

    let operationAns = await inquirer.prompt([
       {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["Withdraw Cash", "Check Balance"]

       } 
    ])
    if(operationAns.operation === "Withdraw Cash"){
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the Amount to withdraw:"
            }
        ])
        if(amountAns.amount >= mybalance){
            console.log("You Have Insufficent Balance to Complete this Transaction!");
        }else{
            mybalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw Successfuly`);
            console.log(`Your Remaining Balance is: ${mybalance}  `)
        }
    }
    else if(operationAns.operation === "Check Balance"){
        console.log(`Your Account Balance is: ${mybalance}`)
    }
}else{
    console.log("Your Pin is Incorret Please try Again!")
}