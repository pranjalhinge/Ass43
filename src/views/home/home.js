import React from 'react'
import  './home.css'
import collegenotes from './collegenotes.avif'
import travellingbucket from './travelling-bucket.avif'
import booklist from './booklist.jpg'
import Featurecard from './../../components/featureCard/feature'

function home() {
  return (
    <div className='main-color home-container'>
        <h1 className='text' >Note Application 📝</h1>
        <div className='fecard'>
        <Featurecard  featureImg={collegenotes}  featureDec='College Notes Gallery is a system that allows students, teachers, and administrators to manage, upload, and download course notes online.' />
        <Featurecard featureImg={travellingbucket} featureDec='A travel bucket list is a list of places and experiences you want to visit or accomplish in your lifetime.' />
        <Featurecard featureImg={booklist} featureDec='Booklist provides reviews of books, audiobooks, and reference sources for all ages and genres. It also includes columns, features, and online exclusive reviews. ' />
        </div>
       
        
    </div>
  )
}

export default home