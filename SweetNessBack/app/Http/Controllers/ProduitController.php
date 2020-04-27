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
        $articles = Article::orderBy('id', 'DESC');
        return response($articles);
    }
    public function store (Request $request){
       

        $produit = new Produit();
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
        if ($request->id_lot ){
            
            $lotexist = Lot::find($request->id_lot);
            $datalot [] = $produit->id;
            $lotexist->produits_id->concat(json_encode($datalot));
            $lotexist->save();

        }else{
            $lot = new Lot();
            $lot->date_expiration = $request->date_expiration;
            $lot->date_achat = $request->date_achat;
            $lot->quantite = $request->quantite;
            $lot->prix_vente_souhaiter = $request->prix_vente_souhaiter;
            $lot->note = $request->note;
            $lot->priorite_de_vente = $request->priorite_de_vente;
            $datalot [] = $produit->id;

            $lot->produits_id = json_encode($datalot);
            $lot->prix_achat = $request->prix_achat;
            $lot->save();
        }
        if($request->id_marque){
            $marqueExist = Marque::find($request->id_marque);
            $datamarque[] = $produit->id;
            $marqueExist->produits_id->concat(json_encode($datamarque));
            $marqueExist->save();
        }else{
            $marque = new Marque();
            $marque->nom = $request->nomMarque;
            $marque->ref = $request->ref;
            $datamarque[] = $produit->id;
            $marque->produits_id = json_encode($datamarque);
            $marque->save();

        }
        /** Save image */
        if($request->hasFile('image')){
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
        return response()->json('article saved');
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
        if ($request->id_lot == null){

            $lot = new Lot();
            $lot->date_expiration = $request->date_expiration;
            $lot->date_achat = $request->date_achat;
            $lot->quantite = $request->quantite;
            $lot->prix_vente_souhaiter = $request->prix_vente_souhaiter;
            $lot->note = $request->note;
            $lot->priorite_de_vente = $request->priorite_de_vente;
            $data [] = $article->id;

            $lot->produits_id = $data;
            $lot->date_achat = $request->date_achat;

        }else{
            $lotexist = Lot::find($request->id_lot);
            $data [] = $article->id;
            $lotexist->produits_id->concat($data);
        }
        if ($request->id_marque != null){
            $marqueExist = Marque::find($request->id_marque);
            $data [] = $article->id;
            $marqueExist->produits_id->concat($data);
        }else{
            $marque = new Marque();
            $marque->nom = $request->nom;
            $marque->ref = $request->ref;
            $data [] = $article->id;
            $marque->produits_id = $data;

        }
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

       
        return response()->json('article updated');

    }
    public function destroy($id){
        $article = Produit::find($id);
        $article->delete();
        return response('article deleted');

    }
}
