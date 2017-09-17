import { Router } from 'express';
import { UserAuth } from '../controller/controller'

export const router = Router();


router.get('/',(req,res)=>{
    res.send("kaka")
})

// router.post('/register', UserAuth.register);

// router.post('/login',UserAuth.login);

router.post('/patient',UserAuth.storeallusers);

router.get('/allPatient',UserAuth.getAllPatient);

// router.get('/dashboard',UserAuth.checkLoggedIn);