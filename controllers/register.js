const handleRegister = (req, res, db, bcrypt) => {
  const { name, email, password } = req.body;
  // check if the are not blank:
  if(!email || !name || !password) {
    return res.status(400).json('Incorrect form submission.')
  }

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  // Store hash in your password DB.
    db.transaction(trx => {
      trx.insert({
        hash: hash,
        email: email
      })
      .into('login')
      .returning('email')
      .then(loginEmail => {
        return trx('users')
          .returning('*')
          .insert({
            name: name,
            email: loginEmail[0],
            joined: new Date()
          })
          .then(user => {
            res.json(user[0]);
          })
      })
      .then(trx.commit)
      .catch(trx.rollback)
    })
      .catch(err => res.status(400).json('unable to register')) // Not giving any information about our database
}

module.exports = {
  handleRegister: handleRegister
};