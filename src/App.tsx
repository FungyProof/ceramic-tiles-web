import CeramicClient from '@ceramicnetwork/http-client'
import { Box } from '@chakra-ui/layout'
import { HashRouter, RouteProps, Route, Switch } from "react-router-dom";
import * as React from 'react'
import Footer from './components/Footer'
import Document from './Document'
import Home from './Home'

export interface DocumentInterface {
  docId: string
  timestamp?: string
}

const API_URL = 'https://ceramic-clay.3boxlabs.com'
export const ceramic = new CeramicClient(API_URL)

interface AppProps extends RouteProps {
  docId?: string
}

export const App = (props: AppProps) => {
  return (
    <>
      <Box minH="90vh">
        <HashRouter>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/document/:docId">
              <Document />
            </Route>
          </Switch>
        </HashRouter>
      </Box>
      <Footer />
    </>
  )
}
