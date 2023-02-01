const {writeFileSync} = require('fs')

for (var i = 0; i < 100000; i++){
    writeFileSync('./content/big.txt', `hello world ${i} \n`, {flag: 'a'});
}