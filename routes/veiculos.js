import express from "express"
import { getVeiculos, editVeiculo, getVeiculo } from "../controllers/veiculos.js"

const router = express.Router()

router.get("/", getVeiculos)

router.get("/:id", getVeiculo)

router.put("/:id", editVeiculo)

export default router