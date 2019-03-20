<?php
include "helper.php";

if($_GET['u']) {
    $type = $_GET['t'];
    $userid = $_GET['u'];
	$query = "SELECT t.id, t.transaction_type_id, t.date_created, s.name AS in_name, u.name AS out_name, t.quantity, t.price
        FROM transactions t
        LEFT JOIN users u ON u.id = t.out_id
        LEFT JOIN users s ON s.id = t.in_id
        WHERE " . ($type == "buy" ? "(t.in_id = ? AND t.transaction_type_id = 3) OR t.out_id = ? " : " (t.in_id = ? AND t.transaction_type_id = 1)") .
        "ORDER BY date_created DESC";

    $transactions = R::getAll($query,
        ($type == "buy" ? [ $userid, $userid ] : [ $userid ]));
    $response = array();
    foreach($transactions as $transaction){
        $response[] = $transaction;
    }

    echo json_encode($response);
}
?>