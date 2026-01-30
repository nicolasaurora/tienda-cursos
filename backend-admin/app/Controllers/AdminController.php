<?php

namespace App\Controllers;

use App\Models\CompraModel;

class AdminController extends BaseController
{
    public function comprasResumen()
    {

        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');

        $model = new CompraModel();
        return $this->response->setJSON(
            $model->resumenComprasPorCurso()
        );
    }
}
