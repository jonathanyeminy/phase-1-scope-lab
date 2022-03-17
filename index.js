// Write your solution in this file!

var customerName = "bob"

function upperCaseCustomerName(customerName){
     customerName = customerName.toUpperCase()
     return customerName
}

function setBestCustomer () {
    globalThis.bestCustomer = 'not bob'
}
function overwriteBestCustomer(bestCustomer){
    globalThis.bestCustomer = 'maybe bob'
}
const leastFavoriteCustomer = "brent"
function changeLeastFavoriteCustomer(newLeastFavorite) {
    leastFavoriteCustomer = newLeastFavorite
}