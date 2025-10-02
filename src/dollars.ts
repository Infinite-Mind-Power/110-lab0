export default class safe{

    dollarAmount:number;

    constructor(dollarAmount:number){
        this.dollarAmount = dollarAmount;
    }

    addDollar(increase_amount:number){
        return this.dollarAmount + increase_amount;
    }

    substractDollar(decrease_amount:number){
        return this.dollarAmount - decrease_amount;
    }

    zeroBalance(){
        return this.dollarAmount=0;
    }

}
  