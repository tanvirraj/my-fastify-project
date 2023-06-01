const SQL = require('@nearform/sql')

function consume() {
  return SQL`
     SELECT now()
    `
}

module.exports = {
  consume
}
