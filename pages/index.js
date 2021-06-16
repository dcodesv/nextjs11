import Head from 'next/head'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import compu from '../public/image2.jpg'
import robot from '../public/image.jpg'


export default function Home() {
  const [loading, setLoading] = useState(false)
  const [src, setSrc] = useState(robot)
  
  useEffect(()=>{
    setInterval(()=>{
      setLoading(true)
      setSrc(robot)      
    }, 3000)
  }

  )

  return (
    <>
      <h1>Primeros pasos con Nextjs 11</h1>
      <Image 
        src={src} 
        alt="Robot con mirada hermosa" 
        placeholder="blur"/>
        <h2>After Image</h2>
    </>
  )
}
