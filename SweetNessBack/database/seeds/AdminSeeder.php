<?php

use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'nom' => 'admin',
            'prenom' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('password'),
            'num_tel' => '77777777',
            'num_fax' => '77777777',
            'role_id'=>'3',
            'societe_id'=>'0',
            'token_validation'=>'0',
        ]);
    }
}
