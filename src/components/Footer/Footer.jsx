import './Footer.css';

const Footer = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <footer className='footer'>
            <p className='footer__info'>
                Дата создания: 22 апреля 2026 года
            </p>
            <p className='footer__info'>
                Сегодняшняя дата: {formattedDate}
            </p>
            <p className='footer__info'>
                Автор: Бабагелдиев Якуп
            </p>
        </footer>
    );
};

export default Footer;
