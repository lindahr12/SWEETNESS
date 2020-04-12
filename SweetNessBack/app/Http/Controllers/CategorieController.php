<?php

namespace App\Http\Controllers;

use App\Categories;
use App\Image;
use Illuminate\Http\Request;

class CategorieController extends Controller
{
    public function index(){
        $categories = Categories::orderBy('id', 'DESC')
        ->with('images')
        ->get();
        return response()->json($categories);;
    }
    public function add(Request $request){
        //dd($request->all());
        /** Save categorie */
        $categorie = new Categories();
        $categorie->nom = $request->nom;
        $categorie->parent_id = $request->parent_id;
        $categorie->save();
        /** Save image */

        if($request->hasFile('image')){
            $image = new Image();
            $file      = $request->file('image');
            $filename  = $file->getClientOriginalName();
            $extension = $file->getClientOriginalExtension();
            $picture   = date('His').'-'.$filename;
            $file->move(public_path('img_categorie'), $picture);
            $image->url = $picture;
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
