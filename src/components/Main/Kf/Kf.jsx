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
    const [failureChance, setFailureChance] = useState(0.15);
    const [lastRunnerPosition, setLastRunnerPosition] = useState(0);

    useEffect(() => {
        if (betAmount > 0) {
            const interval = setInterval(() => {
                setRunnerPosition(prevPosition => {
                    setLastRunnerPosition(prevPosition);
                    return prevPosition + 1;
                });
                setCoefficient(prevCoefficient => prevCoefficient + 0.01);
                if (failureChance < 100) {
                    setFailureChance(prevChance => prevChance + 0.025);
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
        if (Math.random() * 100 < failureChance) {
            clearInterval(timer);
            setLastCrashCoefficient(coefficient);
            setRunnerPosition(0);
            setCrashed(true);
        }
    }, [coefficient, failureChance, timer]);

    const restartBet = () => {
        setCrashed(false);
        setCoefficient(lastCrashCoefficient);
        setFailureChance(0.15);
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

            {/* Runner */}
            {betAmount > 0 && !crashed && (
                <img src={begun} alt={'Runner'} className={'kf__runner'} style={{ left: `${runnerPosition}px` }} />
            )}
            {crashed && (
                <>
                    <img src={perdun} alt={'Perdun'} className={'kf__runner'} style={{ left: `${lastRunnerPosition}px` }} />
                </>
            )}

            <CoafisientList />
        </div>
    );
}

export default Kf;