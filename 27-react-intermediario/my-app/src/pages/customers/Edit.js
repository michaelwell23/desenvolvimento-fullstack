/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

import Toasty from '../../components/Toast';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(1),
  },
}));

const Edit = () => {
  const classes = useStyles();

  const { id } = useParams();

  const [form, setForm] = useState({
    name: {
      value: '',
      error: false,
    },
    job: {
      value: '',
      error: false,
    },
  });

  const [openToasty, setOpenToast] = useState(false);

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then((response) => {
      const { data } = response.data;

      setForm({
        name: {
          value: data.first_name,
          error: false,
        },
        job: {
          value: data.job,
          error: false,
        },
      });
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: {
        value,
      },
    });
  };

  const handleRegisterButton = () => {
    let hasError = false;
    let newFormState = {
      ...form,
    };

    if (!form.name.value) {
      hasError = true;

      newFormState.name = {
        value: form.name.value,
        error: true,
        helperText: 'Digite o campo Nome.',
      };
    }

    if (!form.job.value) {
      hasError = true;

      newFormState.job = {
        value: form.job.value,
        error: true,
        helperText: 'Digite o campo Cargo.',
      };
    }

    if (hasError) {
      return setForm(newFormState);
    }

    axios
      .post('https://reqres.in/api/users', {
        name: form.name.valeu,
        job: form.job.valeu,
      })
      .then((response) => {
        setOpenToast(true);
      });
  };

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.wrapper}>
          <TextField
            id="outlined-basic"
            error={form.name.error}
            helperText={form.name.error ? form.name.helperText : ''}
            label="Digite seu nome"
            name="name"
            value={form.name.value}
            variant="outlined"
            onChange={handleInputChange}
            fullWidth
          />
        </div>
        <div className={classes.wrapper}>
          <TextField
            id="outlined-basic"
            error={form.name.error}
            helperText={form.name.error ? form.job.helperText : ''}
            label="Digite o seu cargo"
            name="job"
            value={form.job.value}
            variant="outlined"
            onChange={handleInputChange}
            fullWidth
          />
        </div>
        <div className={classes.wrapper}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleRegisterButton}
          >
            Editar
          </Button>
        </div>
        <Toasty
          open={openToasty}
          severity="success"
          text="Registro atualizado com sucesso!"
          onClose={() => setOpenToast(false)}
        />
      </form>
    </>
  );
};

export default Edit;
