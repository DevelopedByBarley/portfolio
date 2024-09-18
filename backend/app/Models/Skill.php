<?php

namespace App\Models;


/*   $visitor = new Visitor();
  
      $is_admin_url = strpos($_SERVER['REQUEST_URI'], '/admin') !== false;
  
      if (defined('SAVING_VISITOR_PERM') && SAVING_VISITOR_PERM && !$is_admin_url) {
        $visitor->addVisitor();
      } */

use PDO;
use PDOException;
use Exception;

class Visitor extends Model
{


}
