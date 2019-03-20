<?php
include "helper.php";

//$post = retrieveJsonPostData($_POST);

if(isset($_POST['a']) && $_POST['u']) {
    $userid = $_POST['u'];
    $amount = is_numeric($_POST['a']) ? (float)$_POST['a'] : 0;

    $user = R::findOne( 'users', ' id = ?', [ $userid ] );
    if($user && $amount > 0) {
        $transaction = R::xdispense( 'transactions' );
		$transaction->transaction_type_id = 3;
		$transaction->out_id = null;
		$transaction->in_id = $userid;
		$transaction->price = $amount;
        $transaction->date_created = date('Y-m-d H:i:s');
		R::store( $transaction );

        $user->amount = $user->amount + $amount;
        R::store( $user );
        echo json_encode(array('status' => 'ok', 'balance'=>$user->amount));
    }
    else
        echo json_encode(array('status' => 'fail', 'msg'=>'wrong data - ' . $amount));

    die;
}
echo json_encode(array('status' => 'fail', 'msg'=>'no data'));
