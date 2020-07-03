<?php

namespace App\Http\Controllers;

use App\Lot;
use App\User;

use Illuminate\Http\Request;
class LotController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $lots = Lot::orderBy('id', 'DESC')
        ->with('produits')
        ->get();
        return response()->json($lots);
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
            $lot = new Lot();
            $lot->date_expiration = $request->date_expiration;
            $lot->date_achat = $request->date_achat;
            $lot->quantite = $request->quantite;
            $lot->prix_vente_souhaiter = $request->prix_vente_souhaiter;
            $lot->priorite_de_vente = $request->priorite_de_vente;
            $lot->produits_id = $request->produit_id;
            $lot->prix_achat = $request->prix_achat;
            $lot->is_active = '0';

            $lot->save();
            return response()->json('saved');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $lot = Lot::find($id)
        ->with('produits')
        ->get();
        return response()->json($lot);

    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $lot = Lot::find($id);
        return ($request->all());
        $lot->date_expiration = $request->date_expiration;
        $lot->date_achat = $request->date_achat;
        $lot->quantite = $request->quantite;
        $lot->prix_vente_souhaiter = $request->prix_vente_souhaiter;
        $lot->priorite_de_vente = $request->priorite_de_vente;
        $lot->produits_id = $request->produit_id;
        $lot->prix_achat = $request->prix_achat;
        $lot->is_active = '0';
        $lot->save();
        return response()->json('lot updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $lot = Lot::find($id);
        $lot->delete();
        return response()->json('done');
    }
    public function search($id)
    {

        $Lot = Lot::with('produits')->where('id',$id)->get();
        return response()->json($Lot);




    }


}
