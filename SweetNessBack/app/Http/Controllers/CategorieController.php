<?php

namespace App\Http\Controllers;

use App\Categories;
use App\Image;
use Illuminate\Http\Request;

class CategorieController extends Controller
{
    public function index(){
        $categories = Categories::orderBy('id', 'DESC')
        ->with('images')
        ->get();
        return response()->json($categories);
    }
    public function store(Request $request){
        //dd($request->all());
        /** Save categorie */
        $categorie = new Categories();
        $categorie->nom = $request->nom;
        $categorie->parent_id = $request->parent_id;
        $categorie->produits_id = $request->produits_id;

        $categorie->save();
        /** Save image */

        if($request->hasFile('image')){
            $image = new Image();
            $file      = $request->file('image');
            $filename  = $file->getClientOriginalName();
            $extension = $file->getClientOriginalExtension();
            $picture   = date('His').'-'.$filename;
            $file->move(public_path('img_categorie'), $picture);
            $image->url = $picture;
            $categorie->images()->save($image);

            $image->save();
        }


        return response()->json('categorie saved');


    }

     /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $categorie = Categories::find($id)
        ->with('images')->get();
        return response()->json($categorie);
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
        //return response($request);
        $categorie = Categories::find($id);
        $categorie->nom = $request->nom;
        $categorie->parent_id = $request->parent_id;
        $categorie->produits_id = $request->produits_id;

        $categorie->save();
        /** Save image */

        if($request->hasFile('image')){
            $image = Image::where('owner_id',$id)->get();
            $file      = $request->file('image');
            $filename  = $file->getClientOriginalName();
            $picture   = date('His').'-'.$filename;
            $file->move(public_path('img_categorie'), $picture);
            $image->url = $picture;        
            $image->save();
        }
        
        
        return response()->json('Categorie updated');
        
        
        
    }



    public function destroy($id){
       $categorie = Categories::findOrFail($id);
       $categorie->delete();
      return response('done');
   }
}
