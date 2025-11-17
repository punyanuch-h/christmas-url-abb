import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
import GlobalStyles from "./GlobalStyles";
import Root from "./Root";

import Header from "./sections/Header";
import Feature from "./sections/Feature";
import Hero from "./sections/Hero";
import Plans from "./sections/Plans";
import BenefitsStack from "./sections/Benefits";
import FAQ from "./sections/FAQ";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Root>
        <Header />
        <Hero />
        <Feature />
        <BenefitsStack />
        <Plans />
        <FAQ />
        <Testimonials />
        <Footer />
      </Root>
    </ThemeProvider>
  );
}

export default App;
