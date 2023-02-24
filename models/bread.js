const mongoose = require('mongoose')

const breadSchema = new mongoose.Schema({
  name:{
  type: String,
  required: true
  },
  hasGluten: {
    type: Boolean
  },
  image: {
    type: String,
    default: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
  baker: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Baker'
    
  }
})

breadSchema.methods.getBakedBy = function() {
  return `${this.name} was baked by with love by ${this.baker.name} who has been with us since ${this.baker.startDate.getFullYear()}`
}

module.exports = mongoose.model('Bread', breadSchema)