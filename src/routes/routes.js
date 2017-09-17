import { Router } from 'express';
import { UserAuth } from '../controller/controller'

export const router = Router();

router.get('/check',(req,res)=>{
res.send('checking')
})
router.get('/',(req,res)=>{
    res.send("kakaaa")
})

// router.post('/register', UserAuth.register);

// router.post('/login',UserAuth.login);

router.post('/patient',UserAuth.storeallusers);

router.get('/allPatient',UserAuth.getAllPatient);

// router.get('/dashboard',UserAuth.checkLoggedIn);