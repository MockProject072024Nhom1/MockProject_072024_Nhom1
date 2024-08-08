<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{
    protected $table = 'CONTRACT';
    protected $primaryKey = 'ContractId';
    public $incrementing = true;
    protected $keyType = 'int';
    public $timestamps = false;

    protected $fillable = [
        'ContractName',
        'CreatedAt',
        'StartDate',
        'FinishDate',
        'Cost',
        'PaymentMethod',
        'PaymentStatus',
        'File',
        'SupervisorId',
        'RegistrationId',
    ];
}
