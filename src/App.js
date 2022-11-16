import { Layout } from 'antd';
import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import AppHeader from '../src/components/Common/Header'
import AppHome from '../src/pages/Home'
import AppFooter from './components/Common/Footer';
import Iphone from './pages/Iphone';
import About from './pages/About';
import Faq from './pages/Faq';


const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Header className='header'><AppHeader /></Header>
          <Content>
            <Routes>
              <Route path='/' element={<AppHome />}></Route>
              <Route path='/iphone' element={<Iphone />}></Route>
              <Route path='/ipad' element={<Iphone />}></Route>
              <Route path='/tv' element={<Iphone />}></Route>
              <Route path='/watch' element={<Iphone />}></Route>
              <Route path='/faq' element={<Faq />}></Route>
              <Route path='/about' element={<About />}></Route>
            </Routes>
          </Content>
        </Router>
        <Footer><AppFooter /></Footer>
      </Layout>
    </div>
  );
}

export default App;
