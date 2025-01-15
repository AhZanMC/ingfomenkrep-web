import React from "react";
import MDXComponents from "@theme-original/MDXComponents";
import Button from '@site/src/components/Button';
import Card from '@site/src/components/Card';
import CardBody from '@site/src/components/Card/CardBody';
import CardFooter from '@site/src/components/Card/CardFooter';
import CardHeader from '@site/src/components/Card/CardHeader';
import CardImage from '@site/src/components/Card/CardImage';
import CodeBlock from "@theme-original/CodeBlock";
import Details from "@theme/Details";
import Tabs from "@theme-original/Tabs";
import TabItem from "@theme-original/TabItem";
import DocCardList from "@theme-original/DocCardList";
import { Icon } from '@iconify/react';

export default {
  ...MDXComponents,
  Button,
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter, 
  CardImage,
  Details: Details,
  CodeBlock: CodeBlock,
  Tabs: Tabs,
  TabItem: TabItem,
  Admonition: MDXComponents.admonition,
  DocCardList: DocCardList,
  IIcon: Icon,
};
