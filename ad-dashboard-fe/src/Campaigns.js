import { useState, useEffect } from 'react';
import { Link, Grid, Box } from '@chakra-ui/react';

function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:4000/campaigns');
      const data = await response.json();
      setCampaigns(data.campaigns);
    }

    fetchData();
  }, []);

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={10} marginX={50} marginY={20}>
      {campaigns.map((campaign) => (
        <Box
          key={campaign.id}
          bg="gray.100"
          p={4}
          border={10}
          borderColor="black"
          borderWidth={5}
          borderStyle="solid"
        >
          <Link as={Link} to={`/dashboard?cid=${campaign.id}`}>
            <p>{campaign.id}</p>
            <h2>{campaign.name}</h2>
          </Link>
        </Box>
      ))}
    </Grid>
  );
}

export default Campaigns;
