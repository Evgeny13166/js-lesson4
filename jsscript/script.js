const shopCustomers = [{
    name:"Boris",
    balance: 125,
    alcoholName:"vodka",
    alcoholCount:2,
    age:17,
},{
    name:"John",
    balance: 150,
    alcoholName:"martini",
    alcoholCount:1,
    age:27,
    
},{

    name:"Maria",
    balance: 105,
    alcoholName:"gin",
    alcoholCount:20,
    age:28,
},{
    name:"Abdrey",
    balance: 135,
    alcoholName:"beer",
    alcoholCount:5,
    age:25,
},{
    name:"Semen",
    balance: 185,
    alcoholName:"cognac",
    alcoholCount:3,
    age:30,
},{
    name:"Nadin",
    balance: 30,
    alcoholName:"vino",
    alcoholCount:1,
    age:23,
},{
    name:"Bella",
    balance: 153,
    alcoholName:"champagne",
    alcoholCount:1,
    age:27,
},{
    name:"Misha",
    balance: 26,
    alcoholName:"rum",
    alcoholCount:2,
    age:34,
},{
    name:"Marina",
    balance: 75,
    alcoholName:"tequila",
    alcoholCount:2,
    age:24,
},{
    name:"Peter",
    balance: 15,
    alcoholName: "tonic",
    alcoholCount:2,
    age: 16,
}];

const priceForOneItemAlcohol = {
    beer:5.6,
    vodka:10.3,
    martini:25,
    gin:12.6,
    cognac:40,
    vino:30,
    champagne:10,
    rum:20.2,
    tequila:22.4,
    tonic:7.1,
};

function init(customers){
    customers.forEach(function (customer){
        if(customer.age >= 18){
            alert ("true");
        } else {
            alert ("false")
        };  
        function  fun (a){
           return priceForOneItemAlcohol[a];
        }
        let oneCount = fun(customer.alcoholName);

        function fun2  (b, c){
            return b*c;
        }
        let sumCount = fun2(customer.alcoholCount, oneCount);
        if (customer.balance >= sumCount){
            alert ("good");
        } else {
            alert ("bad");
        };

    });
  
}
init(shopCustomers);

