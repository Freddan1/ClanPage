import React from "react";
import membersStyle from "./Members.module.css";
import TerroristImage from "../assets/terrorist.jpg";

export default function Members() {
  return (
    <>
      <div className={membersStyle.title}>Members</div>
      <div className={membersStyle.container}>
        <div className={membersStyle.box1}>
          <div className={membersStyle.content}>
            <div className={membersStyle.pic}>
              <img src={TerroristImage} alt="pic" />
            </div>
            <div className={membersStyle.profileTitle}>
              Cageman
              <div className={membersStyle.textContent}>
                <p className={membersStyle.pTag}>
                  Cageman assumes the role of in-game leader, serving as the
                  strategic architect and guiding force for the team's success.
                  Known for his sharp tactical acumen, Cageman excels in making
                  critical decisions during intense matches, orchestrating
                  plays, and keeping the team cohesive. As the in-game leader,
                  he not only calls the shots but also ensures effective
                  communication, fostering a collaborative and efficient team
                  environment.
                </p>
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
              Freddan
              <div className={membersStyle.textContent}>
                <p className={membersStyle.pTag}>
                  Freddan, the game-changer, brings a unique and dynamic
                  presence to the team. With an unparalleled ability to shift
                  the momentum of a game, Freddan's playstyle is characterized
                  by innovation and adaptability. As a game-changer, he
                  possesses the uncanny talent to turn the tide of a match with
                  unexpected strategies, unconventional plays, and an instinct
                  for seizing critical moments.
                </p>
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
              Äpplet
              <div className={membersStyle.textContent}>
                <p className={membersStyle.pTag}>
                  Äpplet, the team's resident clown, adds a delightful and
                  unconventional touch to the group dynamics. Known for making
                  seemingly bizarre decisions, Äpplet's approach to the game is
                  refreshingly unpredictable. His playstyle is marked by an
                  element of humor and a willingness to take risks that often
                  leave teammates and opponents alike scratching their heads.
                </p>
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
              Af
              <div className={membersStyle.textContent}>
                <p className={membersStyle.pTag}>
                  In the fast-paced world of competitive gaming, AF's
                  fearlessness stands out. Whether pushing through choke points,
                  leading the charge into enemy territories, or absorbing enemy
                  fire to create openings for teammates, AF's role as the tank
                  is pivotal in setting the tone for the team's aggressive
                  plays.
                </p>
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
              Unknown
              <div className={membersStyle.textContent}>
                <p className={membersStyle.pTag}>
                  Attention, gamers and enthusiasts! Our team is on the lookout
                  for a new member to join our ranks, and we're seeking an
                  individual with a keen focus to complement our dynamic group.
                  As we navigate the competitive gaming landscape, we recognize
                  the significance of concentration, precision, and dedication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
