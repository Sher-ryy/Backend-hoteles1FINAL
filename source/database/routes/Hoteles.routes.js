const express = require("express");
const router = express.Router();
const hotelesController = require("../controllers/Hoteles.controllers");

router.post("/", hotelesController.crearHotel);
router.get("/", hotelesController.obtenerHoteles);
router.get("/:id", hotelesController.obtenerHotelPorId);
router.put("/:id", hotelesController.actualizarHotel);
router.delete("/:id", hotelesController.eliminarHotel);

module.exports = router;
