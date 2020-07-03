<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Fournisseur;
class FournisseurController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $fournisseurs  = Fournisseur::orderBy('id','DESC')->get();
        return response()->json($fournisseurs);
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
        $fournisseur = new Fournisseur();
        $fournisseur->nom = $request->nom;
        $fournisseur->description = $request->description;
        $fournisseur->rue = $request->rue;
        $fournisseur->region = $request->region;
        $fournisseur->num_tel = $request->num_tel;
        $fournisseur->num_fax = $request->num_fax;
        $fournisseur->email = $request->email;
        $fournisseur->is_active = $request->is_active;
        $fournisseur->matricule_fiscale = $request->matricule_fiscale;
        $fournisseur->save();
        return response()->json('Fournisseur stored');


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $fournisseur = Fournisseur::find($id);
        return response()->json($fournisseur);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $fournisseur = Fournisseur::find($id);
        return response()->json($fournisseur);
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
        $fournisseur = Fournisseur::find($id);
        $fournisseur->nom = $request->nom;
        $fournisseur->description = $request->description;
        $fournisseur->rue = $request->rue;
        $fournisseur->region = $request->region;
        $fournisseur->num_tel = $request->num_tel;
        $fournisseur->num_fax = $request->num_fax;
        $fournisseur->email = $request->email;
        $fournisseur->is_active = $request->is_active;
        $fournisseur->matricule_fiscale = $request->matricule_fiscale;
        $fournisseur->save();
        return response()->json('Fournisseur updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $fournisseur = Fournisseur::find($id);
        $fournisseur->delete();
        return response()->json('deleted');
    }
}
