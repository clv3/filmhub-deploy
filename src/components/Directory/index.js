import React from 'react';
import FilmHub1 from './../../assets/FilmHub1.png';
import FilmHub2 from './../../assets/FilmHub2.png';
import './styles.scss';

const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap">
                <div 
                  className="item"
                  style={{
                    backgroundImage: `url(${FilmHub1})`
                  }}
                >
                    <a>
                       FilmHub1 
                    </a>

                </div>
                <div
                  className="item"
                  style={{
                    backgroundImage: `url(${FilmHub2})`
                  }}
                >
                    <a>
                       FilmHub2
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Directory;