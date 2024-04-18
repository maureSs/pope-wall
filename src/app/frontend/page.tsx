'use client'
import { useState } from 'react'
import { frontend_tips } from '../../data/data'

const FrontendSecurity = () => {
    const [data, setData] = useState(frontend_tips)
    const [selectedTipIndex, setSelectedTipIndex] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState<number | null>(4)

    const openModal = (index: number) => {
        setSelectedTipIndex(index);
    };

    const closeModal = () => {
        setSelectedTipIndex(null);
    };

    const selectCard = (index: number) => {
        setActiveTab(index)
    }

    return (
        <main className="grid grid-cols-1 gap-2 mt-7 ml-7 mb-7 md:mb-0 md:ml-0 md:mt-0 md:grid-cols-3 md:gap-4 md:w-4/5">
            {data.map((item, index) => (
                <div key={index} onClick={() => selectCard(index)} className={`${activeTab === index ? 'f-active-card-style' : 'f-card-style'} max-w-80 mr-7`} role="button">
                    <h5 className="font-bold pb-2">{item.tip}</h5>
                    <p className="text-sm">{item.tip_description}</p>
                    {item.tip_modal &&
                        <button onClick={() => openModal(index)} className="learn-more-button">Learn more</button>
                    }
                    {selectedTipIndex === index && (
                        <div className="modal-overlay">
                            <div className="modal">
                                <span className="close" onClick={closeModal}>&times;</span>
                                <p>{item.tip_modal}</p>
                            </div>
                        </div>
                    )}
                    {item.tip_about &&
                        <a href={item.tip_about} target="_blank" className="learn-more-button text-xs">Learn more</a>
                    }
                </div>
            ))}
        </main>
    )
}

export default FrontendSecurity