<?php

namespace App\Http\Controllers;

use App\Categories;
use Illuminate\Http\Request;
use Symfony\Component\Console\Input\Input;

class CategorieController extends Controller
{
    public function index(){
        $categories = Categories::all();
        return response()->json($categories);;
    }
    public function add(Request $request){
        
        $name=json_decode($request->name);
        $categorie = new Categories();
         $categorie->nom = $request->name;
        $categorie->save();
        return response()->json('done ');
      
    }
    public function destroy($id){
        $categorie = Categories::find($id);
        $categorie->destroy();
        return response('done');
    }
}
