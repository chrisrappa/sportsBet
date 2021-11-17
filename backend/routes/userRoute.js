import express from 'express';
import User from '../models/userModel';
import { getToken } from '../util';

const router = express.Router();

router.get('/:id', async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  if (user) {
    user.username = req.body.username || user.username;
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;
    res.send({
      _id: user.id,
      name: user.name,
      email: user.email,
      // isAdmin: user.isAdmin,
      // token: getToken(updatedUser),
    });
  } else {
    res.status(404).send({ message: 'User Not Found' });
  }
});

router.put('/:id', async (req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (user) {
      user.username = req.body.username || user.username;
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.password = req.body.password || user.password;
      const updatedUser = await user.save();
      res.send({
        _id: updatedUser.id,
        username: updatedUser.username,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: getToken(updatedUser),
      });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  });

  
router.post("/signin", async (req, res) => {
    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    })

    if(signinUser){
        res.send({
            _id: signinUser.id,
            username: signinUser.username,
            name: signinUser.name,
            email: signinUser.email,
            // isAdmin: signinUser.isAdmin,
            // token: getToken(signinUser),
        });


    } else {
        res.status(401).send({msg: 'Invalid Email or Password'});
    }
});


router.post("/register", async (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        dob: req.body.dob,
        gender: req.body.gender,
        zipCode: req.body.zipCode
    })

    const newUser = await user.save();

    if(newUser){
      res.send({
          _id: newUser.id,
          username: newUser.username,
          name: newUser.name,
          email: newUser.email,
          // isAdmin: newUser.isAdmin,
          // token: getToken(newUser),
      })
    } else {
        res.status(401).send({msg: 'Invalid User Data'});
    }
})



router.get("/createadmin", async (req, res) => {
    try{
        const user = new User({
            name: 'admin',
            email: 'rappacontact@gmail.com',
            password: '1234',
            isAdmin: true,
        });
    
        const newUser = await user.save();
        res.send(newUser);

    } catch (error) {
        res.send({msg: error.message});
    }

});




export default router;