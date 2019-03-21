<?php
include "helper.php";

//$post = retrieveJsonPostData($_POST);
// s: source (facebook, normal)
// u: username
// p: password
// t: type (1-user, 2-store)
// n: name
// i: uid
// f: facebook ID
if( (isset($_POST['s']) && $_POST['s'] == 'facebook') ||
    (isset($_POST['s']) && $_POST['s'] != 'facebook' && isset($_POST['u']) && isset($_POST['p']) && isset($_POST['t']) && $_POST['u'].length && $_POST['p'].length && $_POST['t'].length)) {
    $username = $_POST['u'];
    $user = R::findOne( 'users', ' email = ?', [ $username ] );

    if($_POST['s'] != 'facebook'){
        $password = $_POST['p'];

        if($user) {
            if($user->password == $password){
                if($user->user_type_id == $_POST['t']){
                    $user->last_login_date = date("Y-m-d H:i:s");
                    $id = R::store( $user );

                    echo json_encode(array('status' => 'ok', 'user'=>$user));
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

    }
    // with facebook
    else{
        if($user->id == 0){
            $user = R::xdispense( 'users' );
            $user->name = $_POST['n'];
            $user->email = $_POST['u'];
            $user->password = $_POST['p'];
            $user->user_type_id = $_POST['t'];
            $user->uid = $_POST['i'];
            $user->facebookId = $_POST['f'];
            $user->date_created = date('Y-m-d H:i:s');
        }
        $user->last_login_date = date("Y-m-d H:i:s");

        $id = R::store( $user );
        echo json_encode(array('status' => 'ok', 'user'=>$user));
    }
    die;
}
echo json_encode(array('status' => 'fail', 'msg'=>'no data'));
