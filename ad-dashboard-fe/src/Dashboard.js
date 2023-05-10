import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <Box p="4">
      <Heading as="h1" size="xl" mb="4">
        Dashboard
      </Heading>
      <Flex justifyContent="space-between" flexWrap="wrap">
        <Box w={{ base: '100%', sm: '48%', md: '30%' }} mb="4">
          <Stat>
            <StatLabel>Users</StatLabel>
            <StatNumber>345</StatNumber>
          </Stat>
        </Box>
        <Box w={{ base: '100%', sm: '48%', md: '30%' }} mb="4">
          <Stat>
            <StatLabel>Sales</StatLabel>
            <StatNumber>$15,345</StatNumber>
          </Stat>
        </Box>
        <Box w={{ base: '100%', sm: '48%', md: '30%' }} mb="4">
          <Stat>
            <StatLabel>Revenue</StatLabel>
            <StatNumber>$26,745</StatNumber>
          </Stat>
        </Box>
      </Flex>
    </Box>
  );
};

export default Dashboard;
