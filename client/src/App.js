import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  HomePage,
  AboutPage,
  TeamsPage,
  ContactPage,
  FundsPage,
} from './views';

import { ScrollToTop, MainLayout } from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path='about' element={<AboutPage />} />
              <Route path='ourteams' element={<TeamsPage />} />
              <Route path='funds' element={<FundsPage />} />
              <Route path='contactus' element={<ContactPage />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </Router>
    </ThemeProvider>
  );
}

export default App;
