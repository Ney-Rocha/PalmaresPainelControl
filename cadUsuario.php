<?php
include_once 'classes/bd.php';

$con = new Crud();
$validacaoQuery = false;

//VERIFICAÇÃO DO EMAIL NO BANCO
$query = 'SELECT * FROM EMAIL WHERE EMAIL = "' . $_POST["email_cadastro"] . '"';

if (count($con->getData($query))>0){
    echo 1;
    $con->close();
    exit;
}else{
    //Cadastrando email
    $query = 'INSERT INTO EMAIL(EMAIL) VALUES("'.$_POST["email_cadastro"].'")';
    if(!$con->execute($query)){
        echo 'erro';
        $con->close();
        exit;
    }
    if ($_POST["email_cadastro"] != $_POST["emailUser_cadastro"]){
        $query = 'INSERT INTO EMAIL(EMAIL) VALUES("'.$_POST["emailUser_cadastro"].'")';
        if(!$con->execute($query)){
            echo 'erro';
            $con->close();
            exit;
        }   
    }
}

//Cadastrando endereço
$query = 'INSERT INTO ENDERECO(LOGRADOURO_ENDERECO,NUMERO_ENDERECO,COMPLEMENTO_ENDERECO,BAIRRO_ENDERECO,CIDADE_ENDERECO,UF_ENDERECO) 
    VALUES("'.$_POST["endereco_cadastro"].'","'.$_POST["numero_cadastro"].'","'.$_POST["complemento_cadastro"].'","'.$_POST["bairro_cadastro"].'","'.$_POST["cidade_cadastro"].'","'.$_POST["uf_cadastro"].'")';
if(!$con->execute($query)){
    echo 'erro1';
    $con->close();
    exit;
}

//Cadastrando telefones
if($_POST["telefone1_cadastro"] != null || $_POST["telefone1_cadastro"] != ""){
    $query = 'INSERT INTO TELEFONE(NUMERO_TELEFONE) 
        VALUES("'.$_POST["telefone1_cadastro"].'")';
    if(!$con->execute($query)){
        echo 'erro';
        $con->close();
        exit;
    }
}

if($_POST["telefone2_cadastro"] != null || $_POST["telefone2_cadastro"] != "" ){
    $query = 'INSERT INTO TELEFONE(NUMERO_TELEFONE) 
        VALUES("'.$_POST["telefone2_cadastro"].'")';
    if(!$con->execute($query)){
        echo 'erro';
        $con->close();
        exit;
    }
}

//Cadastrando Usuario
$query = 'SELECT ID_EMAIL FROM EMAIL WHERE EMAIL = "' . $_POST["emailUser_cadastro"] . '"';
$email = $con->execute($query);
$query = 'INSERT INTO USUARIO(ID_EMAIL,SENHA_USUARIO) 
        VALUES("'.$email.'","'.$_POST["senha_cadastro"].'")';
echo $query;
if(!$con->execute($query)){
    echo 'erro';
    $con->close();
    exit;
}

//Cadastrando Pessoa
$query = 'SELECT ID_EMAIL FROM EMAIL WHERE EMAIL = "' . $_POST["email_cadastro"] . '"';
$email = $con->execute($query);

$query = 'SELECT ID_TELEFONE FROM TELEFONE WHERE NUMERO_TELEFONE = "' . $_POST["telefone1_cadastro"] . '"';
$telefone = $con->execute($query);

$query = 'SELECT ID_ENDERECO FROM ENDERECO WHERE LOGRADOURO_ENDERECO = "' . $_POST["endereco_cadastro"] . '"';
$endereco = $con->execute($query);

$query = 'SELECT ID_EMAIL FROM EMAIL WHERE EMAIL = "' . $_POST["emailUser_cadastro"] . '"';
$emailUsuario = $con->execute($query);
$query = 'SELECT * FROM USUARIO WHERE ID_EMAIL = "' . $emailUsuario . '"';
$usuario = $con->execute($query);

$query = 'INSERT INTO PESSOA(CPF_PESSOA,TIPO_DOCUMENTO,NOME_PESSOA,DT_NASC_PESSOA,ID_TELEFONE,GENERO_ALUNO,ID_ENDERECO,ID_EMAIL,ID_MODALIDADE,ID_CURSO,ID_GRADUACAO,ID_USUARIO) 
        VALUES("'.$_POST["cpf_cadastro"].'",1,"'.$_POST["nome_cadastro"].'","'.$_POST["nascimento_cadastro"].'",'.$telefone.'
        ,'.$_POST["sexo_cadastro"].','.$endereco.','.$email.','.$_POST["modalidade_cadastro"].','.$_POST["curso_cadastro"].'
        ,'.$_POST["graduacao_cadastro"].','.$usuario.')';
echo $query;
if(!$con->execute($query)){
    echo 'erro';
    $con->close();
    exit;
}else{
    echo 1;
}

$con->close();

?>