# Cómo crear una API REST en Laravel 10 y MySQL: Guia paso a paso 🚀

##### Este tutorial te sumerge en el poder de Laravel 10, la idea es Desarrollar una API REST en Laravel 10 para la gestión de empleados. La API permitirá realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) utilizando los métodos HTTP (POST, GET, PUT y DELETE) para administrar la información de los empleados en una base de datos.

##### Requisitos previos:

    Antes de comenzar, asegúrate de tener instalado PHP, Composer y cualquier servidor de apache
    php --version
    composer --version
    xammp

##### Crear un proyecto de Laravel

    composer create-project laravel/laravel api-rest-empleados-en-laravel-10 "10.*"

##### Acceder al proyecto creado

    cd api-rest-empleados-en-laravel-10

##### Generación de clave de aplicación

    php artisan key:generate

##### Crear Base de Datos en MySQL

    bd_api_rest_laravel_10

##### Configuración de la base de datos

    Abre el archivo .env y configura los detalles de tu base de datos, como el nombre de la base de datos, el nombre de usuario y la contraseña.

    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=bd_api_rest_laravel_10
    DB_USERNAME=root
    DB_PASSWORD=

##### Ejecución del servidor de desarrollo

    php artisan serve
    php artisan serve --port=8500

##### Para Crear mi Modelo, Controlador y Migraciones

    php artisan make:model Empleado -mcr

##### Correr las migraciones

    php artisan migrate

##### Definir los campos para mi tabla en la Migracion correspondiente a mi tabla

        Schema::create('emplados', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->integer('edad')->nullable();
            $table->string('cedula')->nullable();
            $table->string('sexo')->nullable();
            $table->string('telefono')->nullable();
            $table->string('cargo')->nullable();
            $table->string('avatar')->nullable();
            $table->timestamps();
        });

##### Definir los campos en mi modelo para trabahar con mi tabla

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

##### Define las rutas de nuestra API en el archivo routes/api.php

    use App\Http\Controllers\EmpleadoController;

    Route::get('/empleados', [EmpleadoController::class, 'index']);
    Route::post('/empleados', [EmpleadoController::class, 'store']);
    Route::get('/empleados/{id}', [EmpleadoController::class, 'show']);
    Route::put('/empleados/{id}', [EmpleadoController::class, 'update']);
    Route::delete('/empleados/{id}', [EmpleadoController::class, 'destroy']);

## Lista de Endpoint API

#### Método GET ✅

    👉 http://127.0.0.1:8500/api/empleados

    [
        {
            "id": 1,
            "nombre": "Urian",
            "edad": 35,
            "cedula": "20004322",
            "sexo": "Masculino",
            "telefono": "3213872648",
            "cargo": "Desarrollador",
            "avatar": "avatar.png",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 2,
            "nombre": "Brenda",
            "edad": 18,
            "cedula": "121212",
            "sexo": "Femenino",
            "telefono": "321999474",
            "cargo": "Asistente",
            "avatar": "avatar2.png",
            "created_at": null,
            "updated_at": null
        }
    ]

#### Método GET ✅

    👉 http://127.0.0.1:8500/api/empleados/2
        {
            "id": 2,
            "nombre": "Brenda",
            "edad": 18,
            "cedula": "121212",
            "sexo": "Femenino",
            "telefono": "321999474",
            "cargo": "Asistente",
            "created_at": null,
            "updated_at": null
        }

#### Método POST ✅

    👉 http://127.0.0.1:8500/api/empleados
        {
            "nombre": "Carlos",
            "edad": 35,
            "cedula": "22222",
            "sexo": "Masculino",
            "telefono": "55555",
            "cargo": "Desarrollador Backend",
        }

#### Método PUT ✅

    👉 http://127.0.0.1:8500/api/empleados/2
    {
        "id":"2",
        "nombre": "Carlos Torres",
        "edad": 35,
        "cedula": "22222",
        "sexo": "Masculino",
        "telefono": "55555",
        "cargo": "Desarrollador Backend",
         "avatar": "avatar.png"
        }

#### Método DELETE ✅

    👉 http://127.0.0.1:8500/api/empleados/2

##### Definir los métodos o funciones para cada una de tus rutas en un controlador

    public function index(){
            $empleados = Empleado::all();
            return response()->json($empleados, 200);
        }

    public function store(Request $request){
        $empleado = Empleado::create($request->all());
        return response()->json($empleado, 201);
    }


    public function show($IdEmpleado){
        $empleado = Empleado::findOrFail($IdEmpleado);
        return response()->json($empleado, 200);
    }


    public function update(Request $request, $IdEmpleado){
        $empleado = Empleado::findOrFail($IdEmpleado);
        $empleado->update($request->all());
        return response()->json($empleado, 200);
    }

    public function destroy($IdEmpleado){
        $empleado = Empleado::findOrFail($IdEmpleado);
        $empleado->delete();
        return response()->json(['message' => 'Empleado eliminado correctamente'], 200);
    }

##### Notas con las Migraciones

    - Subir la migracion.
        php artisan migrate
    - Deshacer la última migración ejecutada
        php artisan migrate:rollback

    - Deshacer todas las migraciones
        php artisan migrate:reset

    - Muestrar todas las migraciones indicando cuales han sido ejecutadas
        php artisan migrate:status
    - Deshace todas las migraciones y las ejecuta otra vez.
        php artisan migrate:refresh

##### Resultado final

![](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/master/api-rest-con-laravel-10.png)

#### Importante, pasos para correr el proyecto 🚀

    1. Actualizar dependencias de Composer
        composer update
    2. Actualizar dependencias de Composer
        composer install
    3. Generar una nueva clave de aplicación
        php artisan key:generate
    4. Configurar el archivo .env:
        Copia el archivo .env.example y renómbralo como .env.
        Completa los detalles de configuración necesarios, como la configuración de la base de datos y cualquier otra configuración específica de tu entorno.
    5. Crear la base de datos en MySQL y ejecutar migraciones
        php artisan migrate
    7. Iniciar el servidor de desarrollo
        php artisan serve

#### Importante:

    Si vas a correr el proycto en una Mac debes darle permiso todos los permisos a la carpeta 'avatars' esta esta ubicada en 'BackEndLaravel10/public/avatars'
    todo esto con el fin de tener permisos para guadar imagenes del empleado.

### Expresiones de Gratitud 🎁

    Comenta a otros sobre este proyecto 📢
    Invita una cerveza 🍺 o un café ☕
    Paypal iamdeveloper86@gmail.com
    Da las gracias públicamente 🤓.

## No olvides SUSCRIBIRTE 👍
