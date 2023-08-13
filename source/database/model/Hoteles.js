const { Schema, model } = require("mongoose");

const hotelesSchema = new Schema({
  nombre: String,
  descripcion: {
    type: String,
    require: true,
  },
  precio: Number,
});

module.exports = model("Hoteles", hotelesSchema);