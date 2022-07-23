const express = require("express");

const router = express.Router();

const controller = require("../controllers/profissionaisController");

router.get("/all",  controller.getAll);

router.get("/cidade",  controller.getByCity);

router.get("/especialidade",  controller.getBySpecialty);

router.post("/create", controller.createProfessional);

router.put("/update/:id", controller.updateProfessional);

router.delete("/delete/:id", controller.deleteProfessional)

module.exports = router;