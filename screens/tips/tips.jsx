import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from './component/header';
import Quotes from './component/quotes';
import Excercise from './component/excercise';

const Tip = () => {
  return (
    <>
     <Header/>
     <Excercise/>
     <Quotes/>
    </>
  );
};

export default Tip;

const styles = StyleSheet.create({});
