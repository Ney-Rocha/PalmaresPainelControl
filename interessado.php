<?php
include_once "classes/bd.php";

$con = new Crud();

$tipo_interessado = implode(',',$_POST['interesse']);

$query = ('INSERT INTO INTERESSADO(NOME_INTERESSADO, TELEFONE_INTERESSADO, EMAIL_INTERESSADO, DESCRICAO, TIPO_INTERESSADO) 
VALUE("'.$_POST['nome_Interessado'].'","'.$_POST['telefone_Interessado'].'","'.$_POST['email_Interessado'].'","'.$_POST['mensagem_Interessado'].'","'.$tipo_interessado.'")');

if ($con->execute($query)) {
    echo "<script>location.href='index.html'</script>";
} else {
    echo 'falho';
}

mysqli_close($con);



?>