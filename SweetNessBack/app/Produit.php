<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Produit extends Model
{
    
    protected $table='produits';
    protected $fillable=[
        'title','description','limite_stock_alert','total_stock','note','nbr_noted','tva','prix_ht','prix_ttc','marge','is_active','reduction'
    ];
    public function images()
    {
        return $this->morphMany(Image::class, 'owner');
    }

    public function lot(){
        return $this->belongsTo(lot::class);
    }
    public function fournisseur(){
        return $this->belongsTo(Fournisseur::class);
    }
}
