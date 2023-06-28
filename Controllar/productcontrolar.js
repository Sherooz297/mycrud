const Product = require("../Model/productModal")


//Creating the new product..

exports.createproduct = async(req,res,next) =>{
try {
    const  {
        name,
        description,
        price
    } = req.body

    const product = await Product.create({
        name,
        description,
        price
    })
    res.status(200).json({
        success : true,
        product

    })
    
} catch (error) {
    res.status(400).json({
        success:false,
        message:error.message
    }) 
}

}