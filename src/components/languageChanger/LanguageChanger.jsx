import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageChanger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const currentLanguage = i18n.language;
    const [selectedOption, setSelectedOption] = useState(currentLanguage === 'es' ? `${t('spanish')}` : `${t('english')}`);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setSelectedOption(lng === 'es' ? `${t('spanish')}` : `${t('english')}`);
    };

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    useEffect(() => {
        setSelectedOption(currentLanguage === 'es' ? `${t('spanish')}` : `${t('english')}`);
    }, [currentLanguage]);

    return (
        <div className="dropdown dropdown-bottom dropdown-end w-full">
            <div
                tabIndex={0}
                role="button"
                aria-expanded={isOpen}
                aria-haspopup="true"
                className="btn flex w-full bg-black text-white m-1 border-none hover:bg-white hover:text-black rounded-none"
                onClick={toggleDropdown}
            >
                {selectedOption}
            </div>

            {isOpen && (
                <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-black z-[1] w-full p-2 font-robotoCon"
                    role="menu"
                >
                    <li
                        onClick={() => changeLanguage('es')}
                        className='hover:bg-white hover:text-black border border-b-white border-x-0 border-t-0'
                    >
                        <span className='flex justify-start'>
                            <img src="/svg/spain-svg.svg" className='w-8 h-8' alt="Spanish flag" />
                            <p className="ml-2">{t('spanish')}</p>
                        </span>
                    </li>
                    <li
                        onClick={() => changeLanguage('en')}
                        className='hover:bg-white hover:text-black border border-b-white border-x-0 border-t-0'
                    >
                        <span className='flex justify-start'>
                            <img src="/svg/united-states-svg.svg" className='w-8 h-8' alt="English flag" />
                            <p className="ml-2">{t('english')}</p>
                        </span>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default LanguageChanger;
