<?php

    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $mensagem = addslashes($_POST['mensagem']);

    $destino = "fabielledelima@gmail.com";
    $assunto = "Contato - Portfólio";

    $corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Mensagem: ".$mensagem;

    $cabeca = "From: monark9911@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($destino,$assunto,$corpo,$cabeca)){
        echo("E-mail enviado com sucesso :D");
    }
    else{
        echo("Houve um erro ao enviar o email :0");
    }

?>