<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SignupRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [      
            'nom' => ['required', 'string', 'max:255'],
            'prenom'=> ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'num_tel'=>'required|numeric',
            'num_fax'=>'required|numeric',
            'is_actif' => 'required',
            'role_id'=> 'required',
            'societe_id'=> 'required',

        ];
    }
    /**
     * Get custom messages for validator errors.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'numeric'=>' Entre un nombre',
            'required'=> 'le champ est vide',
            'unique' => 'Ce mail est deja utilisé'
        ];
    }
}
