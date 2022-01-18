import React from 'react'
import './App.css'
import AboutMe from './Components/AboutMe'
import SkillList from './Components/Skills'
import Projects from './Components/Projects'
import ContactMe from './Components/ContactMe'
export default class App extends React.Component
{
  render(){
  return (
    <div id="wholewebsite">
    <div id="section1">
      <AboutMe/>
    </div>
    <div id="section2">
      <SkillList />
    </div>
    <div id='section3'>
      <Projects/>
    </div>
    <div id='section4'>
    <ContactMe/>
    </div>
    </div>

  )
}
}
