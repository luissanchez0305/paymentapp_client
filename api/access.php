<?php
include "helper.php";

//$post = retrieveJsonPostData($_POST);

if(isset($_POST['u']) && isset($_POST['p']) && $_POST['u'].length && $_POST['p'].length) {
    $username = $_POST['u'];
    $password = $_POST['p'];

    $user = R::findOne( 'users', ' email = ?', [ $username ] );
    if($user) {
        if($user->password == $password){
            echo json_encode(array('status' => 'ok', 'user'=>$user));

            $user->last_login_date = date("Y-m-d H:i:s");
            $id = R::store( $user );
        }
        else
            echo json_encode(array('status' => 'fail', 'msg'=>'no password'));
    }
    else
        echo json_encode(array('status' => 'fail', 'msg'=>'no user'));

    die;
}
echo json_encode(array('status' => 'fail', 'msg'=>'no data'));
