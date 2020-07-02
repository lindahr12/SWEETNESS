<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Marque extends Model
{
    protected $table='marque';
    protected $fillable=[
        'nom','ref','produits_id'
    ];
    public function images()
    {
        return $this->morphMany(Image::class, 'owner');
    }
}
