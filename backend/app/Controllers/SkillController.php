<?php

namespace App\Controllers;

use App\Models\Feedback;
use Exception;
use PDO;

class SkillController extends Controller
{

    public function __construct()
    {
        parent::__construct();
    }


    public function index()
    {
        echo json_encode(
            ['skills' => $this->Model->all('skills')]
        );
    }
}
