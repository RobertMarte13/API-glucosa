import { Router } from "express"
import pool from "../db.js"

const router = Router();



// Esta ruta devuelve toda la informacion
router.get("/", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM glucosa");
  res.json(rows)
});

// Esta Es lo mismo que la re arriba solo que funciona para mostrar cuando acceda a esta ruta
router.get("/register", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM glucosa");
  res.json(rows)
});

// Este me muestra una informacion concreta
router.get("/register/:id", async (req, res) => {
  const id = req.params.id;
  const [rows] = await pool.query("SELECT * FROM glucosa WHERE id = ?", [id]);
  res.json(rows)
});

// Esta crea una informacion de la glucosa
router.post("/register", async (req, res) => {
  const { fecha, nivelazucar1, medicamento1, nivelazucar2, medicamento2 } =
    req.body;

  console.log(fecha, nivelazucar1, medicamento1, nivelazucar2, medicamento2);

  const [rows] = await pool.query(
    "INSERT INTO glucosa(fecha, nivelazucar1, medicamento1, nivelazucar2, medicamento2) VALUES (?, ?, ?, ?, ?)",
    [fecha, nivelazucar1, medicamento1, nivelazucar2, medicamento2]
  );

  res.status(204)
});

// Esta puede modificar campos
router.patch("/register/:id", async (req, res) => {
  const { id } = req.params;
  const { fecha, nivelazucar1, medicamento1, nivelazucar2, medicamento2 } =
    req.body;

  const [rows] = await pool.query(
    "UPDATE glucosa SET fecha = IFNULL(?, fecha), nivelazucar1 = IFNULL(?, nivelazucar1), medicamento1 = IFNULL(?, medicamento1), nivelazucar2 = IFNULL(?, nivelazucar2), medicamento2 = IFNULL(?, medicamento2) WHERE id = ?",
    [fecha, nivelazucar1, medicamento1, nivelazucar2, medicamento2, id]
  );
  res.status(204)
});

// Esta elimina campos
router.delete("/register/:id", async (req, res) => {
  const [rows] = await pool.query("DELETE FROM glucosa WHERE id = ?", [
    req.params.id,
  ]);

  if (rows.affectedRows === 0) {
    res.status(404).redirect("/register");
  }
});

export default router;
