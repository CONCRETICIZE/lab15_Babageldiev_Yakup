import { CONTENT_TYPE } from '../../../constants';
import './MainArticle.css';

const MainArticle = ({ type }) => {
    return (
        <main>
            {type === CONTENT_TYPE.NEWS && (
                <span>
                    <h1>Новости</h1>
                    <p>Здесь будут отображаться последние 
                        новости</p>
                </span>
            )} 
            {type === CONTENT_TYPE.ABOUT && (
                <span>
                    <h1>«Южный федеральный университет»</h1>
                </span>
            )} 
            {type === CONTENT_TYPE.CONTACTS && (
                <span>
                    <h2>Контакты</h2>
                    <p>Номер телефона: +7 (863) 242-42-42</p>
                </span>
            )} 
        </main>
    );
};

export default MainArticle;