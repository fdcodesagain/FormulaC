import { List, ListItem, Text } from "@mantine/core";

export function Rules() {
  const rules = [
    {
      id: 1,
      text: "Have friends",
      children: [],
    },
    {
      id: 2,
      text: "Do not give birth to a child",
      children: [],
    },
    {
      id: 3,
      text: "Do not get married",
      children: [],
    },
    {
      id: 4,
      text: "Know thyself",
      children: [],
    },
    {
      id: 5,
      text: "Forget what society has taught you",
      children: [],
    },
    {
      id: 6,
      text: "Fuck future. Focus on making current generation's life better",
      children: [],
    },
    {
      id: 7,
      text: "There is an optimal mindset that everyone should have as a baseline",
      children: [],
    },
    {
      id: 8,
      text: "Help your friends become the best version of us",
      children: [],
    },
    {
      id: 9,
      text: "Understand that humans are dumb, their opinions do not matter, but..",
      children: [],
    },
    {
      id: 10,
      text: "This is not hedonism",
      children: [],
    },
    {
      id: 11,
      text: "Argument for taking and not giving.",
      children: [],
    },
  ];

  return (
    <List type="ordered">
      {rules.map((rule) => (
        <ListItem key={rule.id}>
          <Text size="lg">{rule.text}</Text>
          {rule?.children && (
            <List type="ordered" withPadding>
              {rule?.children.map((child: { id: number; text: string }) => (
                <ListItem key={child.id}>
                  <Text size="md">{child.text}</Text>
                </ListItem>
              ))}
            </List>
          )}
        </ListItem>
      ))}
    </List>
  );
}
