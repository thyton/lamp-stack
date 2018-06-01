<?php
  include_once("connect.php");
  $query="select * from pianists";
  $data=array();
  if($result=$connection->query($query))
  {
	  $data['result'] = $result->fetch_all();
	  $query="desc pianists";  
    if($result=$connection->query($query))
    {
        $result=$result->fetch_all(); 
        $count=sizeof($result);
        $data['status'] = "ok";
        $data['columns'] = array();
        for($i = 1; $i < $count; $i++)
            $data['columns'][] = $result[$i][0];
    }
    else
    	$data['status'] = 'failed';	  
  }
  else
    $data['status'] = 'failed';
  
  echo json_encode($data);
?>
