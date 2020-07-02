<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fournisseur extends Model
{

    protected $table='fournisseur';
    protected $fillable=[
        'nom','description','rue','region','num_tel','num_fax','email','is_active','matricule_fiscale'
    ];
   
}
