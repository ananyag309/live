import React, { useEffect, useState } from 'react'
import { profile1 } from '../../assets/images'
import { IoIosNotifications } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'
import { TiThMenu } from 'react-icons/ti'
import "./DashboardWrapper.css"
import  Sidebar  from '../Sidebar'
import UserMenus from './UserMenus'
import ThemeToggle from '../ThemeToggle'
import { useUser } from '@clerk/clerk-react'

interface DashboardWrapperProps {
  children: React.ReactNode;
  contentClassName?: string;
}

const DashboardWrapper: React.FC<DashboardWrapperProps> = ({
    children,
    contentClassName,
}) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showUserMenus, setShowUserMenus] = useState(false);
    const { user } = useUser();
    const [userData, setUserData] = useState(null);
    
    const email = user?.primaryEmailAddress?.emailAddress;
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/user/${email}`);
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);
    return (
      <section className='dashboard__wrapper'>
        <Sidebar 
          show={showSidebar}
          onClose={() => setShowSidebar(false)}
        />
        <main>
            <nav>
                <div className="user__container">
                    <div className="profile" onClick={()=>setShowUserMenus(!showUserMenus)}>
                        <img src={userData?.profileImage} alt="" />
                </div>
                <div className="details">
                    <h3 className="name">{userData?.firstName}</h3>
                    <small className="text__muted">{userData?.email}</small>
                </div>
                {showUserMenus ? (<UserMenus onClose={()=>setShowUserMenus(!showUserMenus)}/>):""} 
                </div>
                <div className="buttons__container">
                    <div className="search__container">
                        <IoSearch/>
                        <input type="text" placeholder="Search items..." />
                    </div>

{/* Theme changer */}
                    {/* <ThemeToggle/> */}


                    <div className="icon__container hover__fill">
                        <IoIosNotifications/>
                    </div>
                    <div className="icon__container menu__btn" onClick={()=>setShowSidebar(!showSidebar)}>
                        <TiThMenu />
                    </div>
                </div>
            </nav>
            <section 
                className={`content ${contentClassName ? contentClassName:""}`}>
                {children}
            </section>
        </main>
    </section>
  )
}

export default DashboardWrapper