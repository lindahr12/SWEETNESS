<?php

/**Pannier */
Route::post('/pannieradd/{id}','PanneauController@store');
Route::resource('/pannier','PanneauController');


/** Marque Route */
Route::resource('/marque','MarqueController');
Route::get('/marqueid/{id}','MarqueController@search');
Route::post('/marquesearch','MarqueController@searchnom');


/**Prod Route */
Route::resource('/product','ProduitController');
Route::get('/productnom/{nom}','ProduitController@search_nom');
Route::get('/productid/{id}','ProduitController@search');

/**Fournisseur Route */
Route::resource('/fournisseur','FournisseurController');

/**Lot Route */
Route::resource('/lot','LotController');
Route::get('/lotid/{id}','LotController@search');


/** Categorie Route  */
Route::resource('/categorie','CategorieController');
Route::get('/search/{id}','CategorieController@search');

/** Auth Route  */

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
  Route::post('/login', 'AuthController@login');
  Route::post('/signup', 'AuthController@signup');
  Route::get('/allusers', 'AuthController@allusers');
  Route::post('logout', 'AuthController@logout');
  Route::post('refresh', 'AuthController@refresh');
  Route::post('me', 'AuthController@me');

});
