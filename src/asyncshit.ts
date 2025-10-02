import { readFile } from 'node:fs/promises';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import User from './User.js';

const rl = readline.createInterface({input, output});
let newUser:User;
async function main(){
    const intro_text = await readFile(new URL("./intro.txt", import.meta.url), "utf8");
    console.log(intro_text);
    newUser = await greet();
    game(newUser);
}

async function greet(){
    //uin stands for userinput
    const uin_name :string = await rl.question('Type your name: ');
    const uin_age :string = await rl.question('Type your age: ');
    const uin_email :string = await rl.question('Type your email: ');
    rl.close();

   const user_age = Number(uin_age);
   if (!Number.isFinite(user_age)) throw new Error('Age must be a number');
   const newUser = new User(uin_name,uin_age,uin_email); 
   
   return newUser;
}
async function game(currUser:User){
    currUser.name = (await newUser).name;
    currUser.age = (await newUser).age;
    currUser.email = (await newUser).email;
    const game_info = readFile(new URL("./gameInfo.txt", import.meta.url), "utf8");
    console.log(game_info);
    console.log(`Welcome dear mutant! let\`\s play some lemoniac ${newUser.name}!`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});