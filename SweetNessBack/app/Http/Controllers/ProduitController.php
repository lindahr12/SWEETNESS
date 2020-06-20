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
        $Produit = Produit::orderBy('id', 'DESC')->get();
        return response($Produit);
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
            $datalot =collect([$lotexist->produits_id,$produit->id]);
            $lotexist->produits_id = json_encode($datalot);
            $lotexist->save();

        }else{
            $lot = new Lot();
            $lot->date_expiration = $request->date_expiration;
            $lot->date_achat = $request->date_achat;
            $lot->quantite = $request->quantite;
            $lot->prix_vente_souhaiter = $request->prix_vente_souhaiter;
            $lot->note = $request->note;
            $lot->priorite_de_vente = $request->priorite_de_vente;
            $datalot =collect([]);
            $datalot->push( $produit->id);

            $lot->produits_id = json_encode($datalot);
            $lot->prix_achat = $request->prix_achat;
            $lot->save();
        }
        if($request->id_marque){
            $marqueExist = Marque::find($request->id_marque);
            $datamarque = collect([$marqueExist->produits_id,$request->produit_id]);
            $marqueExist->produits_id = json_encode($datamarque);
            $marqueExist->save();
        }else{
            $marque = new Marque();
            $marque->nom = $request->nomMarque;
            $marque->ref = $request->ref;
            $datamark = collect([]) ;
            $datamark->push($request->produit_id);
            $marque->produits_id = json_encode($datamark);
            $marque->save();


        }
        /** Save image */
        if($request->hasFile('image')){
            $dataimage = collect([]);
            foreach($request->file('image') as $img)
            {

            $filename  = $img->getClientOriginalName();
            $picture   = date('His').'-'.$filename;
            $img->move(public_path('img_article'), $picture);
            $dataimage->push($filename);

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
        if ($request->id_lot ){

            $lotexist = Lot::find($request->id_lot);
            $datalot =collect([]);
            $datalot->push( $produit->id);
            $lotexist->produits_id =json_encode($datalot);
            $lotexist->save();

        }else{
            $lot = new Lot();
            $lot->date_expiration = $request->date_expiration;
            $lot->date_achat = $request->date_achat;
            $lot->quantite = $request->quantite;
            $lot->prix_vente_souhaiter = $request->prix_vente_souhaiter;
            $lot->note = $request->note;
            $lot->priorite_de_vente = $request->priorite_de_vente;
            $datalot =collect([]);
            $datalot->push( $produit->id);

            $lot->produits_id = json_encode($datalot);
            $lot->prix_achat = $request->prix_achat;
            $lot->save();
        }
        if($request->id_marque){
            $marqueExist = Marque::find($request->id_marque);
            $datamarque = collect([]);
            $datamarque->push($request->produit_id);
            $marqueExist->produits_id = json_encode($datamarque);
            $marqueExist->save();
        }else{
            $marque = new Marque();
            $marque->nom = $request->nomMarque;
            $marque->ref = $request->ref;
            $datamark = collect([]) ;
            $datamark->push($request->produit_id);
            $marque->produits_id = json_encode($datamark);
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


        return response()->json('article updated');

    }
    public function destroy($id){
        $article = Produit::find($id);
        $article->delete();
        return response('article deleted');

    }
}
