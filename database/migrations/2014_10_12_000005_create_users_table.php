<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('first_name',100);
            $table->string('last_name',100);
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('avatar')->nullable();
            $table->string('address')->nullable();
            $table->char('phone_number',10)->nullable();
            $table->char('gender', 1)->default('M')->nullable()->comment('M - Male, F - Female, L - Other');
            $table->date('dob')->nullable();
            $table->enum('status', ['Active', 'Inactive'])->default('Active');
            $table->unsignedInteger('role_id')->default(1);
            $table->unsignedInteger('city_id')->nullable();
            $table->foreign('role_id')->references('id')->on('roles');
            $table->foreign('city_id')->references('id')->on('cities');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
