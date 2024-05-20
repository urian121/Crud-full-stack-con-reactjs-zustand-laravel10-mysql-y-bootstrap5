<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empleado extends Model
{
    use HasFactory;
    protected $table = 'empleados'; // Nombre de la tabla en la base de datos

    protected $fillable = [
        'nombre',
        'edad',
        'cedula',
        'sexo',
        'telefono',
        'cargo',
        'avatar',
    ];
}
