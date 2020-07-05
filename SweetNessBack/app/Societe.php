<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Societe extends Model
{
    protected $table='societe';
    protected $fillable=[
        'raison_sociale','description','email','statue','matriculation_fiscal'
    ];
    
}
