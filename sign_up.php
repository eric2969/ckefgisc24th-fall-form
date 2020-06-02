<?php
    $db_host = "localhost";
    $db_user = "CKEFGISC";
    $db_pass = "weargreenhat123";
    $db_name = "CKEFGISC";
    $con = mysqli_connect($db_host,$db_user,$db_pass,$db_name);
$con -> query("SET NAMES 'utf8'");
    
    $name = $_POST['name'];
    $sex = $_POST['sex'];
    $school = $_POST['school'];
    
    $club = $_POST['club'];
    $grade = $_POST['grade'];
    $ck = $_POST['ck'];
    
    $fg = $_POST['fg'];
    $night = $_POST['night'];
    $hotel = $_POST['hotel'];
    
    $Taipei = $_POST['Taipei'];
    
    $fg_p = $_POST['fg_p'];
    $ck_p = $_POST['ck_p'];
    $ID = $_POST['ID'];
    
    $bir = $_POST['bir'];
    $mail = $_POST['mail'];
    $phone = $_POST['phone'];
    $par = $_POST['par'];
    $p_p = $_POST['p_p'];
    $who = $_POST['who'];
    $t_a = $_POST['t_a'];    

    $empty = false;
    $str = "";
    foreach ($_POST as $key => $value) {
        if($value==""){
            $empty = true;
            $str .= $key.' ; ';
        }
    }
    if($empty) {
        echo ($str);
        die();
    }
    $query = "INSERT INTO form (`name`, `sex`, `school`, `club`, `grade`, `ck`, `fg`, `night`, `hotel`, `Taipei`,`fg_p`, `ck_p`, `ID`, `bir`, `mail`, `phone`, `par`, `who`, `p_p`, `t_a`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,? )";
//    SELECT * FROM user WHERE username = '$user' AND password = '$pass'";

    $main = $con -> prepare($query);
    $main -> bind_param("ssssssssssssssssssss", $name, $sex, $school, $club,  $grade, $ck, $fg,  $night, $hotel, $Taipei, $fg_p,  $ck_p, $ID, $bir,  $mail, $phone, $par, $who, $p_p, $t_a );
    $result = $main -> execute();
    if($result){
        echo "報名成功";
    }
    else{
        echo "error";
    }
?>