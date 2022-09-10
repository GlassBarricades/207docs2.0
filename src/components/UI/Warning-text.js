import { Text, createStyles, useMantineColorScheme } from "@mantine/core";

export function WarningText({ text }) {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const useStyles = createStyles((theme) => ({
    tip: {
      padding: "12px 24px 12px 30px",
      margin: "2em 0",
      borderLeftWidth: "4px",
      borderLeftStyle: "solid",
      backgroundColor: dark ? "rgba(25, 113, 194, 0.2)" : "#f8f8f8",
      position: "relative",
      borderBottomRightRadius: "2px",
      borderTopRightRadius: "2px",
      borderLeftColor: "#ffa500",
      "&:before": {
        content: '"!"',
        backgroundColor: "#f66",
        position: "absolute",
        top: "14px",
        left: "-12px",
        color: "#fff",
        width: "20px",
        height: "20px",
        borderRadius: "100%",
        textAlign: "center",
        lineHeight: "20px",
        fontWeight: "bold",
        fontFamily:
          '"Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif',
        fontSize: "14px",
      },
    },
  }));
  

  const { classes } = useStyles();

  return <Text className={classes.tip}>{text}</Text>;
}
