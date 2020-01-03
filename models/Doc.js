const mongoose = require('mongoose')

const DocSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Pole Tytuł jest wymagane'],
    trim: true
  },
  // shortTitle: {
  //   type: String,
  //   required: [true, 'Pole Krótki Tytuł jestr wymagane'],
  //   trim: true
  // },
  // publishDate: {
  //   type: String,
  //   required: [true, 'Pole Data Publikacji jest wymagane'],
  //   trim: true
  // },
  // ver: {
  //   type: String,
  //   required: [true, 'Pole Wersja jest wymagane'],
  //   trim: true
  // },
  // pagesCount: {
  //   type: Number,
  //   required: [true, 'Pole Liczba Stron jest wymagane'],
  // },
  // prevVer: {
  //   type: Number,
  //   required: [true, 'Pole poprzednia wersja jest wymagane'],
  // },
  // premiereTag: {
  //   type: Boolean,
  //   default: false
  // },
  createdAt: {
    type: Date,
    default: Date.now
  }
})


module.exports = mongoose.model('doc', DocSchema)