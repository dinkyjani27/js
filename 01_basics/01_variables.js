const accountId = 22345
let accountEmail = "d@gmail.com"
var accountPassword = "12345"
accountCity = "Ahmedabad"
let accountState

// accountId = 2334 // not allowed
/*
prefer not to use var
because  of issue in block scope and functional scope 
*/
accountEmail = "a@gmail.com"
accountPassword ="2323"
accountCity = "gandhinagar"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])