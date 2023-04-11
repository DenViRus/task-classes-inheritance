var Builder = require("./Builder");

function StringBuilder(string) {
  if (!string) string = '';
  Builder.call(this, string);
}
Object.setPrototypeOf(StringBuilder.prototype, Builder.prototype);

StringBuilder.prototype.minus = function (n) {
  this.val = this.val.slice(0, -n);
  return this;
};

StringBuilder.prototype.multiply = function (int) {
  this.val = this.val.repeat(int);
  return this;
};

StringBuilder.prototype.divide = function (n) {
  this.val = this.val.slice(0, Math.floor(this.val.length / n));
  return this;
};

StringBuilder.prototype.remove = function (str) {
  this.val = this.val.split(str).join("").trim();
  return this;
};

StringBuilder.prototype.sub = function (from, n) {
  this.val = this.val.slice(from, from + n);
  return this;
};

module.exports = StringBuilder;
