<?php

namespace App\Http\Controllers;

use App\Marque;
use App\Image;

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
        $marque = Marque::orderBy('id','DESC')
        ->with('images')
        ->get();
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
        $datamark =json_decode($marque->produits_id);
        //return response( $datalot);
        $Newdatamark =collect([$request->produit_id]);
        $Mergemarq = $Newdatamark->merge($datamark);
        $marque->produits_id = json_encode($Mergemarq);
        $marque->save();
        if($request->hasFile('image')){
            $image = new Image();
            $file      = $request->file('image');
            $filename  = $file->getClientOriginalName();
            $picture   = date('His').'-'.$filename;
            $file->move(public_path('img_Marque'), $picture);
            $image->url = $picture;
            $marque->images()->save($image);
            $image->save();
        }
        return response()->json('done');

        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $marque = Marque::find($id);
        return response()->json($marque);
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
        $datamark =json_decode($marque->produits_id);
        //return response( $datalot);
        $Newdatamark =collect([$request->produit_id]);
        $Mergemarq = $Newdatamark->merge($datamark);
        $marque->produits_id = json_encode($Mergemarq);
        $marque->save();
        if($request->hasFile('image')){
            $imageold = Image::where('owner_id',$id)->first()->delete();

            $image = new Image();
            $file      = $request->file('image');
            $filename  = $file->getClientOriginalName();
            $picture   = date('His').'-'.$filename;
            $file->move(public_path('img_Marque'), $picture);
            $image->url = $picture;
            $marque->images()->save($image);
            $image->save();
        }
        return response()->json('updated');
    }
    /**Search */
    public function search($id)
    {
          $Marque = Marque::with('images')->where('id',$id)
          ->get();
         return response()->json($Marque);

    }
    public function searchnom(Request $request){     ///search with nom of categorie
        $Marque = Marque::with('images')->where('nom','LIKE',"%{$request->nom}%")->get();
        return response()->json($Marque);
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
        $image = Image::where('owner_id',$id)->first()->delete();
        $Marque->delete();
        return response()->json('done');
    }
}
