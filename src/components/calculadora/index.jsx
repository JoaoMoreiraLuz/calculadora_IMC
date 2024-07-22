import { useState } from 'react'

import styles from './calculadora.module.css'

const Calculadora = ({}) => {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [resultado, setResultado] = useState("");

    const calcularImc = () => {
        const imc = peso / (altura * altura);
        const formatarImc = imc.toFixed(2);
        setResultado(formatarImc);
    };

    return (
        <div className={styles.container}>
            <div className={styles.fundo}>
                <div className={styles.calculadora}>
                    <div className={styles.calculadora__peso}>
                        <label className={styles.label}>Insira seu peso</label>
                        <input className={styles.input} type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
                    </div>
                    <div className={styles.calculadora__altura}>
                        <label className={styles.label}>Insira sua altura</label>
                        <input className={styles.input} type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
                    </div>
                </div>
                    <div className={styles.buttonDiv}>
                        <button className={styles.button} onClick={calcularImc}>Calcular</button>
                    </div>
                <div className={styles.resultado}>
                    <p className={styles.resultadoText}>Seu resultado foi: {resultado}</p>
                </div>
            </div>
        </div>
    )
}

export default Calculadora