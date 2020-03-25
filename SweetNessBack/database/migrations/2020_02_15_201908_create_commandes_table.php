<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommandesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('commandes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('comd_number')->unique();
            $table->string('status')->default('En Attente');
            $table->integer('user_id');
            $table->float('prix_total');
            $table->integer('quantite_total');
            $table->string('rue_liv');
            $table->string('region_liv');
            $table->string('code_postale_liv');
            
            $table->string('rue_fac');
            $table->string('region_fac');
            $table->string('code_postale_fac');

            $table->string('lat_liv');
            $table->string('lg_liv');
            
            $table->string('lat_fac');
            $table->string('lg_fac');

            $table->date('date_creation');
            $table->date('date_livraison');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('commandes');
    }
}
