// conditional statements
// Conditional statements allows you to execute different blocks of code based on specified conditions
// 1.if condition 
// The if statement executes a block of code if a specified condition is true.
// Syntax:
// example
// var grade =prompt("enter the grades");
// switch(grade){
//     case "A":
//         console.log("Excellent");
//         break;
//         case "B":
//         console.log("Good");
//         break;
//         case "C":
//         console.log("Fair");
//         break;
//         case "D":
//         console.log("poor");
//         case "F":
//         console.log("Fail");
//         break;
//         default:
//            console.log("Invalid grade");
           
// }


// by using conditional statements 

// var day=prompt("Enter the Current day")
// if (day=="monday"){
//     console.log("Start your week strong!")
// }
// else if(day=="tuesday"){
//     console.log("Keep going!”");
// }
// else if(day=="wednesday"){
//     console.log("Halfway there!");
// }
// else if(day=="thursday"){
//     console.log("Almost the weekend!");
// }
// else if(day=="friday"){
//     console.log("Happy Friday!");
// }
// else if(day=="sunday"){
//     console.log("Enjoy your weekend!");
// }
// else{
//     console.log("enter the proper day")
// }



// by using the switch statement

// var day=prompt("Enter the day in a week");

// switch (day){
//     case "monday":
//     console.log("it is monday")
//     break;
//     case "tuesday":
//     console.log("it is tuesday")
//     break;
//     case "wednesday":
//     console.log("it is wednesday")
//     break;
//     case "thursday":
//     console.log("it is thursday");
//     case "friday":
//     console.log("it is friday");
//     case "saturday":
//     console.log("it is saturday");
//     default:
//     console.log("enter the proper day")

// }

// 2.traffic light simulation 

// let light=prompt("Enter the traffic light color");

// if(light=="RED"){
//     console.log ("stop the vehicles");
// }
// else if (light=="YELLOW"){
//     console.log("Get ready");
// }
// else if (light=="GREEN"){
//     console.log("You can go");
// }
// else{
//     console.log("Enter the correct color")
// }


// by using the switch case

// let light=prompt("enter the color of the traffic light");

// switch (light){
//     case "RED":
//     console.log("Stop the all vehicles");
//     break;
//     case "GREEN":
//     console.log("You can go to your destination")
//     break;
//     case "YELLOW":
//     console.log("Get ready with your vehicles");
//     break;
//     default:
//     console.log("coloe correct ga enter chey bro")
    
// }


// 3.Discount calculator

// let price=+prompt("Enter the discount");

// if(price<50){
//     console.log("No discount")
// }
// else if (price>=50 && price<=100)
//     console.log("5% discount");

// else if (price>=101 && price<=200)
//     console.log("10% discount");

// else if (price>200)
//     console.log("15% discount");
// else{
//     alert("enter the proper amount")
// }

// by using the switch case
 
// var price=+prompt("Enter the price");

// switch(price){
//     case (price<50):
//     console.log("No discount");
//     break;

//     case (price>=50 && price<=100):
//     console.log("5% discount");
//     break;

//     case (price>=101 && price<=200):
//     console.log("10% discount");
//     break;

//     case (price>200):
//     console.log("15% discount");
//     break;
//     default:
//     console.log("enter a valid amount");

// }

// 4.Restaurant menu prices

// var item=prompt("Enter the dish name");

// if (item=="biryani"){
//     console.log("$ 250 rupees");

// }
// else if(item=="fried rice"){
//     console.log("$ 100 rupees");
// }
// else if(item=="veg polav"){
//     console.log("$ 150 rupees");
// }
// else if(item=="chicken"){
//     console.log("$ 180 rupees");
// }
// else {
//     console.log("select the items from the menu");
// }


// by using the switch case 

// var item=prompt("enter the dish name");

// switch (item){
//     case "biryani":
//     console.log("$250 rupees");
//     break;

//     case "fried rice":
//     console.log("$100 rupees");
//     break;

//     case "veg polav":
//     console.log("$150 rupees");
//     break;

//     case "chicken":
//     console.log("$180 rupees")
//     break;
   
//     default:
//     console.log(" hotel lo unnai thinu bro vere endhuku!");
    
// }


// 5.Simple calculator

// var a=+prompt("Enter a 1st number:");
// var b=+prompt("Enter a 2nd number:");
// var operation=prompt("Enter the operation:")

// switch(operation){
//     case "+":
//     console.log(a+b);
//     break;

//     case "-":
//     console.log(a-b);
//     break;

//     case "*":
//     console.log(a*b);
//     break;

//     case "%":
//     console.log(a/b);
//     break;

//     case "%":
//     console.log(a%b);
//     break;

//     default:
//     console.log("Enter the correct operation");


// }



