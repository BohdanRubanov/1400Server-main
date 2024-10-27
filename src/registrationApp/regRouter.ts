import regControllers from './regController';
import {Router} from 'express';

const router = Router();

router.post('/login', async (req, res) => {
    try {
        await regControllers.authLogin(req, res);
    } catch (err) {
        console.log(err)
    }
});

router.post('/register', async (req, res) => {
    try {
        await regControllers.authRegistration(req, res);
    } catch (err) {
        console.log(err)
    }
});


router.get('/login', regControllers.login)

router.get('/register', regControllers.registration)

export default router;

