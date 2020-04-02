<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Relation;

Relation::morphMap([
    'categorie' => Categories::class ,
    'article' => Article::class,
]);

class Image extends Model
{
    protected $table='images';
    protected $fillable=[
        'url'
    ];
    public function owner()
    {
        return $this->morphTo();
    }
   
}
