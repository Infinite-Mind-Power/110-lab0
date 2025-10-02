export default class lemonade{
    cups_lemonade:number;

    constructor(cups_lemonade:number){
        this.cups_lemonade = cups_lemonade;
    }
    lemonade_maker(lems:number,wats:number,sugs:number){
        return (lems/wats)*sugs;
    }
    add_cups_lemonade(add_cups:number){
        return this.cups_lemonade += add_cups;
    }

    sold_cups_lemonade(sold:number){
        if(this.cups_lemonade <= 0){
            return console.log("out of lemonade, either make lemonade or buy more resources!");
        }
        else{
            return this.cups_lemonade -= sold;
        }
        
    }
}