import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from './component/header';
import Quotes from './component/quotes';

const Tip = () => {
  return (
    <>
     <Header/>
     <Quotes/>
    </>
  );
};

export default Tip;

const styles = StyleSheet.create({});
