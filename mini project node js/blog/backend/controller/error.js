
export const errorPage=(req,res,next)=>{
    res.status(404).render('404',{pageTitle:'Page not found'})
}