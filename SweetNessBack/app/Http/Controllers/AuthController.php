<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignupRequest;
use Illuminate\Foundation\Auth\User;
use Illuminate\Http\Request;
use App\Adresse;

use App\Societe;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','signup']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }
      /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function signup(SignupRequest $request){
       $user = new User();
       $user->nom = $request->nom;
       $user->prenom = $request->prenom;
       $user->email = $request->email;
       $user->password = bcrypt($request->password);
       $user->num_tel = $request->num_tel;
       $user->num_fax = $request->num_fax;
       $user->token_validation = 0;
        if($request->societe){
            $societe = new Societe();
            $societe->raison_sociale = $request->raison_sociale;
            $societe->description = $request->description;
            $societe->email = $request->email_societe;
            $societe->statue = $request->statue;
            $societe->matriculation_fiscal = $request->matriculation_fiscal;
            $user->role_id = 2;
            $societe->save();
            $user->societe_id = $societe->id;
        }else{
            $user->role_id = 1;

        }

       $user->save();
       $adress = new Adresse();
       $adress->rue = $request->rue;
       $adress->region = $request->region;
       $adress->code_postale = $request->code_postale;
       $adress->users_id = $user->id;
       $adress->save();
        return $this->login($request);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth::user()->nom,
            'user_id' => auth::user()->id,
            'role'=> Auth::user()->role->nom
        ]);
    }
    public function allusers()
    {
        # code...
        $users = User::orderBy('id','DESC')
        ->with('role')
        ->with('adresse')
        ->with('societe')->get();
        return response()->json($users);
    }
    public function deleteUser($id){
        $user = User::find($id);
        $user->delete();
        return response()->json('deleted');
    }

}
