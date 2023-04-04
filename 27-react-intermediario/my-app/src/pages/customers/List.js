import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/styles';

import CustomerCard from '../../components/CustomerCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    margin: '40px',
    background: 'red',
  },
}));

const List = () => {
  const classes = useStyles();
  const history = useHistory();

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get('https://reqres.in/api/users').then((response) => {
      const { data } = response.data;

      setCustomers(data);
    });
  }, []);

  const handleRomeveCustomer = (id) => {
    axios.delete(`https://reqres.in/api/users/${id}`).then(() => {
      const newCustomersState = customers.filter(
        (customer) => customer.id !== id
      );

      setCustomers(newCustomersState);
    });
  };

  const handleEditCustomer = (id) => {
    history.push(`/customers/edit/${id}`);
  };

  return (
    <>
      <Grid container>
        {customers.map((item) => (
          <Grid item xs={12} md={4} key={item.id}>
            <CustomerCard
              id={item.id}
              firstName={item.first_name}
              lastName={item.last_name}
              email={item.email}
              avatar={item.avatar}
              classeName={classes.card}
              onRemoveCustomer={handleRomeveCustomer}
              onEditCustomer={handleEditCustomer}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default List;
