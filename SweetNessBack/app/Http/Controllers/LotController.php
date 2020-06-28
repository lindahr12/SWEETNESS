<?php

namespace App\Http\Controllers;

use App\Lot;
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
        $lots = Lot::orderBy('id','DESC')
        ->with('produits')
        ->get();
        return response()->json($lots);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
            $lot->note = $request->note;
            $lot->priorite_de_vente = $request->priorite_de_vente;
            $lot->produits_id = $request->produit_id;
            $lot->prix_achat = $request->prix_achat;
            $lot->save();
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
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        $lot->date_expiration = $request->date_expiration;
        $lot->date_achat = $request->date_achat;
        $lot->quantite = $request->quantite;
        $lot->prix_vente_souhaiter = $request->prix_vente_souhaiter;
        $lot->note = $request->note;
        $lot->is_active = $request->is_active;
        $lot->prix_achat = $request->prix_achat;
        $lot->priorite_de_vente = $request->priorite_de_vente;
        $lot->produits_id = $request->produit_id;
        $lot->save();
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
        return response('done');
    }
}
