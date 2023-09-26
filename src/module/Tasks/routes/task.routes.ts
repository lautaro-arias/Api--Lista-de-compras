import  {Router} from 'express';
import  {create,newTasks,listing,deliting,editingList} from '../controller/list.controller'


const router = Router();

router.get('/create',create)
router.post('/newTasks',newTasks)
router.get('/listing',listing)
router.delete('/delete/:id',deliting) 
//router.get('/edit/',editing) 
router.post('/edit/:id',editingList)
 

export default router;