import {  NavLink,} from 'react-router-dom';
// import img1 from '../assets/img1.jpg';
// import img2 from '../assets/img2.jpg';
// import img3 from '../assets/img3.jpg';
// import img4 from '../assets/img4.jpg';

function Index(){
    return(
        <body>
            <div className="top-bar">
                <h2><a href="/dashboard">Dashboard</a></h2>
                <form action="">
                    <div className="search">
                        <i className='bx bx-search'></i>
                        <input type="search"  placeholder='search'/>
                        <i className='bx bx-command message-icon'></i>

                    </div>
                </form>
                <div className="dash-icons">
                    <i  className='bx bx-message-rounded-dots message-icon'></i>
                    <i className='bx bx-bell message-icon'></i>
                </div>
            </div>
                <header className='header'>
                    <nav className="navbar">
                        <ul>
                            <li>
                                <NavLink to='/dashboard' ><i className='bx bxs-dashboard'></i> Dashbard <i className='bx bx-chevron-right'></i></NavLink>
                                
                            </li>
                            <li>
                                <NavLink to='/attendance'><i className='bx bxs-calendar-check'></i> Attendance <i className='bx bx-chevron-right'></i></NavLink>
                                
                            </li>
                            <li>
                                <NavLink to='/employee'><i className='bx bx-user'></i> Employee <i className='bx bx-chevron-right'></i></NavLink>
                                
                            </li>
                            <li>
                                <NavLink to='/checklist'><i className='bx bx-list-check'></i> Checklist <i className='bx bx-chevron-right'></i></NavLink>
                                
                            </li>
                            
                            
                            <li >
                                <NavLink to='/payroll'><i className='bx bxs-calendar-alt'></i> Payroll <i className='bx bx-chevron-right'></i></NavLink>
                                
                            </li>
                            
                        </ul>
                    </nav>
                    <div className="card">
                        <div className="card-top">
                            <div className="top-img">
                                {/* <img src={img1} alt="" />
                                <img src={img2} alt="" />
                                <img src={img3} alt="" /> */}
                            </div>
                            <i className='bx bxs-video box-icon'></i>
                        </div>
                        <h4>Daily Meetings</h4>
                        <p>9:00am - 10:00pm On Zoom</p>
                        <button>Join</button>
                    </div>
                    <div className="header-foot">
                        {/* <img src={img4} alt="" /> */}
                        <div className="foot-details">
                            <h4>Elizabeth M</h4>
                            <p>elizabeth12@gmail.com</p>
                        </div>
                        <i className='bx bx-chevron-down bx-down'></i>
                    </div>
                </header>
        </body>
    );
}


export default Index
