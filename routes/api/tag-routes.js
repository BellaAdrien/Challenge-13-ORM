const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/',async (req, res) => {
  try{
    const tagData=await Tag.findAll({
      include:[{model: ProductTag}]
    })
    res.status(200).json(tagData)
      }
      catch(err){
        res.status(500).json(err)
      }
});

router.get('/:id',async (req, res) => {
  try{
    const id=req.params.id
    const tagData=await Tag.findByPk(id,{
      include:[{model: ProductTag}]
    })
    res.status(200).json(tagData)
      }
      catch(err){
        res.status(500).json(err)
      }
      
});

router.post('/',async (req, res) => {
  try{
    const tagData=await Tag.create(red.body)
    res.status(200).json(tagData)
      }
      catch(err){
        res.status(500).json(err)
      }
});

router.put('/:id',async (req, res) => {
  try{
    const tagData=await Tag.update(red.body,{
      where:{
        id:req.params.id
      }
    })
    res.status(200).json(tagData)
      }
      catch(err){
        res.status(500).json(err)
      }
  
});

router.delete('/:id',async (req, res) => {
  try{
    const tagData=await Tag.destroy({
      where:{
        id:req.params.id
      }
    })
    res.status(200).json(tagData)
      }
      catch(err){
        res.status(500).json(err)
      }
});

module.exports = router;
