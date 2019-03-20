<?php
include "helper.php";

//$post = retrieveJsonPostData($_POST);

if(isset($_POST['p']) && isset($_POST['q']) && $_POST['u']) {
    $userid = $_POST['u'];
	$clientid = 0;
    $price = is_numeric($_POST['p']) ? (int)$_POST['p'] : 0;
    $qty = is_numeric($_POST['q']) ? (int)$_POST['q'] : 0;

    $user = R::findOne( 'users', ' id = ?', [ $userid ] );
    if($user && $price > 0 && $qty > 0) {
        if($user->amount >= $price*$qty){
            $transaction = R::xdispense( 'transactions' );
            if(isset($_POST['c'])){
				$clientid = is_numeric($_POST['c']) ? (int)$_POST['c'] : 2;
                $transaction->in_id = $clientid;
				$client = R::findOne( 'users', ' id = ?', [ $clientid ]);
				$client->amount = $client->amount + ($price * $qty);
            	R::store( $client );
            }

			$transaction->transaction_type_id = 1;
            $transaction->price = $price;
            $transaction->quantity = $qty;
            $transaction->out_id = $userid;
            $transaction->date_created = date('Y-m-d H:i:s');
            $id = R::store( $transaction );

            $user->amount = $user->amount - ($price * $qty);
            R::store( $user );

            echo json_encode(array('status' => 'ok', 'balance'=>$user->amount));
        }
        else
            echo json_encode(array('status' => 'fail', 'msg'=>'insuficient balance'));
    }
    else
        echo json_encode(array('status' => 'fail', 'msg'=>'wrong data'));

    die;
}
echo json_encode(array('status' => 'fail', 'msg'=>'no data'));
