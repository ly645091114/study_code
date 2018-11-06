/**
 * 创建一个用户对象
 * @param { String } name 用户名称
 * @param { String } movie 租借影碟
 */
function Customer (name, movie) {
  let self = this;
  self.name = name;
  self.movie = movie;
}

exports.Customer = Customer;
