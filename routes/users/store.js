// function createUser({username, password}) {
//   console.log("")
//   return Promise.resolve();
// }

// module.exports = {createUser}

module.exports = {
  createUser ({ username, password }) {
    console.log(`Add user ${username} with password ${password}`)
    return Promise.resolve()
  }
}
