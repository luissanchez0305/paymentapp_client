<?php
include "helper.php";

if(isset($_POST["type"]) || isset($_GET["type"])){
    $type = $_POST["type"];
    if(!$type)
        $type = $_GET["type"];
    switch ($type) {
        case 'user':
            $user_id = $_POST['id'];
            if(!$user_id)
                $user_id = $_GET['id'];

            # Regresar un solo user
            $user  = R::findOne( 'users', ' id = ? ', [ $user_id ] );
            echo json_encode(array('user'=>$user));
            break;
        case 'save':
        case 'new':
            if($type == 'new'){
                $user = R::findOne( 'users', ' email = ? ', [ $_POST['email'] ] );
                if($user->id > 0){
                    echo json_encode(array('status' => 'fail', 'msg' => 'duplicate'));
                    die;
                }
                $user = R::xdispense( 'users' );
                $user->created_date = date("Y-m-d H:i:s");
                $user->password = $_POST['password'];
				$user->amount = 0;
            }
            else{
                $user = R::findOne( 'users', ' id = ? ', [ $_POST['userId'] ] );
                if(isset($_POST['password']))
                    $user->password = $_POST['password'];
            }
            $user->name = $_POST['name'];
            $user->email = $_POST['email'];
            $user->user_type_id = $_POST['user_type_id'];
            $user->uid = $_POST['uid'];
            $id = R::store( $user );

            echo json_encode(array('status' => 'ok', 'id' => $id, 'user' => $user));
            break;
        default:
            # Regresar todos los users
            $usersArray = array();
            $users = R::findAll( 'users' );
            foreach (array_values($users) as $index => $user) {
                $usersArray[] = array('user'=>$user);
            }
            echo json_encode($usersArray);
            break;
    }
    die;
}
echo json_encode(array('status'=>'no data'));
