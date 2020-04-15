<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lot', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->date('date_expiration');
            $table->date('date_achat');
            $table->integer('quantite');
            $table->double('prix_achat');
            $table->double('prix_vente_souhaiter');
            $table->boolean('is_active')->default(true);
            $table->string('note');
            $table->integer('priorite_de_vente');
            $table->bigInteger('produits_id');
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
        Schema::dropIfExists('lot');
    }
}
