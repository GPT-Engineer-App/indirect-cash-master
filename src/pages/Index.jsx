import React, { useState } from "react";
import { Container, VStack, Heading, Input, Button, Text, Box, FormControl, FormLabel, NumberInput, NumberInputField, HStack, Divider } from "@chakra-ui/react";
import { FaCalculator } from "react-icons/fa";

const Index = () => {
  const [netIncome, setNetIncome] = useState(0);
  const [depreciation, setDepreciation] = useState(0);
  const [amortization, setAmortization] = useState(0);
  const [accountsReceivable, setAccountsReceivable] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [accountsPayable, setAccountsPayable] = useState(0);
  const [purchaseInvestments, setPurchaseInvestments] = useState(0);
  const [saleInvestments, setSaleInvestments] = useState(0);
  const [purchasePPE, setPurchasePPE] = useState(0);
  const [salePPE, setSalePPE] = useState(0);
  const [issueStocks, setIssueStocks] = useState(0);
  const [buybackStocks, setBuybackStocks] = useState(0);
  const [borrowLoans, setBorrowLoans] = useState(0);
  const [repayLoans, setRepayLoans] = useState(0);
  const [dividends, setDividends] = useState(0);
  const [cashFlow, setCashFlow] = useState(null);

  const calculateCashFlow = () => {
    const operatingActivities = parseFloat(netIncome) + parseFloat(depreciation) + parseFloat(amortization) - parseFloat(accountsReceivable) - parseFloat(inventory) + parseFloat(accountsPayable);
    const investingActivities = -parseFloat(purchaseInvestments) + parseFloat(saleInvestments) - parseFloat(purchasePPE) + parseFloat(salePPE);
    const financingActivities = parseFloat(issueStocks) - parseFloat(buybackStocks) + parseFloat(borrowLoans) - parseFloat(repayLoans) - parseFloat(dividends);
    const totalCashFlow = operatingActivities + investingActivities + financingActivities;

    setCashFlow({
      operatingActivities,
      investingActivities,
      financingActivities,
      totalCashFlow,
    });
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" mb={4}>
          Indirect Cash Flow Calculator
        </Heading>
        <FormControl>
          <FormLabel>Net Income</FormLabel>
          <NumberInput value={netIncome} onChange={(valueString) => setNetIncome(parseFloat(valueString) || 0)}>
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Depreciation</FormLabel>
          <NumberInput value={depreciation} onChange={(valueString) => setDepreciation(parseFloat(valueString) || 0)}>
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Amortization</FormLabel>
          <NumberInput value={amortization} onChange={(valueString) => setAmortization(parseFloat(valueString) || 0)}>
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Accounts Receivable</FormLabel>
          <NumberInput value={accountsReceivable} onChange={(valueString) => setAccountsReceivable(parseFloat(valueString) || 0)}>
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Inventory</FormLabel>
          <NumberInput value={inventory} onChange={(valueString) => setInventory(parseFloat(valueString) || 0)}>
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Accounts Payable</FormLabel>
          <NumberInput value={accountsPayable} onChange={(valueString) => setAccountsPayable(parseFloat(valueString) || 0)}>
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <Divider />
        <FormControl>
          <FormLabel>Purchase of Investments</FormLabel>
          <NumberInput value={purchaseInvestments} onChange={(valueString) => setPurchaseInvestments(parseFloat(valueString) || 0)}>
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Sale of Investments</FormLabel>
          <NumberInput value={saleInvestments} onChange={(valueString) => setSaleInvestments(parseFloat(valueString) || 0)}>
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Purchase of Property, Plant, and Equipment</FormLabel>
          <NumberInput value={purchasePPE} onChange={(valueString) => setPurchasePPE(parseFloat(valueString) || 0)}>
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Sale of Property, Plant, and Equipment</FormLabel>
          <NumberInput value={salePPE} onChange={(valueString) => setSalePPE(parseFloat(valueString) || 0)}>
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <Divider />
        <FormControl>
          <FormLabel>Issue of Stocks</FormLabel>
          <NumberInput value={issueStocks} onChange={(valueString) => setIssueStocks(parseFloat(valueString) || 0)}>
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Buyback of Stocks</FormLabel>
          <NumberInput value={buybackStocks} onChange={(valueString) => setBuybackStocks(parseFloat(valueString) || 0)}>
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Borrowing of Loans</FormLabel>
          <NumberInput value={borrowLoans} onChange={(valueString) => setBorrowLoans(parseFloat(valueString) || 0)}>
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Repayment of Loans</FormLabel>
          <NumberInput value={repayLoans} onChange={(valueString) => setRepayLoans(parseFloat(valueString) || 0)}>
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Dividend Payments</FormLabel>
          <NumberInput value={dividends} onChange={(valueString) => setDividends(parseFloat(valueString) || 0)}>
            <NumberInputField />
          </NumberInput>
        </FormControl>
        <Button leftIcon={<FaCalculator />} colorScheme="teal" onClick={calculateCashFlow}>
          Calculate Cash Flow
        </Button>
        {cashFlow && (
          <Box mt={8} p={4} borderWidth={1} borderRadius="lg" width="100%">
            <Heading as="h2" size="md" mb={4}>
              Cash Flow Results
            </Heading>
            <Text>Operating Activities: ${cashFlow.operatingActivities.toFixed(2)}</Text>
            <Text>Investing Activities: ${cashFlow.investingActivities.toFixed(2)}</Text>
            <Text>Financing Activities: ${cashFlow.financingActivities.toFixed(2)}</Text>
            <Text fontWeight="bold">Total Cash Flow: ${cashFlow.totalCashFlow.toFixed(2)}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
