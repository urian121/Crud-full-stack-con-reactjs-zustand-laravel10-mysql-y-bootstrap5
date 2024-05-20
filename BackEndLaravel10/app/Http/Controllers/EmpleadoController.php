<?php

namespace App\Http\Controllers;

use App\Models\Empleado;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


class EmpleadoController extends Controller
{

    public function index()
    {
        try {
            $empleados = Empleado::all();
            return response()->json($empleados, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error al obtener los empleados: ' . $e->getMessage()], 500);
        }
    }




    public function store(Request $request)
    {
        try {
            if ($request->hasFile('avatar')) {
                // Almacenar la imagen en la carpeta de almacenamiento público
                if ($request->hasFile('avatar')) {
                    $file = $request->file('avatar');
                    $nombrearchivo = Str::random(20) . '.' . $file->getClientOriginalExtension();
                    $file->move(public_path('avatars'), $nombrearchivo);
                }

                // Guardar el path de la imagen en la base de datos
                $empleado = new Empleado();
                $empleado->avatar = $nombrearchivo;
                // Asigna los demás campos
                $empleado->nombre = $request->nombre;
                $empleado->cedula = $request->cedula;
                $empleado->edad = $request->edad;
                $empleado->sexo = $request->sexo;
                $empleado->telefono = $request->telefono;
                $empleado->cargo = $request->cargo;
                $empleado->save();
            }
            return response()->json($empleado, 201);
        } catch (\Exception $e) {
            // En caso de que ocurra una excepción, manejarla adecuadamente
            return response()->json(['error' => 'Error al crear el empleado: ' . $e->getMessage()], 500);
        }
    }


    public function show($IdEmpleado)
    {
        try {
            $empleado = Empleado::findOrFail($IdEmpleado);
            return response()->json($empleado, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Empleado no encontrado'], 404);
        }
    }


    public function update(Request $request, $IdEmpleado)
    {
        // Imprimir todos los datos recibidos en la solicitud
        //dd($request->all());
        try {
            $datoEmpleado = Empleado::findOrFail($IdEmpleado);
            // Verificar si se adjuntó un nuevo archivo de imagenls
            if ($request->hasFile('avatar')) {
                // Eliminar la imagen anterior del servidor si existe
                if ($datoEmpleado->avatar) {
                    // Eliminar la imagen anterior del servidor
                    if (file_exists(public_path('avatars/' . $datoEmpleado->avatar))) {
                        unlink(public_path('avatars/' . $datoEmpleado->avatar));
                    }
                }

                // Almacenar la nueva imagen en la carpeta de almacenamiento público
                $file = $request->file('avatar');
                $nombrearchivo = Str::random(20) . '.' . $file->getClientOriginalExtension();
                $file->move(public_path('avatars'), $nombrearchivo);

                // Actualizar el nombre de la imagen en la base de datos
                $datoEmpleado->avatar = $nombrearchivo;
            }

            // Actualizar los demás campos del empleado
            $datoEmpleado->nombre = $request->nombre;
            $datoEmpleado->cedula = $request->cedula;
            $datoEmpleado->edad = $request->edad;
            $datoEmpleado->sexo = $request->sexo;
            $datoEmpleado->telefono = $request->telefono;
            $datoEmpleado->cargo = $request->cargo;
            $datoEmpleado->save();

            return response()->json($datoEmpleado, 200);
        } catch (\Exception $e) {
            // En caso de que ocurra una excepción, manejarla adecuadamente
            return response()->json(['error' => 'Error al actualizar el empleado: ' . $e->getMessage()], 500);
        }
    }


    public function destroy($IdEmpleado)
    {
        try {
            $empleado = Empleado::find($IdEmpleado);

            if (!$empleado) {
                return response()->json(['message' => 'Empleado no encontrado'], 200);
            }

            // Elimina el empleado
            $empleado->delete();

            // Elimina el archivo de imagen si existe
            if ($empleado->avatar) {
                $path = public_path('avatars/' . $empleado->avatar);
                if (file_exists($path)) {
                    unlink($path);
                }
            }
            return response()->json(['message' => 'Empleado eliminado correctamente'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'No se pudo eliminar el empleado: ' . $e->getMessage()], 500);
        }
    }
}
