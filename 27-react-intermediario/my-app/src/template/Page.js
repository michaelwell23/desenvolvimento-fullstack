import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    padding: '20px 0px',
  },
}));

const Page = ({ title, Component }) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h3">{title}</Typography>
      <Component />
    </>
  );
};

export default Page;
