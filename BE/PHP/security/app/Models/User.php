<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = 'USER';
    protected $primaryKey = 'UserId';
    public $incrementing = true;
    protected $keyType = 'int';
    public $timestamps = false;

    protected $fillable = [
        'FirstName',
        'LastName',
        'Email',
        'Password',
        'Avatar',
        'Address',
        'PhoneNumber',
        'Gender',
        'DoB',
        'Status',
        'RoleId',
        'CityId',
    ];
}
