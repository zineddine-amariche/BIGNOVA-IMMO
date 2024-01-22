import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  conatiner: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    flexGrow: 1,
    alignItems:"center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

export default useStyles;
