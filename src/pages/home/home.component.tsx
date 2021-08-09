import React, { FC, useContext, useState } from 'react'
import { ThemeContext } from '../../contexts/theme.context';

import TodoList from '../../components/todo-list/todo-list.component';

import './home.styles.scss';

const Home: FC = () => {
  const [count, setCount] = useState<number>(1);
  const { theme, setTheme } = useContext(ThemeContext);

  const _onThemeClick = (): void => {
    setTheme(prevState => prevState === 'light' ? 'dark' : 'light');
  };

  const _onCountClick = (): void => {
    setCount(prevState => prevState + 1);
  };

  return (
    <div className='container'>
      <div className='group'>
        <h1>Homepage</h1>
      </div>

      <div className='group'>
        <h3>useContext</h3>
        <p>theme: {theme}</p>
        <button onClick={_onThemeClick}>Change Theme</button>
      </div>

      <br/>

      <div className='group'>
        <h3>useState</h3>
        <p>Count: {count}</p>
        <button onClick={_onCountClick}>Add Count</button>
      </div>

      <br/>

      <div className='group'>
        <TodoList/>
      </div>

    </div>
  );
};

export default Home
