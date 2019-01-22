const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = Joi.object().keys({
      email: Joi.string().email(),
      password: Joi.string().regex(/[a-zA-Z0-9]{8,30}/)
    })

    const { error } = Joi.validate(req.body, schema)
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Please provide a valid email adress'
          })
          break
        case 'password':
          res.status(400).send({
            error: `Password Error! Please make sure your password meet the following provisions:
            <br>
            1. It is a minimum of 8 characters and a maximum of 32 characters
            <br>
            2. Contains alphanumeric and unique characters
            <br>
            3. `
          })
          break
        default:
          res.status(400).send({
            error: 'Sorry, you provided invalid registration information! Please try agian later'
          })
      }
    } else {
      // res.status(200).send({
      //   success: `The registration for ${req.body.email} was successful. Please login`
      // })
      next()
    }
  }
}
