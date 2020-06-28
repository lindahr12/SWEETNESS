<?php

/** Marque Route */
Route::resource('/marque','MarqueController');

Route::resource('/product','ProduitController');
/**Fournisseur Route */
Route::resource('/fournisseur','FournisseurController');

/**Lot Route */
Route::resource('/lot','LotController');

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

  Route::post('logout', 'AuthController@logout');
  Route::post('refresh', 'AuthController@refresh');
  Route::post('me', 'AuthController@me');

});
