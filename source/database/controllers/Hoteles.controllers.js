const Hoteles = require("../model/Hoteles");

// Obtener todos los hoteles
exports.obtenerHoteles = async (req, res) => {
  try {
    const hoteles = await Hoteles.find();
    res.json(hoteles);
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al obtener los hoteles" });
  }
};

// Obtener un hotel por su ID
exports.obtenerHotelPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const hotel = await Hoteles.findById(id);
    if (hotel) {
      res.json(hotel);
    } else {
      res.status(404).json({ mensaje: "No se encontró el hotel" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al obtener el departamento" });
  }
};

// Crear un nuevo hotel
exports.crearHotel = async (req, res) => {
  const { nombre, descripcion, precio } = req.body;
  try {
    const hotel = await Hoteles.create({ nombre, descripcion, precio});
    res.status(201).json(hotel);
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al crear el departamento" });
  }
};

// Actualizar un hotel existente
exports.actualizarHotel = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;
  try {
    const hotel = await Hoteles.findByIdAndUpdate(
      id,
      { nombre, descripcion },
      { new: true }
    );
    if (hotel) {
      res.json(hotel);
    } else {
      res.status(404).json({ mensaje: "No se encontró el hotel" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al actualizar el hotel" });
  }
};

// Eliminar un hotel existente
exports.eliminarHotel = async (req, res) => {
  const { id } = req.params;
  try {
    const hotel = await Hoteles.findByIdAndDelete(id);
    if (hotel) {
      res.json({ mensaje: "Hotel eliminado correctamente" });
    } else {
      res.status(404).json({ mensaje: "No se encontró el hotel" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al eliminar el hotel" });
  }
};