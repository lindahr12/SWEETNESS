<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lot extends Model
{
    protected $table='lot';
    protected $fillable=[
        'date_expiration','date_achat','quantite','prix_achat','prix_vente_souhaiter','is_active','priorite_de_vente','produits_id'
    ];
    public function produits(){
        return $this->hasOne(Produit::class);
    }
}
