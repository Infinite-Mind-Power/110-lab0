//thelemoniac.ts 
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { readFile } from "node:fs/promises";
import User from "./User.js"; 
import dollar from "./dollars.js";
import Lemonade from "./lemonade.js";
import Resource from "./resource.js";


const rl = readline.createInterface({ input, output });

async function greet(): Promise<User> {

  const name = (await rl.question("Type your name: ")).trim();
  const ageStr = (await rl.question("Type your age: ")).trim();
  const email = (await rl.question("Type your email: ")).trim();

  

  const age = Number(ageStr);
  if (!Number.isFinite(age)) {
    throw new Error("Age must be a number");
  }
  
  return new User(name, ageStr, email);
}
async function game(currUser: User) {
  try {
    const gameInfo = await readFile(new URL("./gameInfo.txt", import.meta.url), "utf8");
    console.log(gameInfo);
  } catch (err) {
    console.error("Could not read gameInfo.txt:", err);
  }
  console.log( 
    `let's play some Lemoniac, ${currUser.name}! you are assigned 100 LemonCoin
    and you have the options to select number of drinks you are going to make. 
    Becareful,we can not predict the weather as the president messed up the 
    climate change policies thus everyone is cooked. Some Days are extremely
    hot while some days are extemely cold and snowy there are no seasons anymore, \n
    you have to make your lemonade a day before and kind gamble on the weather conditions.
    If the conditions are good all your lemonade are sold if the conditions are bad you lose
    it all and you are a loser and if you got money you can try again, it's ok life is not fair
    all the times! \n
    Though chevron, mobil, exxon, shell, and all others are still banking Benjas!
    You have to be mindful of your resources and and if you waste money you
    will be freaking bankrupt and you have to file for bankruptcy otherwise 
    you will be slaved for the rest of them game!! Seriously!
    `);
  //  game logic using currUser
    let balance = 100;
    let safe = new dollar(balance);
 
    const amount_of_lemons = (await rl.question("How much lemon you want to buy in (kg)? ")).trim();
    const number_of_cups = (await rl.question("How many cups you want to buy? ")).trim();
    const amount_of_sugar = (await rl.question("How much sugar you want to buy in (kg)? ")).trim();
    const amount_of_water = (await rl.question("How much water you want to buy in (Liters)? ")).trim();
    const number_of_straw = (await rl.question("How many straws you want to buy? ")).trim();
    
    const lemons = Number(amount_of_lemons);
    const sugar = Number(amount_of_sugar);
    const water = Number(amount_of_water);
    const cups = Number(number_of_cups);
    const straw = Number(number_of_straw);

    if (!(Number.isFinite(lemons) && Number.isFinite(sugar) && Number.isFinite(water)
    && Number.isFinite(cups) && Number.isFinite(straw))) {
        throw new Error("FAFO! Value must be Number!");
    }
    let resource = new Resource(lemons,sugar,water,cups,straw);
    // calculating the total cost of the purchase
    let cost = resource.costCalculator();
    balance = safe.substractDollar(cost);
    let lemonade = new Lemonade(resource.cup);
    let amount_lemonade = lemonade.lemonade_maker(lemons,water,sugar);
    

    
    try{
    if(safe.dollarAmount<=0){
        console.log("No Money, No Honey! GFO!");
    }else{
        console.log(

            "you bought: \n" + 
            "***** Lemons: "+resource.lemon+" kg \n"+ 
            "***** Cups: "+resource.cup+"\n"+
            "***** Sugar: "+resource.sugar+" kg"+ "\n"+
            "***** Water: "+resource.water+ " Liters"+ "\n"+ 
            "***** Straw: "+resource.straw + "\n" +
            "***** Ok! You're total cost is " + Math.floor(resource.costCalculator()*100)/100+ " LemonCoins! \n"+
            "***** Remaining Balance is : " + balance + " LemonCoins"+ 
            " ###### So now that you got some resources the number cups represents how many lemonade will be sold.\n"+ 
            "The games' algo will consider how much lemonade is made and how much is wasted! "+
            "The amount of lemonade is " + amount_lemonade + " liters!"
        );
        
    if(resource.cup < amount_lemonade){
      console.log("wasted! some lemonade!");
    }else if (resource.cup > amount_lemonade){
      console.log( "you come short on cups bud!"); 
    }
    
    }
    }catch (err){
        console.error("There is a problem with ordering, wait till fixed!");
    }
    
    rl.close();
}

async function main() {
  try {
    try {
      const introText = await readFile(new URL("./intro.txt", import.meta.url), "utf8");
      console.log(introText);
    } catch (err) {
        console.error("There is a problem with intro!", err);
    }
    const newUser = await greet();
    await game(newUser);
  } catch (err) {
    console.error("bam! error.", err);
    process.exit(1);
  }
}

main();
