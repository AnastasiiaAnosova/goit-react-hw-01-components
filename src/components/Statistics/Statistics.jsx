import css from './styled.module.css';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Statistics = ({ title, stats }) => {
    console.log(stats);
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.stat_list}>
                {stats.map((stat) => {
                    return <li className={css.item} key={stat.id} style={{backgroundColor: getRandomColor()}}>
                    <span className={css.label}>{stat.label}</span>
                    <span className={css.percentage}>{stat.percentage}%</span>
                </li>
                })}
            </ul>
        </section>
  );
};

export default Statistics

// {/* <li className='item'>
//                     <span className='label'>{stats.label}</span>
//                     <span className='percentage'>{stats.percentage}</span>
//                 </li>
//                 <li className='item'>
//                     <span className='label'></span>
//                     <span className='percentage'></span>
//                 </li>
//                 <li className='item'>
//                     <span className='label'></span>
//                     <span className='percentage'></span>
//                 </li>
//                 <li className='item'>
//                     <span className='label'></span>
//                     <span className='percentage'></span>
//                 </li> */}