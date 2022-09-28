import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { TweenMax, Power2, Power3, Expo, Bounce, Circ } from "gsap";

const Home: NextPage = () => {
  useEffect(() => {
    TweenMax.to(".left", 2, {
      delay: .8,
      width: "50%",
      ease: Power2.easeInOut,
    });

    TweenMax.to(".right", 2, {
      delay: .6,
      width: "50%",
      ease: Power3.easeInOut,
    });

    TweenMax.from('.nav', 2, {
      delay: 0,
      opacity: 0,
      ease: Expo.easeInOut
    })

    TweenMax.to('.nav', 2, {
      delay: .8,
      opacity: 1,
      ease: Expo.easeInOut
    })
    

    TweenMax.from('.text h1', 2, {
      delay: 0,
      x: 1000,
      ease: Circ.easeInOut
    })

    TweenMax.to('.text h1', 2, {
      delay: .6,
      x: 0,
      ease: Circ.easeInOut
    })

    TweenMax.from('.text p', 2, {
      delay: 0,
      x: 1000,
      ease: Circ.easeInOut
    })

     TweenMax.to('.text p', 2, {
      delay: .7,
      x: 0,
      ease: Circ.easeInOut
    })

    TweenMax.to('.karina', 2, {
      delay: 1.5,
      width: '800px',
      ease: Power2.easeInOut
    })

    TweenMax.staggerFrom('.bottomnav ul li', 2, {
      delay: 0,
      x: 1000,
      ease: Circ.easeInOut
    }, 0.08)

    TweenMax.staggerTo('.bottomnav ul li', 2, {
      delay: 1,
      x: 0,
      ease: Circ.easeInOut
    },0.08)

    TweenMax.from('.info', 2, {
      delay: 0,
      y: 300,
      ease: Circ.easeInOut
    })

    TweenMax.to('.info', 2, {
      delay: 1.5,
      y: 0,
      ease: Circ.easeInOut
    })

    TweenMax.from('.name', 2, {
      delay: 0,
      x: -600,
      ease: Circ.easeInOut
    })

    TweenMax.to('.name', 2, {
      delay: 1.5,
      x: 0,
      ease: Circ.easeInOut
    })

  }, []);

  return (
    <div className={styles.container}>
      <div className="left"></div>

      <div className="right"></div>

      <nav className="nav">
        <ul>
          <li className="logo">unsplash</li>
          <li className="menu">
            <i className="fa fa-bars"></i>
          </li>
          <li className="collection">collection</li>
          <li className="explore">explore</li>
          <li className="search">search</li>
          <li className="profile">
            <div className="img"></div>
          </li>
        </ul>
      </nav>

      <div className="content">
        <div className="img-wrapper">
          <div className="karina"></div>
        </div>

        <div className="info">
          <ul>
            <li>unsplash</li>
            <li>@Karinates</li>
            <li>Karinates.com</li>
            <li>
              <i className="fa fa-share-alt"></i>
            </li>
          </ul>
        </div>

        <div className="text">
          <h1>Karina tes</h1>
          <p>Fashion Photographer</p>
        </div>

        <div className="name">Karina tes</div>

        <div className="bottomnav">
          <ul>
            <li>profile</li>
            <li>portfolio</li>
            <li>contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
