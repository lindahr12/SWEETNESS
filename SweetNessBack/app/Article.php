<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    
    protected $table='articles';
    protected $fillable=[
        'title','description','quantite','prix_courrant','prix_ancient','image_id','user_id'
    ];
    public function images()
    {
        return $this->morphMany(Image::class, 'owner');
    }
}
