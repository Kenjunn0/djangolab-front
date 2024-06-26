import {ChakraProvider, ColorModeScript, theme} from "@chakra-ui/react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import router from "./router"
import {RouterProvider} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";


const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
      <QueryClientProvider client={client}>
          <ChakraProvider theme={theme}>
              <ColorModeScript initialColorMode={theme.config.initialColorMode} />
              <RouterProvider router={router} />
          </ChakraProvider>
      </QueryClientProvider>
);