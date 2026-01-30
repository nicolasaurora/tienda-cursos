<?php

namespace App\Models;

use CodeIgniter\Model;

class CompraModel extends Model
{
    protected $table = 'compras';
    protected $primaryKey = 'id';

    public function resumenComprasPorCurso()
    {
    
    return $this->db->table('compras')
        ->select('cursos.nombre, COUNT(compras.id) as cantidad')
        ->join('cursos', 'cursos.id = compras.curso_id')
        ->groupBy('compras.curso_id, cursos.nombre')
        ->get()
        ->getResultArray();
    }
}
