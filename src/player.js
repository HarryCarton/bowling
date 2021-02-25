
class Player{
  constructor(name){
    this.name = name 
    this.scorecard = new Scorecard()
  };

  getName(){
    return this.name
  };

  getscoreCard(){
    return this.scorecard;
  };
};