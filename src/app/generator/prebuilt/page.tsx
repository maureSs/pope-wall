'use client'
import Link from 'next/link';
import PrebuiltForm from '@/components/PrebuiltForm';
import { useState, useEffect, FormEvent } from 'react'
import { password_tips } from '../../../data/data'
import { Tip } from '@/types/types'
import { IoMdArrowRoundBack } from "react-icons/io";

const PrebuiltPassword = () => {
    const [items, setItems] = useState<string[]>([])
    const [generatedPassword, setGeneratedPassword] = useState<string>("");
    const [passwordSecurity, setPasswordSecurity] = useState<string>('');
    const [includeUpperCase, setIncludeUpperCase] = useState(false);
    const [includeLowerCase, setIncludeLowerCase] = useState(false);
    const [includeNumber, setIncludeNumber] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [data, setData] = useState<Tip[]>(password_tips)
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    function addText(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newItem: string = (e.target as HTMLFormElement).text.value;
        if (!newItem || items.length >= 30) return;
        setItems(prevItems => [...prevItems, newItem]);
        (e.target as HTMLFormElement).text.value = '';
    }

    function generatePassword() {
        let newPassword: string[] = [...items];

        // Add additional characters based on checkbox selections
        const includeUpperCase = (document.getElementById("includeUpperCase") as HTMLInputElement)?.checked;
        const includeLowerCase = (document.getElementById("includeLowerCase") as HTMLInputElement)?.checked;
        const includeNumber = (document.getElementById("includeNumber") as HTMLInputElement)?.checked;
        const includeSymbols = (document.getElementById("includeSymbols") as HTMLInputElement)?.checked;

        if (includeUpperCase) newPassword.push(getRandomUpperCase());
        if (includeLowerCase) newPassword.push(getRandomLowerCase());
        if (includeNumber) newPassword.push(getRandomNumber());
        if (includeSymbols) newPassword.push(getRandomSymbol());

        newPassword.sort(() => Math.random() - 0.5);

        if (newPassword.length > 30) {
            newPassword = newPassword.slice(0, 30);
        }

        setItems(newPassword);
        setGeneratedPassword(newPassword.join(""));
    }

    useEffect(() => {
        const containsUpperCase = /[A-Z]/.test(generatedPassword);
        const containsLowerCase = /[a-z]/.test(generatedPassword);
        const containsNumber = /[0-9]/.test(generatedPassword);
        const containsSymbol = /[@$*=/,.\-_?]/.test(generatedPassword);

        if (containsUpperCase && containsLowerCase && containsNumber && containsSymbol && generatedPassword.length > 20) {
            setPasswordSecurity('Very Strong');
        } else if (containsUpperCase && containsLowerCase && containsNumber && containsSymbol && generatedPassword.length > 15) {
            setPasswordSecurity('Strong');
        } else if (containsUpperCase && containsNumber && containsSymbol && generatedPassword.length > 12) {
            setPasswordSecurity('Medium');
        } else {
            setPasswordSecurity('Weak');
        }
    }, [generatedPassword]);

    function getRandomUpperCase() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }

    function getRandomLowerCase() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }

    function getRandomNumber() {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }

    function getRandomSymbol() {
        const symbols = "!@$*=/,.-_?";
        return symbols[Math.floor(Math.random() * symbols.length)];
    }

    return (
        <div className="password-gen-container opacity-90">
            <Link href="/generator" className="flex flex-row mt-7 md:mt-0"><IoMdArrowRoundBack className="text-2xl mr-2" />Return</Link>
            <h1 className="text-xl text-center md:text-3xl mt-20">Password generator prebuilt by you</h1>
            {generatedPassword && <div className="text-center p-4 text-lg md:text-xl text-green-300">{generatedPassword}</div>}
            {generatedPassword &&
                <div className="text-center p-4 text-md md:text-xl text-green-300">
                    {
                        passwordSecurity === 'Weak' ? <p className="text-red-400">{passwordSecurity}</p>
                            : passwordSecurity === 'Medium' ?
                                <p className="text-orange-400">{passwordSecurity}</p>
                                : <p className="text-green-600">{passwordSecurity}</p>
                    }
                </div>
            }
            <PrebuiltForm addText={addText} items={items} generatePassword={generatePassword} />
            <button onClick={openModal} className="learn-more-button mt-7 mb-7 ml-4 md:mb-0 md:ml-0">How to build a strong password</button>
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <ul className="list-disc">
                            {data.map((item, index) => (
                                <li key={index} className="p-4">
                                    <p>{item.tip}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PrebuiltPassword