import React, { useState } from 'react';
import classNames from 'classnames';

import { makeStyles } from '@material-ui/core/styles';

import {
  Card,
  CardHeader,
  CardActions,
  Avatar,
  IconButton,
} from '@material-ui/core/';

import { EditOutlined, DeleteOutlineOutlined } from '@material-ui/icons';

import ModalConfirm from './ModalConfirm';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: '10px 0px',
  },
}));

const CustomerCard = ({
  id,
  firstName,
  lastName,
  email,
  avatar,
  className,
  onRemoveCustomer,
  onEditCustomer,
}) => {
  const classes = useStyles();

  const [openModal, setOpenModal] = useState(false);

  const handleToggleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleConfirmModal = (id) => {
    onRemoveCustomer(id);
    handleToggleOpenModal();
  };

  const handleRemoveCustomer = () => {
    handleToggleOpenModal();
  };

  const handleEditCustomer = (id) => {
    onEditCustomer(id);
  };

  return (
    <>
      <Card className={classNames(className, classes.root)}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src={avatar}>
              R
            </Avatar>
          }
          title={`${firstName} ${lastName}`}
          subheader={email}
          key={id}
        />
        <CardActions disableSpacing>
          <IconButton
            aria-label="Editar"
            onClick={() => handleEditCustomer(id)}
          >
            <EditOutlined />
          </IconButton>
          <IconButton aria-label="Excluir" onClick={handleRemoveCustomer}>
            <DeleteOutlineOutlined />
          </IconButton>
        </CardActions>
      </Card>
      <ModalConfirm
        open={openModal}
        onClose={handleToggleOpenModal}
        onConfirm={() => handleConfirmModal(id)}
        title="Deseja realmente excluir este cadastro?"
        message="Se confirmado a exclusão, não será possível reverter esta operação."
      />
    </>
  );
};

export default CustomerCard;
