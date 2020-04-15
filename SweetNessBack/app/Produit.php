<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Produit extends Model
{
    
    protected $table='produits';
    protected $fillable=[
        'title','description','quantite','prix_courrant','prix_ancient','image_id','user_id'
    ];
    public function images()
    {
        return $this->morphMany(Image::class, 'owner');
    }
}
