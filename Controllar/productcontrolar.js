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


//GET the all products using GET request


exports.getproduct = async(req,res,next) => {

    try {
        const product =await Product.find()
        if(!product){
          return  res.status(404).json({error:"no product found"})
        }
    
        res.status(200).json({
            success:true,
            product
        })
        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        }) 
    }

}


// DELETE the product using DELETE request

exports.deleteproduct = async(req,res,next) =>{

    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if(!product){
           return res.status(404).json({error:"not found"})
        }
    
        res.status(200).json({
            success:true,
            message:"delete done",
            
        })
    
        
    } catch (error) {
        res.status(404).json({error:"internal server error"})
        
    }

 

}
 
