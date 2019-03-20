<?php
include "helper.php";

//$post = retrieveJsonPostData($_POST);

if(isset($_POST['u']) && isset($_POST['p']) && isset($_POST['t']) && $_POST['u'].length && $_POST['p'].length && $_POST['t'].length) {
    $username = $_POST['u'];
    $password = $_POST['p'];

    $user = R::findOne( 'users', ' email = ?', [ $username ] );
    if($user) {
        if($user->password == $password){
            if($user->user_type_id == $_POST['t']){
                echo json_encode(array('status' => 'ok', 'user'=>$user));

                $user->last_login_date = date("Y-m-d H:i:s");
                $id = R::store( $user );
            }
            else{
                echo json_encode(array('status' => 'fail', 'msg'=>'no platform'));
            }
        }
        else
            echo json_encode(array('status' => 'fail', 'msg'=>'no password'));
    }
    else
        echo json_encode(array('status' => 'fail', 'msg'=>'no user'));

    die;
}
echo json_encode(array('status' => 'fail', 'msg'=>'no data'));
