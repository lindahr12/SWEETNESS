<?php

namespace App\Http\Controllers;

use App\Produit;
use App\Image;
use App\Lot;
use App\Marque;
use Illuminate\Http\Request;

class ProduitController extends Controller
{
    public function index(){
        $Produit = Produit::orderBy('id', 'DESC')
        ->with('images')
        ->get();
        return response()->json($Produit);
    }
    public function store (Request $request){
        $produit = new Produit();
        $produit->nom = $request->nomproduit;
        $produit->description = $request->description;
        $produit->reference = $request->reference;
        $produit->note = $request->note;
        $produit->nbr_noted = $request->nbr_noted;
        $produit->is_active = $request->is_active;
        $produit->fournisseur_id = $request->fournisseur_id;
        $produit->save();
        /** Save image */
        if($request->hasFile('image')){
            for ($i=0; $i < 5; $i++) { 
                $imageold = Image::where('owner_id',$id)->first()->delete();
            }

            $dataimage = collect([]);
            foreach($request->file('image') as $img)
            {
            $filename  = $img->getClientOriginalName();
            $picture   = date('His').'-'.$filename;
            $img->move(public_path('img_article'), $picture);

            $dataimage[] = $picture;

            }
            $image = new Image();
            $image->url = json_encode($dataimage);
            $produit->images()->save($image);
            $image->save();

        }


        return response()->json('article saved');
    }

    public function edit($id){
        $article = Produit::find($id);
        return response()->json($article);
    }
    public function update(Request $request,$id){
        $produit = Produit::find($id);
        $produit->nom = $request->nomproduit;
        $produit->limite_stock_alert = $request->limite_stock_alert;
        $produit->total_stock = $request->total_stock;
        $produit->note = $request->note;
        $produit->description = $request->description;
        $produit->nbr_noted = $request->nbr_noted;
        $produit->tva = $request->tva;
        $produit->prix_ht = $request->prix_ht;
        $produit->prix_ttc = $request->prix_ttc;
        $produit->marge = $request->marge;
        $produit->reduction = $request->reduction;
        $produit->save();
        /**delete image */

        /** Save image */
        if($request->hasFile('image')){
            $image = Image::where('owner_id',$id)->first()->delete();

            foreach($request->file('image') as $img)
            {
            $filename  = $img->getClientOriginalName();
            $picture   = date('His').'-'.$filename;
            $img->move(public_path('img_article'), $picture);
            $dataimage[] =$filename;

            }

        }

        $image = new Image();
        $image->url = json_encode($dataimage);
        $produit->images()->save($image);
        $image->save();


        return response()->json('article updated');

    }
    public function destroy($id){
        $article = Produit::find($id);
        $image = Image::where('owner_id',$id)->first()->delete();
        $article->delete();
        return response()->json('article deleted');

    }
    public function search($id)
    {
          $Produit = Produit::with('images')->where('id',$id)
          ->get();
         return response()->json($Produit);

    }
    public function search_nom(Request $request){     ///search with nom of categorie
        $Produit = Produit::with('images')->where('nom','LIKE',"%{$request->nom}%")->get();
        return response()->json($Produit);
    }

}
