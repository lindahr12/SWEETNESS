<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $table='images';
    protected $fillable=[
        'url'
    ];
    public function article(){
        return $this->hasMany(Article::class);
    }
}
