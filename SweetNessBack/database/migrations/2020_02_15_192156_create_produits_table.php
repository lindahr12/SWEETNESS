<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateproduitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('produits', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nom');
            $table->string('description');
            $table->integer('limite_stock_alert');
            $table->integer('total_stock');
            $table->double('note');
            $table->integer('nbr_noted');
            $table->double('tva');
            $table->double('prix_ht');
            $table->double('prix_ttc');
            $table->double('marge');
            $table->boolean('is_active')->default(true);
            $table->double('reduction');

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
        Schema::dropIfExists('articles');
    }
}
