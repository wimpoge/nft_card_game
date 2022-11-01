import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { attack, attackSound, defense, defenseSound, player01 as player01Icon, player02 as player02Icon } from '../assets';
import { Alert } from '../components'
import { useGlobalContext } from '../context'
import styles from '../styles'
import { playAudio } from '../utils/animation'

const Battle = () => {
    const { contract, gameData, setShowAlert, setBattleName, walletAddress, battleGround } = useGlobalContext();
    const [player1, setPlayer1] = useState({})
    const [player2, setPlayer2] = useState({})
    const { battleName } = useParams()
    const navigate = useNavigate()

    return (
        <div className={`${styles.flexBetween} ${styles.gameContainer} ${battleGround}`}>
            <h1 className='text-xl'>{battleName}</h1>
            
        </div>
    )
}

export default Battle