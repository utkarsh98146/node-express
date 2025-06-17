const blogDetails = []


export const homePage = (req, res, next) => {
    console.log("Home page trigered..")
    res.render("index")
}

export const postBlog = (req, res, next) => {
    blogDetails.push({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    })
    res.status(201).json({
        message: "Blog created successfully.",
        blog: blogDetails
    })

}
export const blogPage = (req, res, next) => {
    console.log("Blog page trigered..")
    res.render("blog")
}

export const viewPage = (req, res, next) => {
    console.log("Views page trigered..")
    res.render("views")
}

export const contactPage = (req, res, next) => {
    console.log("Contact Us page trigered..")
    res.render("contact")
}