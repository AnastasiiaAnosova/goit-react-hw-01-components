import css from './styled.module.css';

const Statistics = ({ title, stats }) => {
    console.log(stats);
    return (
        <section className='statistics'>
            {title && <h2 className='title'>{title}</h2>}

            <ul className='stat-list'>
                <li className='item'>
                    <span className='label'>{stats.label}</span>
                    <span className='percentage'></span>
                </li>
                <li className='item'>
                    <span className='label'></span>
                    <span className='percentage'></span>
                </li>
                <li className='item'>
                    <span className='label'></span>
                    <span className='percentage'></span>
                </li>
                <li className='item'>
                    <span className='label'></span>
                    <span className='percentage'></span>
                </li>
            </ul>
        </section>
  );
};

export default Statistics