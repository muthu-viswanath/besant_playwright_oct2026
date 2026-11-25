import { Citizen } from "./Citizen";
import { Users } from "./Users";

let my_citizen:Citizen = new Users("SSN_112233","Muthu","Viswanathan","Trainer")

/*Whenever a super class object reference points to a sub class object, it is called as 
 up casting.

 Using the up casted reference it is possible to access only the overridden method from the
 sub class.

 It is not possible to access the subclass specific methods

 */

 my_citizen.describe()
 my_citizen.getFullName()
 
 /*It is not possible to access the subclass specific methods*/

//  my_citizen.show()
//  my_citizen.display_SSN()

//Converting the up casted variable/object reference back to its sub class 
// is called down casting

let usrs = my_citizen as Users
usrs.show()
usrs.displaySSN()

