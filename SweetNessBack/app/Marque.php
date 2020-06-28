<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Marque extends Model
{
    protected $table='marque';
    protected $fillable=[
        'nom','ref'
    ];
    public function images()
    {
        return $this->morphMany(Image::class, 'owner');
    }
}
