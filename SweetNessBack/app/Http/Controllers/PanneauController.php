<?php

namespace App\Http\Controllers;

use App\Pannier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PanneauController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::check()){
            $panniers = Pannier::orderBy('id', 'DESC')
            ->with('article')
            ->where('user_id', Auth::user()->id)
            ->wherenull('order_id')
            ->get()
            ->map(function ($pannier){
                return[
                    'pannier_id'=> $pannier->id,
                ];
            }); 
            return response($panniers);
        }else{
            return response('Authentifier Vous et ajouter des articles');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($id)
    {
        if(Auth::check()){
            $idauth = Auth::user()->id;
            $checkDB = Pannier::where('user_id',$idauth)->get();
            $checkitem= Pannier::where(['user_id'=>$idauth,'produits_id'=>$id])->wherenull('commande_id')->get();

            if(count($checkDB) == 0 || count($checkitem) == 0){
                $cart = new Pannier();
                $cart->posts_id = $id;
                $cart->user_id = $idauth;
                $cart->quantite =1;
                $cart->save();
                return response()->json('Produit Selectionner');

               // return redirect('/')->with('toast_success','Produit selectioner');
            }
            else{
                if(count($checkitem )> 0){
                    return response()->json('Produit déja Selectionner');
                   // return redirect('/')->with('toast_info','Produit déja Selectionner');
                }
            }
        }
        else{
            return response()->json('il faut authentifier');

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
        $article = Pannier::find($id);
        return response()->json($article);
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
        $pannier=Pannier::find($id);
        $pannier->delete();
        return response('l article a éte supprimé');
    }
}
