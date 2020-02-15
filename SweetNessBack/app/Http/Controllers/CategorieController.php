<?php

namespace App\Http\Controllers;

use App\Categories;
use Illuminate\Http\Request;

class CategorieController extends Controller
{
    public function index(){
        $categories = Categories::all();
        return response($categories);
    }
    public function add(Request $request){
        $categorie = new Categories();
        $categorie->name = $request->input('name');
    }
    public function destroy($id){
        $categorie = Categories::find($id);
        $categorie->destroy();
        return response('done');
    }
}
