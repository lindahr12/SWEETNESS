<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Commande extends Model
{
    protected $table='commandes';
    protected $fillable=[
        'comd_number','status','produits_id','prix_total','quantite_total','date_livraison'
    ];
}
