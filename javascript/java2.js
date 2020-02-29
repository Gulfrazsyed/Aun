//First Function
/*
function doCleaning() {
    console.log("i clean house");
}


doCleaning();

//Second Function

function withDrawMoney(amount) {
    console.log("Withdrawn amount is :", amount)
}
withDrawMoney(167)

//Third Function

function makeBreakefast(tea,toast) {
    console.log("tea"+" "+ "toast")
}
makeBreakefast()

 //Fourth Function

function getFullName(firstName, secondName, middleName) {
    console.log(firstName, secondName, middleName)
    let FullName= firstName+secondName+middleName
    console.log(FullName);
    return (FullName);
 }


getFullName("gulfraz" + " " + "hussain" + " " + "syed")

///

let patient = {
    Name: 'Syed',
    Age: 45,
    height:'5.9 inches',
    Sex: 'F',
    Country: 'Pakistan',

    
    
}

console.log(patient)

 ///
let match = {
    leagueType: 't20',
    matchRes: {
        t20: {
            score: 123,
        }

    }
}
console.log(match.matchRes.t20.score)
  
///

  let person = new Object();
    person.firstName = "syed";
    person.lastName = "khan";
    person.age = 70;

console.log("person object:" + person);
    
/////



    let scores =[
        13,14,16,
    ]
console.log(scores[1])

   
    

let getAddress = {
    street :'3420 Danville dr',
    zipCode :78613,
    city :'Cedarpark',
    state: 'TX',

    
}
console.log(getAddress);
console.log('street: ', getAddress.street)
///



////#2
function getCityinfo() {
    let cities = {
        pakistan: [
            { name: 'Karachi', nickName: 'The City of Lights.' },
            { name: 'Lahore', nickName: 'The City of foods.' },
        ],
        usa: [
            {
                name: 'New York City', nickName: 'the City that Never Sleeps.'
            },
            {
                name: ' San Antonio', nickName: 'Almo city'
            },
            {
                name: ' Chicago', nickName: 'The windy City'
            },11
        ],
        
    };

let cityNickName = 'The City of Lights'
console.log("City Nickname is:", cities.pakistan[0].name)
return;
}
getCityinfo()
 ////#3

function getPlayers() {
    let list = ['Al', 'Samad', 'hasssan', 'kiani',];
    return list;
}
console.log(getPlayers());

///functions

function calculateAge(birthYear) {
    return 2020 - birthYear;
}
let ageJohn = calculateAge(1990);
let ageMike = calculateAge(1992);
let ageAdam = calculateAge(1994);
console.log(ageJohn, ageMike, ageAdam);

function yearsUntilRetirement(year, firstName){
    let age = calculateAge(year);
    let retirement = 65 - age;
    if (retirement > 70)
    {
        console.log(firstName +' ' +'retires in' + retirement + ' '+'years');
    }
        else {
            console.log(firstName + 'is already retired.')
        }
    }
yearsUntilRetirement(1998, 'john');
yearsUntilRetirement(1990, 'john');
yearsUntilRetirement(1993, 'john');
yearsUntilRetirement(1994, 'john');
*/
function getAccountBalance(accountBalance, billAmount){
    if (billAmount <= 0) {
        console.log('Congrat ,you have nothing due!');
        return;
    }
    if (accountBalance <= 0) {
        console.log('You do not have balance to pay bill')
        return;
    } else if (accountBalance < billAmount) {
        console.log('you have insufficient balance to pay bill.');
        return;
 
    } else {
        console.log("your's bill is being processed!");
        return;

    }
}

getAccountBalance(10, 0);
getAccountBalance(0, 10);
getAccountBalance(10, 10);


