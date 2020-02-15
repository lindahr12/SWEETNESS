<?php

namespace App\Http\Controllers;

use App\Article;
use App\Image;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index(){
        $articles = Article::orderBy('id', 'DESC');
        return response($articles);
    }
    public function add(Request $request){
        $article = new Article();
        $article->titre = $request->input('titre');
        $article->prix_courrant = $request->input('prix_courrant');
        $article->prix_ancient = $request->input('prix_ancient');
        $article->quantite = $request->input('quantite');
        $article->description = $request->input('description');
        $article->user_id = $request->input('user_id');
        if($request->hasfile('image')){
            $image= new Image();
            $file = $request->file('image');
            $exten = $file->getClientOriginalExtension();
            $name = time().'.'.$exten;
            $file->move('images_articles',$name);
            $image->url = $name;
            $image->save();

        }
        $article->image_id = $image->id;
        $article->save();
        return response('article saved');
    }
    public function edit($id){
        $article = Article::find($id);
        return response($article);
    }
    public function update(Request $request,$id){
        $article = Article::find($id);

        $article->titre = $request->input('titre');
        $article->prix_courrant = $request->input('prix_courrant');
        $article->prix_ancient = $request->input('prix_ancient');
        $article->quantite = $request->input('quantite');
        $article->description = $request->input('description');
        $article->user_id = $request->input('user_id');
        if($request->hasfile('image')){
            $image= new Image();
            $file = $request->file('image');
            $exten = $file->getClientOriginalExtension();
            $name = time().'.'.$exten;
            $file->move('images_articles',$name);
            $image->url = $name;
            $image->save();

        }
        $article->image_id = $image->id;
        $article->save();
        return response('article Updated');


    }
    public function destroy($id){
        $article = Article::find($id);
        $article->destroy();
        return response('article deleted');

    }
}
