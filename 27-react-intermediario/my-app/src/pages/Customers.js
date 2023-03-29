import { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/styles';

import CustomerCard from '../components/CustomerCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    margin: '40px',
    background: 'red',
  },
}));

const Customers = () => {
  const classes = useStyles();
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get('https://reqres.in/api/users').then((response) => {
      const { data } = response.data;

      setCustomers(data);
    });
  }, []);

  return (
    <>
      <Grid container>
        {customers.map((item) => (
          <Grid item xs={12} md={4}>
            <CustomerCard
              firstName={item.first_name}
              lastName={item.last_name}
              email={item.email}
              avatar={item.avatar}
              classeName={classes.card}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Customers;
