class RetiredForagerBee extends ForagerBee {
  constructor () {
    super();
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
    this.forage = function() {
      return  "I am too old, let me play cards instead";      
    }
    this.gamble = function() {
      this.treasureChest.push('treasure');
    }
  }
};
