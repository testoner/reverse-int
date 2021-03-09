module.exports = function reverse(n) {
    let k = n;
    n = n + '';
    n = n.split('').reverse();
    let l = n.length;
    if (k < 0) n.pop();
    n = n.join('');
    return +n;
}
