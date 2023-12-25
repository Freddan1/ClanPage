import React, { useState } from "react";
import membersStyle from "./Members.module.css";
import TerroristImage from "../assets/terrorist.jpg";
import cs from "../assets/cs.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSteam } from "@fortawesome/free-brands-svg-icons"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {motion} from "framer-motion"



export default function Members({ id }) {

  const [isAnimationComplete, setAnimationComplete] = useState(false)

  const handleAnimationComplete = () => {
    setAnimationComplete(true)
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      <div className={membersStyle.wrapper}>
        <h3 className={membersStyle.title} id={id}>
          Members
        </h3>
      <div className={membersStyle.outerBox}>
        <div className={membersStyle.memberDescription}>
          <p>
            SlanCS is one of the most renowned esports brands in the world. We compete
            at the highest level in Counter-Strike: Global Offensive with a
            Swedish based roster. Join us as we participate in tournaments
            around the world.
          </p>
        </div>

        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{opacity: 1}}
        transition={{ duration: 2 }}
        >
        <div className={membersStyle.container}>
        <Slider {...settings} className={membersStyle.slider}>
          <div className={membersStyle.box1}>
            <div className={membersStyle.content}>
              <div className={membersStyle.pic}>
                <img src={TerroristImage} alt="pic" />
              </div>
              <div className={membersStyle.profileTitle}>
                <img
                  className={membersStyle.swedenImg}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAS1BMVEUAaqb/zAH/zwCwpmMAZasAZa2vp2X/0AAAZ6sAaqhzi3bewhnZwiBzjXMAZLEAYK5rioGpo2zwxhO/tEKwo2qypGeqpWbCszgAYbRksuCVAAAB0UlEQVR4nO3aSW7CUBRFQUMghDRA+ux/pWEFhQf+AiWnPLX05CMP7zSNsN88rS7aPT4MOX7rigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeLAfvs8I87LzcfZjnA4zvlzTochx5cz3Q3x+nY5zvr9Y8zxxUzrMS63Ode5ddOcr/ivigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDlxzvHTz86Uxf87u/FwuM+elq5ruR/j8mrEJXH0Pub2gaTPC4Thnanv6GXJ8OWP2u420oThQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgO/JE4v2X+aJgZm+DQAAAAAElFTkSuQmCC"
                  width={18}
                  height={14}
                  alt=""
                />
                <span className={membersStyle.nickName}>Cageman</span>
                <div className={membersStyle.bodyText}>
                  <p className={membersStyle.name}>Tobias Burman</p>
                  <FontAwesomeIcon icon={faSteam} className={membersStyle.steamLogo} />

                  <p className={membersStyle.age}></p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={membersStyle.box1}>
            <div className={membersStyle.content}>
              <div className={membersStyle.pic}>
                <img src={TerroristImage} alt="pic" />
              </div>
              <div className={membersStyle.profileTitle}>
                <img
                  className={membersStyle.swedenImg}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAS1BMVEUAaqb/zAH/zwCwpmMAZasAZa2vp2X/0AAAZ6sAaqhzi3bewhnZwiBzjXMAZLEAYK5rioGpo2zwxhO/tEKwo2qypGeqpWbCszgAYbRksuCVAAAB0UlEQVR4nO3aSW7CUBRFQUMghDRA+ux/pWEFhQf+AiWnPLX05CMP7zSNsN88rS7aPT4MOX7rigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeLAfvs8I87LzcfZjnA4zvlzTochx5cz3Q3x+nY5zvr9Y8zxxUzrMS63Ode5ddOcr/ivigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDlxzvHTz86Uxf87u/FwuM+elq5ruR/j8mrEJXH0Pub2gaTPC4Thnanv6GXJ8OWP2u420oThQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgO/JE4v2X+aJgZm+DQAAAAAElFTkSuQmCC"
                  width={18}
                  height={14}
                  alt=""
                />
                <span className={membersStyle.nickName}>Freddan</span>
                <div className={membersStyle.bodyText}>
                  <p className={membersStyle.name}>Fredrik Eriksson</p>
                  <FontAwesomeIcon icon={faSteam} className={membersStyle.steamLogo} />
                  <p className={membersStyle.age}></p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={membersStyle.box1}>
            <div className={membersStyle.content}>
              <div className={membersStyle.pic}>
                <img src={TerroristImage} alt="pic" />
              </div>
              <div className={membersStyle.profileTitle}>
                <img
                  className={membersStyle.swedenImg}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAS1BMVEUAaqb/zAH/zwCwpmMAZasAZa2vp2X/0AAAZ6sAaqhzi3bewhnZwiBzjXMAZLEAYK5rioGpo2zwxhO/tEKwo2qypGeqpWbCszgAYbRksuCVAAAB0UlEQVR4nO3aSW7CUBRFQUMghDRA+ux/pWEFhQf+AiWnPLX05CMP7zSNsN88rS7aPT4MOX7rigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeLAfvs8I87LzcfZjnA4zvlzTochx5cz3Q3x+nY5zvr9Y8zxxUzrMS63Ode5ddOcr/ivigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDlxzvHTz86Uxf87u/FwuM+elq5ruR/j8mrEJXH0Pub2gaTPC4Thnanv6GXJ8OWP2u420oThQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgO/JE4v2X+aJgZm+DQAAAAAElFTkSuQmCC"
                  width={18}
                  height={14}
                  alt=""
                />
                <span className={membersStyle.nickName}>Applet</span>
                <div className={membersStyle.bodyText}>
                  <p className={membersStyle.name}>Rambod Beigi</p>
                  <FontAwesomeIcon icon={faSteam} className={membersStyle.steamLogo} />
                  <p className={membersStyle.age}></p>
                </div>
              </div>
            </div>
          </div>
          <div className={membersStyle.box1}>
            <div className={membersStyle.content}>
              <div className={membersStyle.pic}>
                <img src={TerroristImage} alt="pic" />
              </div>
              <div className={membersStyle.profileTitle}>
                <img
                  className={membersStyle.swedenImg}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAS1BMVEUAaqb/zAH/zwCwpmMAZasAZa2vp2X/0AAAZ6sAaqhzi3bewhnZwiBzjXMAZLEAYK5rioGpo2zwxhO/tEKwo2qypGeqpWbCszgAYbRksuCVAAAB0UlEQVR4nO3aSW7CUBRFQUMghDRA+ux/pWEFhQf+AiWnPLX05CMP7zSNsN88rS7aPT4MOX7rigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeLAfvs8I87LzcfZjnA4zvlzTochx5cz3Q3x+nY5zvr9Y8zxxUzrMS63Ode5ddOcr/ivigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDlxzvHTz86Uxf87u/FwuM+elq5ruR/j8mrEJXH0Pub2gaTPC4Thnanv6GXJ8OWP2u420oThQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgO/JE4v2X+aJgZm+DQAAAAAElFTkSuQmCC"
                  width={18}
                  height={14}
                  alt=""
                />
                <span className={membersStyle.nickName}>Af</span>
                <div className={membersStyle.bodyText}>
                  <p className={membersStyle.name}>Afshin Bagheri</p>
                  <FontAwesomeIcon icon={faSteam} className={membersStyle.steamLogo} />
                  <p className={membersStyle.age}></p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={membersStyle.box1}>
            <div className={membersStyle.content}>
              <div className={membersStyle.pic}>
                <img src={TerroristImage} alt="pic" />
              </div>
              <div className={membersStyle.profileTitle}>
                <img
                  className={membersStyle.swedenImg}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAS1BMVEUAaqb/zAH/zwCwpmMAZasAZa2vp2X/0AAAZ6sAaqhzi3bewhnZwiBzjXMAZLEAYK5rioGpo2zwxhO/tEKwo2qypGeqpWbCszgAYbRksuCVAAAB0UlEQVR4nO3aSW7CUBRFQUMghDRA+ux/pWEFhQf+AiWnPLX05CMP7zSNsN88rS7aPT4MOX7rigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeLAfvs8I87LzcfZjnA4zvlzTochx5cz3Q3x+nY5zvr9Y8zxxUzrMS63Ode5ddOcr/ivigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDhQHigPFgeJAcaA4UBwoDlxzvHTz86Uxf87u/FwuM+elq5ruR/j8mrEJXH0Pub2gaTPC4Thnanv6GXJ8OWP2u420oThQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgOFAeKA8WB4kBxoDhQHCgO/JE4v2X+aJgZm+DQAAAAAElFTkSuQmCC"
                  width={18}
                  height={14}
                  alt=""
                />
                <span className={membersStyle.nickName}>Unknown</span>
                <div className={membersStyle.bodyText}>
                  <p className={membersStyle.name}>Unknown</p>
                <FontAwesomeIcon icon={faSteam} className={membersStyle.steamLogo} />
                  <p className={membersStyle.age}></p>
                </div>
              </div>
            </div>
          </div>
          </Slider>
          <hr/>
        
        </div>
        </motion.div>
        </div>
      </div>
    </>
  );
}
