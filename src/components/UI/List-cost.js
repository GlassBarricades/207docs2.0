import { List, Title } from "@mantine/core";

export function ListCost({ data, title }) {
  return (
    <>
        <Title mt="md" order={4}>{title}</Title>
        <List size="xl">
        {data.map((item) => {
            return <List.Item key={item}>{item}</List.Item>
        })}
    </List>
    </>
  );
}
