const express = require('express');


const Accept_Coins = {"penny":1,"nickel":5,"dime":10,"quarter":25}
const Avail_Drinks = {"Coke":25,"Pepsi":32,"Soda":47}
var drink_Cost,Amount_entered,final_value = "Nil";
function findDrinkCost(drink){
    for(key in Avail_Drinks){
        if(drink.localeCompare(key)==0){
           drink_Cost = Avail_Drinks[key];
           break;
        }
   }
}
function cal_amount(n_penny,n_nickel,n_dime,n_quarter){
   Amount_entered = n_penny*Accept_Coins["penny"]+n_nickel*Accept_Coins["nickel"]+n_dime*Accept_Coins["dime"]+n_quarter*Accept_Coins["quarter"];
   if(Amount_entered == drink_Cost){
       console.log("Have Your drink!");
       final_value = 0;
   }
   else if(Amount_entered<drink_Cost){
   console.log("Need more");
   final_value =  Amount_entered - drink_Cost;
   }
   else{
   console.log("Extra");
   final_value = Amount_entered - drink_Cost;
   }
}

exports.homePage = function(req,res){
    res.render('index');
}

exports.getUserInput = function(req,res){
    var drink = req.body.drinks;
    findDrinkCost(drink);
    var n_penny = req.body.show_p;
    var n_nickel = req.body.show_n;
    var n_dime = req.body.show_d;
    var n_quarter = req.body.show_q;
    cal_amount(n_penny,n_nickel,n_dime,n_quarter);
    res.render('index',{final_value:final_value,drink:drink,amount:Amount_entered});
}


