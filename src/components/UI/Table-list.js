import { Table, Accordion, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderRadius: theme.radius.sm,
  },

  item: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    border: "1px solid transparent",
    position: "relative",
    zIndex: 0,
    transition: "transform 150ms ease",

    "&[data-active]": {
      transform: "scale(1.03)",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      boxShadow: theme.shadows.md,
      borderColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2],
      borderRadius: theme.radius.md,
      zIndex: 1,
    },
  },

  chevron: {
    "&[data-rotate]": {
      transform: "rotate(-90deg)",
    },
  },
  control: {
    fontSize: "1.2em",
  },
}));

export function TableList({ cost, data }) {
  const { classes } = useStyles();

  const rows = data.map((element) => (
    <tr key={element}>
      <td>{element}</td>
    </tr>
  ));
  return (
    <Accordion
      mx="auto"
      mt="xl"
      variant="filled"
      classNames={classes}
      className={classes.root}
    >
      <Accordion.Item className={classes.item} value="customization">
        <Accordion.Control className={classes.control}>
          Список маршрутов с дополнительной стоимостью "бездорожье"
        </Accordion.Control>
        <Accordion.Panel>
          <Table fontSize="md">
            <thead>
              <tr>
                <th>{cost}</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
