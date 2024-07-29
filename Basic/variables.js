const account_Id = 123456   // not change this value (Const)
let account_Email = "tirth@google.com"
var account_password = "1234"
account_City = "kadi"
let account_State
// account_Id = 123 // not change allowed becuase it is Const

account_Email = "babalu@google.com"
account_password = "4567"
account_City = "Kalol"

console.log(account_Id);

/*
    Prefer not use var
    becuase of issue in block scope and functional scope
*/

console.table([account_Id , account_Email , account_password , account_City , account_State])