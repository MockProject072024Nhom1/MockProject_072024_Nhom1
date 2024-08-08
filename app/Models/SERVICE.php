<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SERVICE extends Model
{
    use HasFactory;
    protected $table = 'SERVICE';
    
    protected $primaryKey = 'ServiceId';

    protected $fillable = ['Name','Description'];

}
