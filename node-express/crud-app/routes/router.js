import { Items } from "../model/Items.js"
import express from 'express'

import { addItem, addItemPage, deleteItem, editItemPage, getAllItems, getOneItem, updateItem } from "../controller/itemController.js"

export const router=express()

//*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-
// add item page render
router.get('/add',addItemPage)

// edit page render
router.get("/edit/:id",editItemPage)
//*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-

// get all items
router.get('/',getAllItems)

// find by item by id
router.get('/:id',getOneItem)


// add new item
router.post("/add",addItem)

// update item by id
router.post("/update/:id",updateItem)

// delete item by id
router.post("/delete/:id",deleteItem)