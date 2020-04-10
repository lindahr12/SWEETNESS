<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserDetailsController extends Controller
{
     public function userDetails(Request $req)
      {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: PUT, GET, POST");
        header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
        foreach($req->params as $postdata)
        {
          $datainserted = DB::table('users')->insert(
          ['nom' => $postdata['updates'][0]['value'],
          'prenom' => $postdata['updates'][1]['value']],
          'email' => $postdata['updates'][2]['value']],
          'password' => $postdata['updates'][3]['value']],


            );
          if($datainserted)
          {
            return response()->json("Data Added Successfully");
          }
        }

}
