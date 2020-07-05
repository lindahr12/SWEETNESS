<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pannier extends Model
{
    protected $table='panniers';
    protected $fillable=[
        'user_id','quantite','produits_id','commande_id'
    ];
    
}
