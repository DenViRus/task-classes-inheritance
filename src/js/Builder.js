function Builder(val) {
  this.val = val;
}

Builder.prototype.plus = function() {
  this.val += ' + ' + Array.from(arguments).join(' ');
    return this;
}

 Builder.prototype.minus = function() {
  this.val += ' - ' + Array.from(arguments).join(' ');
  return this;
}

Builder.prototype.multiply = function() {
  this.val += ' ** ' + Array.from(arguments).join('');
  return this;
}

Builder.prototype.divide = function() {
  this.val +=  ' % ' + Array.from(arguments).join(' ');
  return this;
}

Builder.prototype.get = function() {
  return this.val;
}
module.exports = Builder;
