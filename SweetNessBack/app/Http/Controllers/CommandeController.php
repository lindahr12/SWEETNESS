<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Commande;

class CommandeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $commande = Commande::all();
        return response()->json($commande);
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
        $Commandes = new Commande();
        $Commandes->comd_number= 'ORD-'.strtoupper(uniqid());
        $Commandes->user_id = $request->user_id;
        $Commandes->prix_total = $request->prix_total;
        $Commandes->quantite_total = $request->quantite_total;
        $Commandes->city = $request->city;
        $Commandes->telephone = $request->telephone;
        $Commandes->save();

        foreach($posts as $post){
            $compost = Cart::find($post->cart_id);
            $compost->order_id = $Commandes->id;
            $compost->save();
        }
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
