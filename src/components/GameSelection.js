import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { FaUser, FaSignOutAlt, FaArrowLeft } from 'react-icons/fa'; // Import icons

//Import SDG images
import sdg01 from '../assets/sdgs/01.jpg';
import sdg02 from '../assets/sdgs/02.jpg';
import sdg03 from '../assets/sdgs/03.jpg';
import sdg04 from '../assets/sdgs/04.jpg';
import sdg05 from '../assets/sdgs/05.jpg';
import sdg06 from '../assets/sdgs/06.jpg';
import sdg07 from '../assets/sdgs/07.jpg';
import sdg08 from '../assets/sdgs/08.jpg';
import sdg09 from '../assets/sdgs/09.jpg';
import sdg10 from '../assets/sdgs/10.jpg';
import sdg11 from '../assets/sdgs/11.jpg';
import sdg12 from '../assets/sdgs/12.jpg';
import sdg13 from '../assets/sdgs/13.jpg';
import sdg14 from '../assets/sdgs/14.jpg';
import sdg15 from '../assets/sdgs/15.jpg';
import sdg16 from '../assets/sdgs/16.jpg';
import sdg17 from '../assets/sdgs/17.jpg';
import sdg_logo from '../assets/sdgs/sdg_logo.jpg';

const sdgs = [
    { id: 1, name: 'No Poverty', image: sdg01 },
    { id: 2, name: 'Zero Hunger', image: sdg02 },
    { id: 3, name: 'Good Health', image: sdg03 },
    { id: 4, name: 'Quality Education', image: sdg04 },
    { id: 5, name: 'Gender Equality', image: sdg05 },
    { id: 6, name: 'Clean Water and Sanitation', image: sdg06 },
    { id: 7, name: 'Affordable and Clean Energy', image: sdg07 },
    { id: 8, name: 'Decent Work and Economic Growth', image: sdg08 },
    { id: 9, name: 'Industry, Innovation, and Infrastructure', image: sdg09 },
    { id: 10, name: 'Reduced Inequality', image: sdg10 },
    { id: 11, name: 'Sustainable Cities', image: sdg11 },
    { id: 12, name: 'Responsible Consumption', image: sdg12 },
    { id: 13, name: 'Climate Action', image: sdg13 },
    { id: 14, name: 'Life Below Water', image: sdg14 },
    { id: 15, name: 'Life on Land', image: sdg15 },
    { id: 16, name: 'Peace and Justice', image: sdg16 },
    { id: 17, name: 'Partnership for the Goals', image: sdg17 },
    { id: sdg_logo, name: 'SDG', image: sdg_logo }
];

const GameSelection = () => {
    const navigate = useNavigate();
    // const [randomSDGs, setRandomSDGs] = useState([]);

    // // Randomize SDGs every 4 days
    // useEffect(() => {
    //     const getRandomSDGs = () => {
    //         let selected = [];
    //         while (selected.length < 4) {
    //             const randomIndex = Math.floor(Math.random() * sdgs.length);
    //             if (!selected.includes(sdgs[randomIndex])) {
    //                 selected.push(sdgs[randomIndex]);
    //             }
    //         }
    //         setRandomSDGs(selected);
    //     };
    //     getRandomSDGs();
    // }, []);

    const startGame = (sdgId) => {
        switch (sdgId) {
            case 4:
                navigate('/games/sdg4');
                break;
            case 8:
                navigate('/games/sdg8');
                break;
            case 12:
                navigate('/games/sdg12');
                break;
            case 16:
                navigate('/games/sdg16');
                break;
            default:
                alert('This game is not yet available. Stay tuned!');
        }
    };
    

    // const startGame = (sdgId) => {
    //     navigate(`/games/SDGGame/${sdgId}`);
    // };

    const goToLearnPage = (sdgId) => {
        navigate(`/games/learn/${sdgId}`);
    };

    const goToQuizPage = (sdgId) => {
        navigate(`/games/quiz/${sdgId}`);
    };


    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/');
    };

    const goToProfile = () => {
        navigate('/profile');
    };

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="game-selection-container">
            <div className="top-nav">
                <button onClick={goBack} className="back-button">
                    <FaArrowLeft /> Back
                </button>
                <div className="nav-buttons-right">
                    <button onClick={goToProfile} className="nav-button">
                        <FaUser /> Profile
                    </button>
                    <button onClick={handleLogout} className="logout-button">
                        <FaSignOutAlt /> Logout
                    </button>
                </div>
            </div>
            <div className='horizontal-line'></div>
            

            <h1>Play SDGs</h1>
            <div className="sdg-container">
                {sdgs.map((sdg) => (
                    <div key={sdg.id} className="sdg-box">
                        <div className="sdg-image-container">
                            <img src={sdg.image} alt={sdg.name} className="sdg-image" />
                       
                        </div>
                        {/* <h2>{sdg.name}</h2> */}
                        <div className="game-buttons">
                            <button className="game-btn learn-btn" onClick={() => goToLearnPage(sdg.id)}>Learn</button>
                            <button className="game-btn start-btn" onClick={() => startGame(sdg.id)}>Start Game</button>
                            <button className="game-btn quiz-btn" onClick={() => goToQuizPage(sdg.id)}>Quiz</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='horizontal-lines'></div>
            <div className="footer">
                <p>Sustainability Awareness Gaming App</p>
                <p>University of Johannesburg</p>
                <p>2024</p>
            </div>

        </div>
    );
};

export default GameSelection;
