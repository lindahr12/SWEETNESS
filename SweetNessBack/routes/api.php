<?php

Route::resource('/article','ArticleController');

Route::get('/get-data','CategorieController@index');
Route::post('/post-data','CategorieController@add');
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
