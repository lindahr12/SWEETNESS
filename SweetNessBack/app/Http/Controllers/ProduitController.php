<?php

namespace App\Http\Controllers;

use App\Article;
use App\Image;
use Illuminate\Http\Request;

class ProduitController extends Controller
{
    public function index(){
        $articles = Article::orderBy('id', 'DESC');
        return response($articles);
    }
    public function store (Request $request){
        $article = new Produit();
        $article->nom = $request->nom;
        $article->limite_stock_alert = $request->limite_stock_alert;
        $article->total_stock = $request->total_stock;
        $article->note = $request->note;
        $article->description = $request->description;
        $article->nbr_noted = $request->nbr_noted;
        $article->tva = $request->tva;
        $article->prix_ht = $request->prix_ht;
        $article->prix_ttc = $request->prix_ttc;
        $article->marge = $request->marge;
        $article->reduction = $request->reduction;
        $article->marque_id = $request->marque_id;
        if($request->hasfile('image')){
            $image= new Image();
            $file = $request->file('image');
            $exten = $file->getClientOriginalExtension();
            $name = time().'.'.$exten;
            $file->move('images_articles',$name);
            $image->url = $name;
            $image->save();

        }
        $article->save();
        return response('article saved');
    }
    public function edit($id){
        $article = Produit::find($id);
        return response($article);
    }
    public function update(Request $request,$id){
        $article = Produit::find($id);

        $article->nom = $request->nom;
        $article->limite_stock_alert = $request->limite_stock_alert;
        $article->total_stock = $request->total_stock;
        $article->note = $request->note;
        $article->description = $request->description;
        $article->nbr_noted = $request->nbr_noted;
        $article->tva = $request->tva;
        $article->prix_ht = $request->prix_ht;
        $article->prix_ttc = $request->prix_ttc;
        $article->marge = $request->marge;
        $article->reduction = $request->reduction;
        $article->marque_id = $request->marque_id;
        $article->save();
        /** Save image */
        if($request->hasFile('image')){
            foreach($request->file('image') as $img)
            {

            $filename  = $img->getClientOriginalName();
            $picture   = date('His').'-'.$filename;
            $img->move(public_path('img_article'), $picture);
            $data[] =$filename;

            }

        }
        
        $image = new Image();
        $image->url = json_encode($data);
        $article->images()->save($image);
        $image->save();
        return response()->json('done');

    }
    public function destroy($id){
        $article = Produit::find($id);
        $article->delete();
        return response('article deleted');

    }
}
