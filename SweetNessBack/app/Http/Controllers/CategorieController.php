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
}
