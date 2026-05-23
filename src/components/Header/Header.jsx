import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.css';
import avatar from '../../assets/avatar_2.png';

const Header = () => {
    const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

    useEffect(() => {
        const root = document.documentElement;
        if (dark) root.classList.add('dark');
        else root.classList.remove('dark');
        localStorage.setItem('theme', dark ? 'dark' : 'light');
    }, [dark]);

    return (
        <header className="header">
            <div className="header__top">
                <div className="header__brand">
                    <img src={avatar} alt="avatar" className="header__avatar" />
                    <strong className="header__title">Lab 15</strong>
                </div>
                <button className="theme-toggle" onClick={() => setDark(d => !d)} aria-label="Toggle theme">
                    {dark ? '🌙' : '☀️'}
                </button>
            </div>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-link">
                        <Link to="/" className="header__nav-link-item">
                            Новости
                        </Link>
                    </li>
                    <li className="header__nav-link">
                        <Link to="/about" className="header__nav-link-item">
                            О проекте
                        </Link>
                    </li>
                    <li className="header__nav-link">
                        <Link to="/contacts" className="header__nav-link-item">
                            Контакты
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
