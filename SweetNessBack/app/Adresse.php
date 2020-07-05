<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Adresse extends Model
{
    protected $table='adresse';
    protected $fillable=[
        'user_id','rue','region','code_postale'
    ];
    
}
