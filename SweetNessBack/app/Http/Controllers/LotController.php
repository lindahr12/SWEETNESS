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
        $lots = Lot::all();
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
            $datalot = collect([]);

            $datalot->push($request->produit_id);

            $lot->produits_id = json_encode($datalot);
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
        //
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
        $lot->priorite_de_vente = $request->priorite_de_vente;
        $datalot = collect([]);

        $datalot->push($request->produit_id);

        $lot->produits_id = json_encode($datalot);
        $lot->prix_achat = $request->prix_achat;
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
