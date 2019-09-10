<?php
include_once("./classes/bd.php");

$con = new Crud();

$tipo_interessado = implode(',',$_POST['interesse']);

$query = ('INSERT INTO INTERESSADO(NOME_INTERESSADO, TELEFONE_INTERESSADO, EMAIL_INTERESSADO, DESCRICAO, TIPO_INTERESSADO) 
VALUE("'.$_POST['nome_interessado'].'","'.$_POST['telefone_interessado'].'","'.$_POST['email_interessado'].'","'.$_POST['mensagem_Interessado'].'","'.$tipo_interessado.'")');

if (mysqli_query($con, $query)) {
    echo "<script> alert('Dados cadastrados')</script>";
} else {
    echo 'falho';
}

mysqli_close($con);

echo "<script>location.href='index.html'</script>"

?>