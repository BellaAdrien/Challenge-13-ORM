const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/',async (req, res) => {
  try{
const categoryData=await Category.findAll({
  include:[{model: Product}]
})
res.status(200).json(categoryData)
  }
  catch(err){
    res.status(500).json(err)
  }
  
});

router.get('/:id',async (req, res) => {
  try{
    const id=req.params.id
    const categoryData=await Category.findByPk(id,{
      include:[{model: Product}]
    })
    res.status(200).json(categoryData)
      }
      catch(err){
        res.status(500).json(err)
      }
      
  
});

router.post('/',async (req, res) => {
  try{
    const categoryData=await Category.create(red.body)
    res.status(200).json(categoryData)
      }
      catch(err){
        res.status(500).json(err)
      }
});

router.put('/:id',async (req, res) => {
  try{
    const categoryData=await Category.update(red.body,{
      where:{
        id:req.params.id
      }
    })
    res.status(200).json(categoryData)
      }
      catch(err){
        res.status(500).json(err)
      }
});

router.delete('/:id',async (req, res) => {
  try{
    const categoryData=await Category.destroy({
      where:{
        id:req.params.id
      }
    })
    res.status(200).json(categoryData)
      }
      catch(err){
        res.status(500).json(err)
      }
});

module.exports = router;
