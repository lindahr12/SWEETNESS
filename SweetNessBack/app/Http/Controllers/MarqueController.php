<?php

namespace App\Http\Controllers;

use App\Marque;
use Illuminate\Http\Request;

class MarqueController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $marque = Marque::all();
        return response()->json($marque);
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
        $marque = new Marque();
        $marque->nom = $request->nomMarque;
        $marque->ref = $request->ref;
        $datamark = collect([]) ;
        $datamark->push($request->produit_id);
        $marque->produits_id = json_encode($datamark);
        $marque->save();
        return response('done');

        
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
        $marque = Marque::find($id);
        $marque->nom = $request->nomMarque;
        $marque->ref = $request->ref;
        $datamarque[] = $request->produit_id;
        $marque->produits_id = json_encode($datamarque);
        $marque->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $Marque = Marque::find($id);
        $Marque->delete();
        return response('done');
    }
}
