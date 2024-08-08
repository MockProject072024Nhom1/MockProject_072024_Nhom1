<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bodyguard extends Model
{
    use HasFactory;
    protected $table = 'BODYGUARD';

    protected $primaryKey = 'BGId';
    public $timestamps = false;

    protected $fillable = [
        'BGId',
        'Certificate',
        'Experience',
        'Salary',
        'Health',
        'Skills',
        'Status',
        'ServiceId',
    ];

}
