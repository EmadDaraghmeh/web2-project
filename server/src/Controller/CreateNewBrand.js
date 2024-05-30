const Brand=require('../Model/Brand')

const createBrand=async(req,res)=>{
  const{brandName,email, password, phoneNumber, country,city,categories,socialMedia,cover,postIds,offerIds}=req.body
  const brand=await new Brand({brandName,email, password, phoneNumber, country,city,categories,socialMedia,cover,postIds,offerIds}).save()
  if(brand){
    res.json(brand)
  }
}
const getBrand=async(req,res)=>{
  const {id}=req.params
  const brand=await Brand.findById(id).populate('postIds','offerIds')
  if(brand){
    res.json(brand)
  }
}

const getAllBrands=async(req,res)=>{
  const brand=await Brand.find({})
  if(brand){
    res.json(brand)
  }
}

module.exports={
  createBrand,
  getBrand,
  getAllBrands
}
