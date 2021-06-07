import{Router,Request,Response} from 'express';

const router = Router();

router.get('/mensajes',(req:Request,res:Response) =>{
    res.json({
        ok:true,
        mensaje: 'Todo está bien'
    });
});

router.post('/mensajes',(req:Request,res:Response) =>{
    res.json({
        ok:true,
        mensaje: 'Todo bien con POST'
    });
});


export default router;