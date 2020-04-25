import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  //console.log(props);
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  //console.log(results);
  const filterResultByPrice = (price) => {
    return results.filter((results) => {
      return results.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)} //we can also pass it llike searchApi
      ></SearchBar>
      {errorMessage ? (
        <Text style={{ marginLeft: 15 }}>{errorMessage}</Text>
      ) : null}
      <ScrollView>
        <ResultsList
          results={filterResultByPrice("$")}
          title="Cost Effective"
        ></ResultsList>
        <ResultsList
          results={filterResultByPrice("$$")}
          title="Bit Pricier"
        ></ResultsList>
        <ResultsList
          results={filterResultByPrice("$$")}
          title="Big Spender"
        ></ResultsList>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
