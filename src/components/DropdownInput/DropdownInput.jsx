import React, { useEffect, useRef, useState } from 'react';
import { Dropdown, Input, List, Item, Label } from './DropdownInput.styled'; 
// import { nanoid } from 'nanoid';

const DropdownInput = ({ label = 'Label', options, placeholder = 'Select option', onChange, name }) => {
// console.log(options);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(placeholder);
    const inputRef = useRef(null);

    const handleClickOnOption = (option) => {
        console.log(option);

        // const filteredCars = options.filter((car) => {
        //     return car.label === option;
        //   });

        setSelectedOption(option.label);
        onChange({ [name]: option.value });
        setIsOpen(false);
    };

    const handleOnEmptySelect = () => {
        setSelectedOption(placeholder)
        onChange({ [name]: null });
        setIsOpen(false);
        console.log('Empty Select!');
    }

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!inputRef.current) {
                return;
            }
            if (inputRef.current && !inputRef.current.contains(event.target) && isOpen) {
                setIsOpen(false)
            }
        }

        if (!isOpen) {
            return
        }

        document.addEventListener('mousedown', handleOutsideClick)

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }

    }, [isOpen])


    return (
        <div style={{ backgroundColor: "mediumslateblue", width: "500px", height: "93px", marginLeft: "20px", borderRadius: "8px", padding: "8px"}}>
            <Label>{"Car brand"}</Label>
            <Dropdown ref={inputRef}>
                <Input
                    name={name}
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    value={selectedOption}
                />
                {/* <Shevron className={`${styles.shevron} ${isOpen && styles.active}`} /> */}
                {isOpen && (
                    <List>
                        <Item
                        onClick={() => handleOnEmptySelect()}
                        >{placeholder}</Item>
                         {options.map((option) => ( 
                            <Item
                                key={option.value}
                                onClick={() => handleClickOnOption(option)}
                                // style={{
                                //      backgroundColor: selectedOption === option.value ? 'blue' : 'mediumlateblue',
                                // }}
                            >
                                {option.label}
                            </Item>
                         ))}
                    </List>
                )}
                {selectedOption && (selectedOption !== placeholder) && <button style={{ color: "white", backgroundColor: "blue", width: "280px", height: "30px", display: "flex",
    justifyContent: "center", marginTop: "10px", marginLeft: "auto", marginRight: "auto", borderRadius: "8px", alignItems: "center"}} onClick={() => handleOnEmptySelect()}>Delete Option </button>}
            </Dropdown>
        </div>
    );
};


export default DropdownInput;
