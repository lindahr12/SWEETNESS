<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SocieteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('societe', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('raison_sociale');
            $table->string('description');
            $table->string('rue');
            $table->integer('code_postale');
            $table->string('ville');
            $table->string('email');
            $table->string('logo');
            $table->string('statue');
            $table->string('matriculation_fiscal');
            $table->bigInteger('user_id');


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
        Schema::dropIfExists('societe');
    }
}
