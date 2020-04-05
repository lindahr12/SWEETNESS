<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    protected $table='categories';
    protected $fillable=[
        'nom','parent_id'
    ];
    public function images()
    {   
        return $this->morphMany(Image::class, 'owner');
    }
    public function children()
    {
      return $this->hasMany('App\Categories', 'parent_id');
    }
}
