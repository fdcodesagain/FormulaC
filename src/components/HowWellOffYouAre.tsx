import { Button, Container, Flex, Progress, Stack, Text, Title } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

function HowWellOffYouAre() {
  // Mock data - in real app this would come from props or API
  const userStats = [
    { label: "Income", value: "$50k", globalAvg: "$10k", percentile: 85 },
    { label: "Education", value: "Master's", globalAvg: "High School", percentile: 92 },
    { label: "Internet Access", value: "Yes", globalAvg: "No", percentile: 88 },
    { label: "Healthcare", value: "Insured", globalAvg: "Uninsured", percentile: 90 },
    { label: "Life Expectancy", value: "79 yrs", globalAvg: "73 yrs", percentile: 95 },
  ];

  const overallPercentile = 88; // Average of all factors
  const tier = overallPercentile > 95 ? "S" : overallPercentile > 85 ? "A" : overallPercentile > 70 ? "B" : overallPercentile > 50 ? "C" : "D";

  return (
    <Container p="md" style={{ border: "1px solid var(--mantine-color-gray-6)", borderRadius: "var(--mantine-radius-md)" }}>
      <Title order={2} mb="sm" fw={500}>
        Life Quality Assessment
      </Title>
      <Text size="lg" mb="xl">
        You're in the top {100 - overallPercentile}% globally • Tier {tier}
      </Text>

      <Progress
        value={overallPercentile}
        size="lg"
        mb="xl"
        // label={`${overallPercentile}% better than global average`}
        style={{ height: 28 }}
      />

      <Stack gap="xl">
        {userStats.map((stat, index) => (
          <div key={index}>
            <Flex justify="space-between" mb="xs">
              <div>
                <Text fw={500}>{stat.label}</Text>
                <Text size="sm" c="dimmed">
                  {stat.value} vs global {stat.globalAvg}
                </Text>
              </div>
              <Text size="sm" c="blue.5">
                Top {100 - stat.percentile}%
              </Text>
            </Flex>
            <Progress value={100 - stat.percentile} color={stat.percentile > 90 ? "teal" : stat.percentile > 75 ? "blue" : "gray"} size="sm" />
          </div>
        ))}
      </Stack>

      <Button variant="light" fullWidth mt="xl" rightSection={<IconInfoCircle size={16} />}>
        How we calculate life quality
      </Button>
    </Container>
  );
}

export default HowWellOffYouAre;
