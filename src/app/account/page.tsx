'use client'
import { useState } from 'react'
import { account_tips } from '../../data/data'
import { Tip } from '../../types/types'

const SecureYourAccount = () => {
    const [data, setData] = useState<Tip[]>(account_tips)
    const [selectedTipIndex, setSelectedTipIndex] = useState<number | null>(null);

    const openModal = (index: number) => {
        setSelectedTipIndex(index);
    };

    const closeModal = () => {
        setSelectedTipIndex(null);
    };

    return (
        <main>
            <div className="flex flex-row mt-7 md:mt-0">
                <ul>
                    {data.map((item, index) => (
                        <>
                            <li key={index} className="card-style mb-4 w-3/4 md:w-full ml-12 md:ml-0">
                                {item.tip}
                                <div>
                                    {item.tip_description &&
                                        <button onClick={() => openModal(index)} className="learn-more-button">Learn more</button>
                                    }
                                    {selectedTipIndex === index && (
                                        <div className="modal-overlay">
                                            <div className="modal">
                                                <span className="close" onClick={closeModal}>&times;</span>
                                                <p>{item.tip_description}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default SecureYourAccount