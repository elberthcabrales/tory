<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\User;
use Exception; //para usar las excepciones debo esportarlas primero (-.-)
use Validator;

class AuthenticateController extends Controller
{
   
    

    public function __construct()
    {
        // Apply the jwt.auth middleware to all methods in this controller
        // except for the authenticate method. We don't want to prevent
        // the user from retrieving their token if they don't already have it
        $this->middleware('jwt.auth', ['except' => ['authenticate']]);
    }

    /**
     * Return the user
     *
     * @return Response
     */
    public function index()
    {

        // Retrieve all the users in the database and return them        
        $users = User::all();

        return $users;
    }
    public function delete($id)
    {
        $respuesta =null;
        try{
            //$affectedRows = User::where('id', '>', $id)->delete();
            $user = User::find($id);
            $respuesta = $user;
            $user->delete();
            return $respuesta;
            }
        catch (Exception $e)
            { 
                return $e->getMessage();
            }
    }
    public function update(Request $request)
    {
  

        //$arg = $request->input('id');
        $validator= Validator::make($request->all(),[
                'email' => 'required|email|max:200|unique:users',
                'name' => 'required|unique:users', 
                ]);

    
        try{

            //$affectedRows = User::where('id', '>', $id)->delete();
            $user = User::find($request->input('id'));
            if(!$validator->errors()->has('email')){
                    $user->email=$request->input('email');
            }
            if(!$validator->errors()->has('name')){
                    $user->name=$request->input('name');
            }
            /*$user->name=$request->input('name');
            $user->email=$request->input('email');*/
            $user->Rol=$request->input('Rol');
            $user->save();
            return response()
            ->json(array('user'=>$user,'errors'=>$validator->errors())); 
            }
         catch (Exception $e)
            {                 
                return response()->json($e->getMessage());
            }
        
        /* $user = User::find($id);
         $user->name=$data->name;
         $user->save();*/
    }
    /**
     * Return a JWT
     *
     * @return Response
     */
    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');

        try {
            // verify the credentials and create a token for the user
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            // something went wrong
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        // if no errors are encountered we can return a JWT
        return response()->json(compact('token'));
    }
}
use \Prettus\Validator\LaravelValidator;

class PostValidator extends LaravelValidator {

    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'title' => 'required',
            'text'  => 'min:3',
            'author'=> 'required'
        ],
        ValidatorInterface::RULE_UPDATE => [
            'title' => 'required'
        ]
   ];

}