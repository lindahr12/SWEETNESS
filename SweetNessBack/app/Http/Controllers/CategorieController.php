<?php

namespace App\Http\Controllers;

use App\Categories;
use Illuminate\Http\Request;

class CategorieController extends Controller
{
    public function index(){
        $categories = Categories::all();
        return response()->json(['status' => 'Hooray']);;
    }
    public function add(Request $request){
        $bodys=json_decode($request->body);
        
        //$name=json_decode($request->name);
        // $categorie = new Categories();
        // $categorie->nom = $request->name;
        // $categorie->save();
        // return response()->json(['name' => 'cat']);
    }
    public function destroy($id){
        $categorie = Categories::find($id);
        $categorie->destroy();
        return response('done');
    }
}
