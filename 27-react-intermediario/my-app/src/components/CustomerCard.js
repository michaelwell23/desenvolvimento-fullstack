import React from 'react';
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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: '10px 0px',
  },
}));

const CustomerCard = ({ firstName, lastName, email, avatar, className }) => {
  const classes = useStyles();

  return (
    <Card className={classNames(className, classes.root)}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={avatar}>
            R
          </Avatar>
        }
        title={`${firstName} ${lastName}`}
        subheader={email}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="Editar">
          <EditOutlined />
        </IconButton>
        <IconButton aria-label="Excluir">
          <DeleteOutlineOutlined />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CustomerCard;
