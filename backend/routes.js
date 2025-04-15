const express = require('express');
const router = express.Router();
const pool = require('./db');

router.get('/modules', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM modulos');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener los módulos:', error);
    res.status(500).json({ error: 'Error al obtener módulos' });
  }
});

module.exports = router;

