<?php

namespace App\Http\Controllers;

use App\Categories;
use App\Image;
use Illuminate\Http\Request;

class CategorieController extends Controller
{
    public function index(){
        $categories = Categories::all();
        return response()->json($categories);;
    }
    public function add(Request $request){
        //dd($request->all());
        /** Save categorie */
        $categorie = new Categories();
        $categorie->nom = $request->name;
        $categorie->parent_id = $request->parent_id;
        $categorie->save();
        /** Save image */
        $image = new Image();
        if($request->file){
            $image->url = $request->file;
    
            $categorie->images()->save($image);
            $image->save();
        }
            
        
        return response()->json('done');

      
    }
    public function destroy($id){
        $categorie = Categories::find($id);
        $categorie->destroy();
        return response('done');
    }
}
