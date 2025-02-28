import { Router } from "express";
import { createUser, getAllUsers, getUser, removeUser, updateUser } from "../controllers/deporte.controller.js"

const router = Router()

router.get('/', getAllUsers)

router.get('/:uid', getUser)


router.post('/', createUser)

router.delete('/:uid', removeUser)

router.put('/:uid', updateUser)


export default router;