<?php

$con = mysqli_connect('localhost','root','root','RCP') or die ('Não conseguiu conectar');

$query = 'SELECT * FROM EMAIL WHERE EMAIL = "'.$_POST['email_login'].'"';

$resu = mysqli_query($con,$query);

$emailBanco = mysqli_fetch_assoc($resu);
$email = $emailBanco['ID_EMAIL'];

$query1 = 'SELECT * FROM USUARIO WHERE ID_EMAIL = '.$email.' AND SENHA_USUARIO = "'.$_POST['senha_login'].'"';

$resu = mysqli_query($con,$query1);

if (mysqli_num_rows($resu)>0){
    echo 0;
}else{
    echo 1;
}

mysqli_close($con);
?>