import { Items } from "../model/Items.js"

// render add item page
export const addItemPage=async(req,res)=>{
    res.render('addPage')
}

// render edit item page
export const editItemPage=async(req,res)=>{
    const item=await Items.findById(req.params.id)
    res.render('editPage',{item})
}
//*-*-*-*-*-*-*-*-*-*---*-*-*-*-*-*-*

// get All Items
export const getAllItems=async(req,res)=>{
    const items=await Items.find()
    res.render('index',{items})
}

//Get one Item By Id
export const getOneItem=async(req,res)=>{
    const item=await Items.findById(req.params.id)
    res.send(item)
}

// add new item
export const addItem=async(req,res)=>{
    const {name,price,quantity}=req.body
    const newItems=new Items({name,price,quantity})
    await newItems.save()
    res.redirect("/")
    // res.redirect("/api/items")
}

// update item by id
export const updateItem=async(req,res)=>{
    const {name,price,quantity}=req.body
    await Items.findByIdAndUpdate(req.params.id,{name,price,quantity})
    res.redirect('/')
    // res.redirect("/api/items")    
}

// delete item by id
export const deleteItem=async(req,res)=>{
    await Items.findByIdAndDelete(req.params.id)
    res.redirect("/")
    // res.redirect("/api/itmes")
    
}