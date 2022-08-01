import React from 'react';
import {FormGroup,FormControl,InputLabel,Input,Button,makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    estilo: {
        width:'50%',
        margin:'auto',
        padding: 20,
        boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
    },
    texto: {
        textAlign: 'center',
    },
    botao: {
        marginTop: 20,
        width:'10%',
        alignSelf:'center'
    },
  });

export default function Contact() {
    const classes = useStyles();
    return (
        <div>
            <h1 className={classes.texto}>Formulário de contato</h1>
            <FormGroup  className={classes.estilo} id='form'>
                <FormControl>
                    <InputLabel>Nome completo</InputLabel>
                    <Input type='text' id='nome' />
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input type='email' id='email' />
                </FormControl>
                <FormControl>
                    <InputLabel>Telefone</InputLabel>
                    <Input type='tel' id='telefone' />
                </FormControl>
                <FormControl>
                    <InputLabel>Endereço</InputLabel>
                    <Input type='text' id='endereco' />
                </FormControl>
                <Button type='submit' variant='contained' color='secondary' className={classes.botao}>ENVIAR</Button>
            </FormGroup>
        </div>
    )
}