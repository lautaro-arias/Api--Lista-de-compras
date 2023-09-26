import {Router} from 'express';
const router = Router();

import passport from 'passport';

router.get('/list',passport.authenticate('jwt',{session:false}),(req,res) => {
    res.send('succes') ;
})

export default router