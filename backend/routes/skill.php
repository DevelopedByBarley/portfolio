<?php

use App\Controllers\SkillController;

// route_group -> /feedback


$r->addRoute('GET', '', [SkillController::class, 'index']);
