export default class resource{

     lemon:number;
     sugar:number;
     water:number;
     cup:number;
     straw:number;

  static readonly cost_of_lemon = 0.55;
  static readonly cost_of_sugar = 1;
  static readonly cost_of_water = 0.25;
  static readonly cost_of_cup = 0.10;
  static readonly cost_of_straw = 0.05;
  


    constructor(lemon:number, sugar:number, water:number, cup:number, straw:number){
        this.lemon = lemon;
        this.sugar = sugar;
        this.water = water;
        this.cup = cup;
        this.straw = straw;
    }
    

    addLemon(amountLemon:number){
        return this.lemon +=amountLemon;
    }
    addSugar(amountSugar:number){
        return this.sugar +=amountSugar;
    }
    addWater(amountWater:number){
        return this.water +=amountWater;
    }
    addCup(numberCup:number){
        return this.cup +=numberCup;
    }
    addStraw(numberStraw:number){
        return this.straw +=numberStraw;
    }

    static costTable(){

        console.log(
            "**** cost of lemon (kg): " + resource.cost_of_lemon+ " ****\n"+
            "**** cost of each cup: " + resource.cost_of_cup+ " ****\n"+
            "**** cost of sugar (kg): " +resource.cost_of_sugar+ " ****\n"+
            "**** cost of water (Liters): " +resource.cost_of_water+ " ****\n"+
            "**** cost of earch straw: " +resource.cost_of_straw+ " ****"
         );
    }

    costCalculator(){
       let cost = (resource.cost_of_lemon*this.lemon +  resource.cost_of_sugar*this.sugar +
        resource.cost_of_water*this.water + resource.cost_of_cup*this.cup + resource.cost_of_straw*this.straw);
        return cost;
    }

}
