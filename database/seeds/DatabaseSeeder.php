<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        //DB::table('users')->delete();

        $users = array(
                ['name' => 'elberth12', 'email' => 'elberthcabrales41@gmail.com', 'password' => Hash::make('cabrales')],
                ['name' => 'elberth11', 'email' => 'elberthcabrale4s3@gmail.com', 'password' => Hash::make('cabrales')],
                ['name' => 'elberth13', 'email' => 'elberthcabralesqq@gmail.com', 'password' => Hash::make('cabrales')],
                ['name' => 'elberth14', 'email' => 'elberthcabralesrs@gmail.com', 'password' => Hash::make('cabrales')],
                ['name' => 'elberth15', 'email' => 'elberthcabralesdd@gmail.com', 'password' => Hash::make('cabrales')],
                ['name' => 'elberth16', 'email' => 'elberthcabralessf@gmail.com', 'password' => Hash::make('cabrales')],
                ['name' => 'elberth17', 'email' => 'elberthcabralescs@gmail.com', 'password' => Hash::make('cabrales')],
                ['name' => 'elberth161', 'email' => 'elberthcabraleasds@gmail.com', 'password' => Hash::make('cabrales')],

        );
            
        // Loop through each user above and create the record for them in the database
        foreach ($users as $user)
        {
            User::create($user);
        }

        Model::reguard();
    }
}
