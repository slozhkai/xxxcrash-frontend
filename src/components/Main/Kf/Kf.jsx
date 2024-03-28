import React, { useState, useEffect } from 'react';
import './Kf.css';
import CoafisientList from "../../CoafisientList/CoafisientList.jsx";
import begun from '../../../img/gif/begun.gif';
import perdun from '../../../img/gif/perdun.gif';

function Kf({ betAmount }) {
    const [runnerPosition, setRunnerPosition] = useState(50);
    const [timer, setTimer] = useState(null);
    const [coefficient, setCoefficient] = useState(1);
    const [crashed, setCrashed] = useState(false);
    const [lastCrashCoefficient, setLastCrashCoefficient] = useState(0);
    const [failureChance, setFailureChance] = useState(0.1); // Начальный шанс на провал
    const [lastRunnerPosition, setLastRunnerPosition] = useState(0); // Позиция бегуна в момент краша

    // Старт анимации при изменении ставки
    useEffect(() => {
        if (betAmount > 0) {
            const interval = setInterval(() => {
                setRunnerPosition(prevPosition => {
                    setLastRunnerPosition(prevPosition); // Сохраняем позицию бегуна
                    return prevPosition + 1;
                });
                setCoefficient(prevCoefficient => prevCoefficient + 0.01); // Увеличиваем коэффициент на 0.01 каждые 100 мсек
                if (failureChance < 100) {
                    setFailureChance(prevChance => prevChance + 0.025); // Увеличиваем шанс на провал на 0.05% каждую секунду, если он меньше 100
                }
            }, 100);
            setTimer(interval);
        }
        return () => {
            clearInterval(timer);
        };
    }, [betAmount]);

    // Форматирование числа с учетом коэффициента
    const formatNumber = () => {
        return coefficient.toFixed(2) + ' X';
    };

    // Обработка краша
    useEffect(() => {
        if (Math.random() * 100 < failureChance) { // Проверка на краш с учетом шанса провала
            clearInterval(timer); // Остановка анимации бегуна
            setLastCrashCoefficient(coefficient); // Сохранение коэффициента на момент краша
            setRunnerPosition(0); // Возвращение бегуна на стартовую позицию
            setCrashed(true); // Устанавливаем флаг краша
        }
    }, [coefficient, failureChance, timer]);

    const restartBet = () => {
        setCrashed(false); // Сброс флага краша
        setCoefficient(lastCrashCoefficient); // Восстановление коэффициента на момент краша
        setFailureChance(0.15); // Возвращение начального значения шанса на провал
    };


    return (
        <div className={'kf__content'}>
            <div className={'kf__about'}>
                <div className={'kf__about_block'}>
                    <a className={'kf__about__text'}>Банк</a>
                    <a className={'bank__count'}>{betAmount.toFixed(2)} $</a>
                </div>
                <div className={'kf__about_block'}>
                    <a className={'kf__about__text'}>Раунд</a>
                    <a className={'round__count'}>1</a>
                </div>
            </div>

            <div className={'kf__count'} style={{ color: crashed ? 'red' : 'white' }}>{formatNumber()}</div>

            <CoafisientList/>
            {/* Runner */}
            {betAmount > 0 && !crashed && (
                <img src={begun} alt={'Runner'} className={'kf__runner'} style={{ left: `${runnerPosition}px` }} />
            )}
            {crashed && (
                <>
                    <img src={perdun} alt={'Perdun'} className={'kf__runner'} style={{ left: `${lastRunnerPosition}px` }} />
                </>
            )}
        </div>
    );
}

export default Kf;
