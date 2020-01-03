const Doc = require('../models/Doc')

//@desc Get all docs
//@route GET /api/v1/docs
//@access public

exports.getDocs = async (req, res, next) => {
  try {
    const docs = await Doc.find()
    res.status(200).json({
      success: true,
      count: docs.length,
      data: docs
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: 'Server error'
    })
  }
  next()
}

//@desc add Doc
//@route POSt /api/v1/docs
//@access public

exports.addDoc = async (req, res, next) => {


  try {

    const doc = await Doc.create(req.body)
    return res.status(200).json({
      success: true,
      data: doc
    })
  } catch (error) {
    console.log(error);
    if ((error.code = 11000)) {
      return res.status(400).json({
        error: 'Sklep o tym ID już istnieje'
      });
    }
    return res.status(500).json({
      error: 'Server error'
    });
  }
};