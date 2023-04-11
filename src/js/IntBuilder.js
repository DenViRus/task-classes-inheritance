const Builder = require('./Builder');

class IntBuilder extends Builder {
  constructor(int = 0) {
    super(int);
  }

  plus(...n) {
    this.val += [...n].reduce((sum, cur) => sum + cur, 0);
    return this;
  }

  minus(...n) {
    this.val -= [...n].reduce((sum, cur) => sum + cur, 0);
    return this;
  }

  multiply(n) {
    this.val *= n;
    return this;
  }

  divide(n) {
    this.val = parseInt(this.val / n) ;
    return this;
  }

  mod(n) {
    this.val %= n;
    return this;
  }

  static random(from, to) {
    return Math.floor(from + Math.random() * (to + 1 - from));
  }
}

module.exports = IntBuilder;
