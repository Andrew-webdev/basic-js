module.exports = function createDreamTeam(members) {
  let arr = [];
  if (Array.isArray(members)) {
    for (i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        arr.push(members[i].trim().charAt(0).toUpperCase())
      }
    }
    return arr.sort().join('')
  } else {
    return false
  }
}