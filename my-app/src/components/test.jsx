import React, { Component } from 'react';
import './test.scss';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: props.counter
        }
      };

      
      // Используйте только стрелочную форму методов
      // Почему? Подробный ответ будет в следующем уроке

      render() {

        const incrementFunction = ()=>{
            this.setState(state=>({
                counter:state.counter<10 ? state.counter +1 : 10
            }))
        };

        const decrementFunction = ()=>{
            this.setState(state=>({
                counter:state.counter>-10 ? state.counter -1 : -10
            }));
        };

        const getRandomArbitrary = (min, max)=> {
            this.setState(state=>({
                counter: Math.floor(Math.random() * (max - min) + min)
            }));
          }

        const resetFunction = () =>{
            this.setState(state =>({
                counter:0
            }));
        }

        return (
          <div className="app">
            <div className="counter">{this.state.counter}</div>
            <div className="controls">
              <button onClick={this.incrementFunction}>INC</button>
              <button onClick={this.decrementFunction}>DEC</button>
              <button onClick={()=>getRandomArbitrary(-10,10)}>RND</button>
              <button onClick={resetFunction}>RESET</button>
            </div>
          </div>
        )
      }
    // 1) Начальное значение счетчика должно передаваться через props
    // 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
    // 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
    // 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов
};

export default Test;