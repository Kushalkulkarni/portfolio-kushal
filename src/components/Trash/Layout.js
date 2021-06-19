import React from 'react';
import ProjectList from '../ProjectsStuff/ProjectsList';
import BlogsList from '../BlogsStuff/BlogsList';
import NewMenu from '../Navigation/NewMenu';
import TopMenu from './TopMenu';
import Landing from '../Home/Landing';
import TabDialog from '../Tab/TabDialog';
import AppBarTop from '../Navigation/AppBarTop';
// Pages
import Projects from '../../Layout/Projects';
import Blogs from '../../Layout/Blogs';
import About from '../../Layout/About';
import Contact from '../../Layout/Contact';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

export default function Layout() {
  //const classes = useStyles();

  const [openTab, setOpenTab] = React.useState(false);
  const handleClickOpenTab = () => {
    setOpenTab(true);
  };
  const handleCloseTab = () => {
    setOpenTab(false);
    setValue(false);
  };

  // NEW Try
  const [value, setValue] = React.useState(5);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    handleClickOpenTab();
    console.log(newValue)
  };

  return (
    <>
      {/* <Router>
        <AppBarTop/>

        <Route path="/landing" component={Landing}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/blogs" component={Blogs}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>

      </Router>
      <NewMenu onOpenTab={handleChange} project={<ProjectList />} blogs={<BlogsList value={value}/>} />
      {openTab && <TabDialog onCloseTab={handleCloseTab} tabNumber={value}/>} */}
    </>
  );
}