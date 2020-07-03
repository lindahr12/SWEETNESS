<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Produit extends Model
{
    
    protected $table='produits';
    protected $fillable=[
        'nom','description','note','nbr_noted','is_active','fournisseur_id','reference'
    ];
    public function images()
    {
        return $this->morphMany(Image::class, 'owner');
    }

    public function lot(){
        return $this->belongsTo(lot::class,'id');
    }
    
    public function fournisseur(){
        return $this->belongsTo(Fournisseur::class);
    }
}
