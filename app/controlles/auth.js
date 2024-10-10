const { httpError } = require('../helpers/handleError')
const { encrypt, compare } = require('../helpers/handleBcrypt')
const { tokenSign } = require('../helpers/generateToken')
const userModel = require('../models/users')

//TODO: Login!
const loginCtrl = async(req, res) => {
    try {
      const mockUser = {
        name: 'JuanFe',
        email: 'juanfe@test.com',
        password: '12345678',
        avatar: 'https://cloudfront-us-east-1.images.arcpublishing.com/sdpnoticias/4AYVLUH76FC5LIJPQQYM643YGM.png'
      }
  
      const { email, password } = req.body;
  
      if (mockUser.email !== email) {
        res.status(404).send({ error: 'User not found' });
        return;
      }
  
      const checkPassword = (mockUser.password === password);
  
      if (!checkPassword) {
        res.status(409).send({ error: 'Invalid password' });
        return;
      }
  
      //TODO: Si email y password son correctos, generar el token
      const tokenSession = await tokenSign(mockUser);
  
      res.send({
        data: mockUser,
        tokenSession
      });
  
    } catch (e) {
      httpError(res, e);
    }
  }
  
//TODO: Registramos usuario!
const registerCtrl = async(req, res) => {
    try {
        //TODO: Datos que envias desde el front (postman)
        const { email, password, name } = req.body

        const passwordHash = await encrypt(password) //TODO: (123456)<--- Encriptando!!
        const registerUser = await userModel.create({
            email,
            name,
            password: passwordHash
        })

        res.send({ data: registerUser })

    } catch (e) {
        httpError(res, e)
    }
}



module.exports = { loginCtrl, registerCtrl }
