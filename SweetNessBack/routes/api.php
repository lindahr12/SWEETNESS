<?php
/** Article Route */
Route::resource('/article','ProduitController');

/** Marque Route */
Route::resource('/marque','MarqueController');

/** Categorie Route  */
<<<<<<< HEAD
Route::resource('/categorie','CategorieController');

/** Auth Route  */

=======
Route::get('/get-data','CategorieController@index');
Route::post('/post-data','CategorieController@add');
Route::delete('/delete-categorie/{id}','CategorieController@destroy');
Route::get('/search/{id}','CategorieController@search');
/** Auth Route */
>>>>>>> dc8a329d4280415cf3b2893998a053700b40d74a
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
