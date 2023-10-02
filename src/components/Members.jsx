import React from 'react'
import membersStyle from './Members.module.css'
import TerroristImage from '../assets/terrorist.jpg'

export default function Members() {
  return (
    <>
        <div className={membersStyle.title}>
            Members
        </div>
        <div className={membersStyle.container}>
            <div className={membersStyle.box1}>
                <div className={membersStyle.content}>
                    <div className={membersStyle.pic}>
                        <img src={TerroristImage} alt="pic"  />
                    </div>
                    <div className={membersStyle.profileTitle}>Cageman</div>
                </div>
            </div>
            <div className={membersStyle.box1}>
            <div className={membersStyle.content}>
                    <div className={membersStyle.pic}>
                        <img src={TerroristImage} alt="pic"  />
                    </div>
                    <div className={membersStyle.profileTitle}>Freddan</div>
                </div>
            </div>
            <div className={membersStyle.box1}>
            <div className={membersStyle.content}>
                    <div className={membersStyle.pic}>
                        <img src={TerroristImage} alt="pic"  />
                    </div>
                    <div className={membersStyle.profileTitle}>Äpplet</div>
                </div>
            </div>
            <div className={membersStyle.box1}>
                <div className={membersStyle.content}>
                        <div className={membersStyle.pic}>
                            <img src={TerroristImage} alt="pic"  />
                        </div>
                        <div className={membersStyle.profileTitle}>Af</div>
                    </div>
            </div>
            <div className={membersStyle.box1}>
            <div className={membersStyle.content}>
                    <div className={membersStyle.pic}>
                        <img src={TerroristImage} alt="pic"  />
                    </div>
                    <div className={membersStyle.profileTitle}>Unknown</div>
                </div>
            </div>
        </div>
    </>
  )
}
